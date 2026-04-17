// app/(main)/layout.tsx
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"; // Or wherever yours is

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}