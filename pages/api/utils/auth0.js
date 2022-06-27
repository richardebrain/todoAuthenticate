import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  secret: process.env.NEXT_PUBLIC_AUTH0_SECRET,
  issuerBaseURL:'https://richardebrain.us.auth0.com',
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  
});


