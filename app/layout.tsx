import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Duarte | Portafolio",
  description: "Este es mi portafolio personal donde resumo y destaco mi linea de tiempo profesional como desarrollador",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

