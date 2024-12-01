import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body className={`${satoshi.className} dark:bg-bg-primary-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
