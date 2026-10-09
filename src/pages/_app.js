import "@/styles/globals.css";
import { DM_Sans, Newsreader, Space_Mono } from "next/font/google";

export const metadata= {
  title: "Crystal Kizor",
  description:
    "Crystal Kizor — architect, designer, researcher, entrepreneur and speaker.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${dmSans.variable} ${newsreader.variable} ${spaceMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}