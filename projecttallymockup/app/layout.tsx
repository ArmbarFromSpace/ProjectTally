import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Tully",
  description: "Created by Group 6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-[#104D12]">
        <main className="mx-auto flex min-h-10 max-w-5xl flex-col p-6">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
