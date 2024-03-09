import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EagleMD",
  description: "Mental Health Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-primaryColor'>
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto my-20">
          {children}
        </main>
        </body>
    </html>
  );
}
