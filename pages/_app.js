import MainLayout from '../components/layouts/MainLayout'
import '../styles/app.scss';
import { WebsiteContentProvider } from "../store/websiteContent";
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/layouts/LoadingScreen';

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(true);
    }, 1000)
  }, []);

  return (

    <>
      {
        isLoading ? (
          <WebsiteContentProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </WebsiteContentProvider>
        ) : (
          <LoadingScreen />
        )
      }
    </>

    
  )
}

export default MyApp
