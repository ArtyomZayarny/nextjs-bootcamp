/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com']
    // loader: 'custom'
    // loaderFile: './components/ui/RemoteImage.tsx'
  }
}

export default nextConfig
