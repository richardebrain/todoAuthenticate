import auth0 from "./utils/auth0";


export default async function login(req,res){
  // <= instance meth
    try {
      // `auth0.handleAuth` and `handleLogin` will be using separate instances.
      // You should use `auth0.handleLogin` instead
      await auth0.handleLogin(req, res); // <= named export
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  
};