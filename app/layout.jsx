import "./globals.scss";

export const metadata = {
  title: "Travel",
  description: "Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
