import { Inter, Roboto, Montserrat } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";
import { Providers } from "../providers";


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
  title: "BOB Law Firm",
  description:
    "Bob Law Firm - Experienced personal injury attorneys in Atlanta, Georgia. We offer free case evaluations and no fees unless we recover money for you. Get expert legal representation for your personal injury claim today.",
};

export default async function RootLayout({ children }) {
  //get all of our pages
  const pages = await getPages();

  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        <NavBar allPages={{ pages }} />

        <Providers>{children}</Providers>
        <div className="h-10 md:mt-5 text-center uppercase hover:text-gold-500 font-bold">
          <Link href={`#home`}>Return to top of page</Link>
        </div>        <Footer />
      </body>
    </html>
  );
}

{
  /* {pages.map((page) => (
            <Link key={page.id} href={`/${page.slug}`}>
              {page.title}
            </Link>
          ))} */
}
