'use client'; // Directiva para convertir el componente en un Client Component

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual
import { useLocale } from 'next-intl'; // Hook para obtener el idioma actual

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname(); // Obtiene la ruta actual
    const locale = useLocale(); // Obtiene el idioma actual

    return (
        <header className="p-4">
            <nav className="flex items-center justify-between switcher">
                {/* Link a la página principal con el locale actual */}
                <Link href={`/${locale}`}>{t('home')}</Link>
                {/* Link a la página de oración con el locale actual */}
                <Link href={`/${locale}/oracion`}>{t('url')}</Link>
                {/* Componente para cambiar de idioma */}
                <LocalSwitcher />
            </nav>
        </header>
    );
}
