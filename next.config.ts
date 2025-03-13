import type { NextConfig } from "next";
/*import path from 'path'
@mport getConfig from 'next/config'
*/

const nextConfig: NextConfig = {
  /* config options here */
	serverRuntimeConfig: {
		PROJECT_ROOT: __dirname
	}

};



export default nextConfig;
