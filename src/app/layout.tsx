import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/ui/Header";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
