import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Duarte | Portafolio",
  description:
    "Este es mi portafolio personal donde resumo y destaco mi linea de tiempo profesional como desarrollador",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white min-h-screen">
        <main
          className="
            w-full 
            max-w-4xl 
            mx-auto 
            px-4 
            sm:px-6 
            md:px-8 
            py-6 
            md:py-10
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
