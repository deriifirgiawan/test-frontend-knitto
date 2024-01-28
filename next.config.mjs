/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	rewrites: async () => {
		return [
			{
				source: "/api/:path",
				destination: "https://jsonplaceholder.typicode.com/:path",
			},
		];
	},
};

export default nextConfig;
