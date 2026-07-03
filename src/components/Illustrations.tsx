import type { SVGProps } from "react";

export type Flavor = "matcha" | "blue" | "latte" | "berry";

const palettes: Record<
  Flavor,
  { top: string; mid: string; base: string; cream: string }
> = {
  matcha: { top: "#dff0c2", mid: "#a5d15f", base: "#79b23c", cream: "#fdfaf3" },
  blue: { top: "#e8f1ff", mid: "#5f8ef0", base: "#1652e0", cream: "#ffffff" },
  latte: { top: "#f3e5d3", mid: "#c89b6a", base: "#8a5a33", cream: "#fdf6ec" },
  berry: { top: "#ffe3ec", mid: "#f27ba0", base: "#d94f7d", cream: "#fff5f8" },
};

/** Illustrated iced drink in a clear MOMcha cup, whipped cream on top. */
export function DrinkCup({
  flavor = "matcha",
  className,
  ...props
}: { flavor?: Flavor } & SVGProps<SVGSVGElement>) {
  const p = palettes[flavor];
  const id = `cup-${flavor}`;
  return (
    <svg viewBox="0 0 200 280" className={className} {...props}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.top} />
          <stop offset="45%" stopColor={p.mid} />
          <stop offset="100%" stopColor={p.base} />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="18%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="82%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* straw */}
      <rect x="118" y="8" width="14" height="88" rx="7" fill={p.base} transform="rotate(8 125 52)" />

      {/* drink body inside tapered cup */}
      <path
        d="M50 78 L150 78 L138 252 Q137 264 125 264 L75 264 Q63 264 62 252 Z"
        fill={`url(#${id}-body)`}
      />

      {/* cloudy milk swirls */}
      <g fill={p.cream} opacity="0.85">
        <ellipse cx="82" cy="140" rx="22" ry="12" />
        <ellipse cx="118" cy="168" rx="26" ry="13" opacity="0.7" />
        <ellipse cx="88" cy="200" rx="20" ry="11" opacity="0.6" />
        <ellipse cx="116" cy="228" rx="18" ry="10" opacity="0.5" />
      </g>

      {/* glass shine */}
      <path
        d="M50 78 L150 78 L138 252 Q137 264 125 264 L75 264 Q63 264 62 252 Z"
        fill={`url(#${id}-glass)`}
      />
      <path
        d="M50 78 L150 78 L138 252 Q137 264 125 264 L75 264 Q63 264 62 252 Z"
        fill="none"
        stroke="#0a2a85"
        strokeOpacity="0.15"
        strokeWidth="3"
      />

      {/* whipped cream */}
      <g fill={p.cream} stroke="#0a2a85" strokeOpacity="0.08" strokeWidth="2">
        <ellipse cx="100" cy="76" rx="54" ry="16" />
        <circle cx="72" cy="62" r="16" />
        <circle cx="100" cy="52" r="19" />
        <circle cx="128" cy="62" r="16" />
        <circle cx="100" cy="36" r="13" />
      </g>
      {/* drizzle */}
      <path
        d="M70 62c10 8 18-6 30-2s16 10 30 2"
        fill="none"
        stroke={p.mid}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* label */}
      <rect x="66" y="150" width="68" height="26" rx="13" fill="#ffffff" opacity="0.92" />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#1652e0"
        fontFamily="var(--font-baloo), cursive"
      >
        MOMcha
      </text>
    </svg>
  );
}

/** Illustrated waffle with cream and drizzle. */
export function Waffle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 280" className={className} {...props}>
      <defs>
        <linearGradient id="waffle-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0b45c" />
          <stop offset="100%" stopColor="#c9832e" />
        </linearGradient>
      </defs>
      {/* plate */}
      <ellipse cx="100" cy="228" rx="86" ry="26" fill="#e9effc" />
      <ellipse cx="100" cy="222" rx="70" ry="20" fill="#ffffff" />

      {/* waffle rounds */}
      <g>
        <circle cx="78" cy="176" r="52" fill="url(#waffle-g)" />
        <circle cx="124" cy="188" r="48" fill="url(#waffle-g)" />
        {/* grid pockets */}
        <g fill="#a3661d" opacity="0.55">
          {[58, 78, 98].map((x) =>
            [156, 176, 196].map((y) => (
              <rect key={`${x}${y}`} x={x - 6} y={y - 6} width="12" height="12" rx="3" />
            ))
          )}
          {[108, 128, 148].map((x) =>
            [172, 192].map((y) => (
              <rect key={`${x}${y}`} x={x - 6} y={y - 6} width="12" height="12" rx="3" />
            ))
          )}
        </g>
      </g>

      {/* cream swirl */}
      <g fill="#fdfaf3" stroke="#0a2a85" strokeOpacity="0.08" strokeWidth="2">
        <ellipse cx="96" cy="120" rx="34" ry="14" />
        <circle cx="96" cy="104" r="18" />
        <circle cx="96" cy="88" r="12" />
      </g>
      {/* lotus drizzle */}
      <path
        d="M60 140c16 10 28-8 44-4s24 14 40 6"
        fill="none"
        stroke="#c9832e"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

/** Small matcha bowl + whisk illustration. */
export function MatchaBowl({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 160" className={className} {...props}>
      <ellipse cx="100" cy="136" rx="72" ry="14" fill="#e9effc" />
      <path d="M40 70a60 46 0 0 0 120 0z" fill="#ffffff" stroke="#d6e4ff" strokeWidth="3" />
      <ellipse cx="100" cy="70" rx="60" ry="16" fill="#8dc63f" />
      <ellipse cx="100" cy="68" rx="52" ry="12" fill="#a5d15f" />
      <path
        d="M126 20l26-14M124 24c-14 2-24 12-22 22s14 10 20 4 10-18 8-26"
        fill="none"
        stroke="#c9832e"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
