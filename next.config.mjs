/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/host',  // Your GitHub repository name
  assetPrefix: '/host/', // Your GitHub repository name
  trailingSlash: true,
  reactStrictMode: true,

};
  
  export default nextConfig;
  