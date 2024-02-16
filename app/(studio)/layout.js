import { Inter, Roboto, Montserrat } from "next/font/google";
import '../globals.css'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}