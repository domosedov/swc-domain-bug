/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["effector-swc-plugin", {}]],
  },
};

export default nextConfig;
