import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Analisa Angka",
  description: "Aplikasi analisa angka dengan database lama dan scraper GitHub Actions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <div className="app-shell">
          {children}
        </div>
      </body>
    </html>
  );
}
