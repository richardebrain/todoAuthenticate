import auth0 from "./utils/auth0";

export default async function callBack(req, res) {
  try {
    await auth0.handleCallback(req, res,{redirectTo: '/'});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
