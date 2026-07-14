import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Mapas Diagnósticos Sem Troca-Troca",
  description: "Mais de 50 mapas visuais de diagnóstico para injeção eletrônica, com sequências simples de testes antes de trocar qualquer peça.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          id="utmify-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6a5628168e37c042337ddf94";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
