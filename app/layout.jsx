import "./globals.css";

export const metadata = {
  title: "Srivardhan Muchkuri | Portfolio",
  description: "Interactive Kali-themed portfolio for Srivardhan Muchkuri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f1113] text-[#c9d1d9]">{children}</body>
    </html>
  );
}
