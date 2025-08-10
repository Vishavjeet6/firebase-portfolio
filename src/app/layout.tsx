import type { Metadata } from 'next';
// import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

// Temporary fallback fonts until Google Fonts connectivity is available
// const inter = Inter({ 
//   subsets: ['latin'], 
//   variable: '--font-inter',
//   fallback: ['system-ui', 'arial'],
//   display: 'swap'
// });
// const spaceGrotesk = Space_Grotesk({ 
//   subsets: ['latin'], 
//   variable: '--font-space-grotesk',
//   fallback: ['system-ui', 'arial'],
//   display: 'swap'
// });

export const metadata: Metadata = {
  title: 'Vishavjeet Singh | Software Engineer',
  description: 'Portfolio of Vishavjeet Singh, a results-driven Software Engineer with 5+ years of experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
