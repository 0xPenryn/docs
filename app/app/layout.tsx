import './globals.css';
import 'focus-visible';
import '@ens-tools/thorin-core/style.css';

import { Theme } from './theme';

export const metadata = {
    title: 'ENS Documentation',
    description: 'Documentation for the ENS protocol.',
};

export default function RootLayout(properties) {
    const { children } = properties;

    return (
        <html lang="en" suppressHydrationWarning className="not-system">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <script
                    defer
                    data-domain="docs.ens.domains"
                    src="https://science.nt3.me/js/script.local.js"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
                    }}
                />
            </head>
            <body className="bg-ens-light-background-primary dark:bg-ens-dark-background-primary text-ens-light-text-primary dark:text-ens-dark-text-primary">
                <Theme>{children}</Theme>
                <script
                    defer
                    data-domain="docs.ens.domains"
                    src="https://plausible.io/js/script.js"
                ></script>
            </body>
        </html>
    );
}
