// src/app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'Nosso Casamento',
  description: 'Convite e lista de presentes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body className="bg-white text-gray-800">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
