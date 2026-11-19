import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Tully",
  description: "Created by Group 6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#104D12]">
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
