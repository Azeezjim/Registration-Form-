import '../styles/globals.css';
import Layout from '../components/Layout';
import {SessionProvider} from "next-auth/react";
import {wrapper} from '../store';

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>   
  ) 
}

export default wrapper.withRedux(MyApp);




