import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Surendra Pandar",
  description: "Building the future with code.",
  keywords: [
    "Surendra Pandar",
    "Surendra",
    "Pandar",
    "Surendra Pandar Portfolio",
    "website development",
    "web development",
    "software development",
    "app development",
    "AI MVP development",
    "AI development",
    "AI",
    "AI agent development",
    "software agency",
    "software agency in India",
    "software agency in jaipur",
    "software agency in rajasthan",
    "software agency in jaipur rajasthan",
    "E-commerce development",
    "E-commerce",
    "Food delivery app development",
    "Food delivery app",
    "Travel app development",
    "CRM development",
    "Course website development",
  ],
  openGraph: {
    title: "Surendra Pandar",
    description: ".",
    url: "https://www.surendrapandar.dev",
    siteName: "Surendra Pandar",
    images: [
      {
        url: "https://i.ibb.co/XkYtcg6H/Mockup.png",
        width: 1200,
        height: 630,
        alt: "Surendra Pandar OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <Script
          src="https://widget.senja.io/widget/73033569-988a-46f5-820f-b7f180948ba0/platform.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="5f04c0d8-7f1d-4ac3-8251-37a6bdcbb787"
        strategy="afterInteractive"
        defer
      />
    </html>
  );
}
