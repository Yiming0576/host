/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/host',  // The subdirectory for your GitHub Pages site
    assetPrefix: '/host/', // Ensure assets are loaded correctly from the same subdirectory
  };
  
  export default nextConfig;
  