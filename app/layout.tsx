import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stylesheets from "@/components/Stylesheets";
import LegacyScripts from "@/components/LegacyScripts";
export const metadata = { title: "SAMTEL GROUP" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Stylesheets />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <LegacyScripts />
      </body>
    </html>
  );
}
