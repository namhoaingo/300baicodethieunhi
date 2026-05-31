import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "eng-review-os",
  description: "Performance evidence and review tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-3">
            <a href="/" className="font-semibold text-[var(--text)] no-underline">
              eng-review-os
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/teams">Teams</a>
              <a href="/people">People</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
