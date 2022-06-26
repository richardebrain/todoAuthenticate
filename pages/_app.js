import Layout from "../components/Layout";
import TodoWrapper from "../context/TodoContext";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user, loading } = pageProps;
  return (
    
  
    <TodoWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoWrapper>
    
  );
}

export default MyApp;
