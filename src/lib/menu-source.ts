import { menu, type MenuGroup, type MenuSection } from "./menu";

/**
 * Menu content source for the menu page.
 *
 * When RESTAURANTOS_URL is set, sections come from the RestaurantOS central
 * admin (ISR, revalidated every 5 minutes) so menu edits go live without a
 * redeploy. Any fetch problem falls back to the compiled-in menu in
 * src/lib/menu.ts, so the site never breaks with the API down.
 */

const SLUG = "momcha";

interface ApiItem {
  name: string;
  price: number;
  available: boolean;
  group: string | null;
  priceLarge: number | null;
}

interface ApiMenu {
  categories: { id: string; name: string; items: ApiItem[] }[];
}

/** Section icons are presentation, so they stay site-side, keyed by title. */
const iconByTitle: Record<string, MenuSection["icon"]> = {
  Matcha: "matcha",
  Coffee: "coffee",
  "Iced Coffee": "iced",
  "Warm Drinks": "warm",
  "Iced Drinks": "iced",
  Mojitos: "mojito",
  Waffles: "waffle",
  Extras: "extra",
  "Cold Foams": "foam",
};

export async function getMenuSections(): Promise<MenuSection[]> {
  const base = process.env.RESTAURANTOS_URL;
  if (!base) return menu;

  try {
    const res = await fetch(
      `${base.replace(/\/$/, "")}/api/public/menu/${SLUG}`,
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(5000) }
    );
    if (!res.ok) return menu;
    const data = (await res.json()) as ApiMenu;
    if (!Array.isArray(data.categories)) return menu;

    const sections: MenuSection[] = [];
    for (const cat of data.categories) {
      const items = (cat.items ?? []).filter((i) => i.available);
      if (items.length === 0) continue;

      // Rebuild sub-groups (e.g. "Classic Sips") preserving first-seen order.
      const groups: MenuGroup[] = [];
      for (const item of items) {
        const label = item.group ?? undefined;
        let group = groups.find((g) => g.label === label);
        if (!group) {
          group = { label, items: [] };
          groups.push(group);
        }
        group.items.push({
          name: item.name,
          price: Number(item.price),
          priceLarge: item.priceLarge ?? undefined,
        });
      }

      sections.push({
        id: cat.id,
        title: cat.name,
        icon: iconByTitle[cat.name] ?? "extra",
        groups,
      });
    }

    return sections.length > 0 ? sections : menu;
  } catch (err) {
    console.error("RestaurantOS menu fetch failed:", err);
    return menu;
  }
}
