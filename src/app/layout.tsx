import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Vhonani Tech",
  description: "Template created by Amakhoe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased bg-primaria">
        {children}
      </body>
    </html>
  );
}
