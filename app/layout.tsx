import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "@/assets/styles/globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Practice Store",
  description: "Ecommerce Store with NextJS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.className, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
