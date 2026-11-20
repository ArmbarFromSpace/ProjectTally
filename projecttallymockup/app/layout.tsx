import type { Metadata } from "next";
import { Big_Shoulders, Bitcount_Prop_Single } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const bitcount = Bitcount_Prop_Single({
  subsets: ["latin"],
  variable: "--font-bitcount",
});

export const metadata: Metadata = {
  title: "Project Tully",
  description: "Created by Group 6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${bitcount.variable}`}>
      <body className="min-h-dvh flex flex-col bg-[#104D12]">
        <main className="mx-auto flex w-full max-w-5xl flex-col p-6">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
