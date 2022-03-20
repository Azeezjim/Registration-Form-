import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
    
}

export default MyApp
