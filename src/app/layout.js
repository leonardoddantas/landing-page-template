import './globals.css';

export const metadata = {
    title: 'Landing Page',
    description: 'Landing page built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
