import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Carlo Acutis en Chascomús: Historia, Devoción y Testimonio de Fe',
    description:
        'Descubre la vida y legado del Beato Carlo Acutis en Chascomús. Conoce su historia, la devoción en la ciudad y cómo su testimonio de fe impacta a jóvenes y creyentes en Argentina. Información sobre eventos, misas y recursos espirituales dedicados a Carlo Acutis en Chascomús.',
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    let messages;
    try {
        // Ajusta la ruta de importación de los mensajes
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        // Si no encuentra las traducciones, muestra un 404
        notFound();
    }

    return (
        <html lang={locale} className="bg-mosaic">
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="flex flex-col min-h-screen max-w-4xl mx-auto content-body">
                        <Header />
                        <div className="flex-grow mt-20">{children}</div>
                    </div>
                </NextIntlClientProvider>
                <Footer />
            </body>
        </html>
    );
}
