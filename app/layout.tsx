import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// eslint-disable-next-line camelcase
import { Inter, Roboto, Numans } from "next/font/google";
import ZoomWrapper from "@/components/ZoomWrapper";
import Header from "@/components/Header";

// Inter: All weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Roboto: All weights
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"], // Roboto officially supports these
});

// Numans: Only available at 400
const numans = Numans({
  subsets: ["latin"],
  variable: "--font-numans",
  weight: ["400"], // Only one available weight
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "JIRBDAI",
  description:
    "Journal of Institutional Research, Big Data Analytics and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${numans.variable} relative inset-x-0 w-full justify-items-center self-stretch  bg-white antialiased`}
      >
        <Header />
        <ZoomWrapper>{children}</ZoomWrapper>
      </body>
    </html>
  );
}
