import { Inter, Roboto, Montserrat } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import FetchPages from "../components/FetchPages";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "BOB Law",
  description:
    "Bob Law Firm - Experienced personal injury attorneys in Atlanta, Georgia. We offer free case evaluations and no fees unless we recover money for you. Get expert legal representation for your personal injury claim today.",
};

export default async function RootLayout({ children }) {
  //get all of our pages
  const pages = await getPages();

  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        <NavBar />
        <FetchPages/>
        {children}
        <div className="h-10 mb-2">
          {/* {pages.map((page) => (
            <Link key={page.id} href={`/${page.slug}`}>
              {page.title}
            </Link>
          ))} */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
