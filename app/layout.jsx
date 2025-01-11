import { Inter } from "next/font/google";

import { Layout } from "@/components/dom/Layout";
import "@/global.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Qitao (Tom) Li",
  description: "Qitao (Tom) Li's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased ${inter.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>
          <div className="py-12 px-8">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
