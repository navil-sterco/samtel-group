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
