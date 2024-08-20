/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api-qa.ripley.com/:path*', // Cambia la URL según sea necesario
            },
        ];
    },
};

export default nextConfig;