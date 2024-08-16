import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftHeader from "./temp_components/LeftHeaderContainer";
import HeaderContainer from "./temp_components/HeaderContainer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerebro",
  description: "Cerebro - LLMops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-full">
      <body className={inter.className + " h-full self-auto box-border"}>
        <div className=" flex flex-col h-full overflow-y-auto">
          <div className=" grow relative flex flex-col overflow-y-auto overflow-x-hidden bg-background-body">
            <div className=" flex overflow-hidden bg-gray-100 h-0 grow">
              <LeftHeader />
              <div className=" grow overflow-hidden">
                <HeaderContainer />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
