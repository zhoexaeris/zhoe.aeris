import { Inter, Quicksand, Source_Sans_3, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const sourcesans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-source-sans-3",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "♡ zhoe aeris ♡",
  description: "my 2024 portfolio",
  icons: {
    icon: "/web-logo.svg?v=3",
    shortcut: "/web-logo.svg?v=3",
    apple: "/web-logo.svg?v=3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${sourcesans3.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
