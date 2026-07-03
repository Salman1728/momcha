import type { Metadata } from "next";
import { Baloo_2, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MOMcha — Sip. Smile. Repeat.",
    template: "%s · MOMcha",
  },
  description:
    "MOMcha is a matcha & coffee café in Nairobi. Handcrafted matcha lattes, specialty coffee, mojitos and waffles — delicious drinks made with love, just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${poppins.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Splash />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
