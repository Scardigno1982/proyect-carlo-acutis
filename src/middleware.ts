import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'es'],

    // Used when no locale matches
    defaultLocale: 'es',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|es)/:path*'],
};

// export const config = {
//     matcher: ['/((?!_next|favicon.ico).*)'],
// };
