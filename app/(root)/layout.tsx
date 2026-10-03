import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "Ecommerce Store with NextJS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex h-screen flex-col">
         <main className="flex-1 wrapper">
            {children}
        </main>   
    </div>
  );
}




