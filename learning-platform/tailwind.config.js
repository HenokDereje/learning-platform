export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                secondary: '#F59E0B',
                dark: '#0F172A',
                surface: '#1E293B',
                text: '#F8FAFC',
                muted: '#CBD5E1',
            },
            boxShadow: {
                glow: '0 24px 80px rgba(37, 99, 235, 0.16)',
                soft: '0 16px 40px rgba(15, 23, 42, 0.20)',
            },
            borderRadius: {
                xl: '1.25rem',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 35%)',
            },
        },
    },
}
