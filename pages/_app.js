import Layout from "../components/Layout";
import TodoWrapper from "../context/TodoContext";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user, loading } = pageProps;
  return (
    
   
    <TodoWrapper>
      <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </TodoWrapper>
    
    
  );
}

export default MyApp;
