import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://evolutionstudiofitness.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evolution Studio Fitness | Aulas Coletivas em Charqueadas-RS – Daiane Goulart",
  description:
    "Evolution Studio Fitness em Charqueadas-RS: Jump, Step, Funcional, Localizados, HIIT Dance e Mobilidade. Turmas coletivas com energia alta. Agende sua aula experimental no WhatsApp.",
  keywords: [
    "academia charqueadas",
    "studio fitness charqueadas",
    "jump charqueadas",
    "step",
    "funcional",
    "hiit dance",
    "Daiane Goulart",
    "Evolution Studio Fitness",
  ],
  openGraph: {
    title: "Evolution Studio Fitness — Sua melhor versão começa aqui",
    description:
      "Aulas coletivas: Jump, Step, Funcional, Localizados, HIIT Dance e Mobilidade. Agende sua aula experimental.",
    type: "website",
    locale: "pt_BR",
    siteName: "Evolution Studio Fitness",
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-[#050505] text-zinc-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
