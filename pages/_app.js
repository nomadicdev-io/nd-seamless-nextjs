import MainLayout from '../components/layouts/MainLayout'
import '../styles/app.scss';
import { WebsiteContentProvider } from "../store/websiteContent";

function MyApp({ Component, pageProps }) {
  return (
    <WebsiteContentProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </WebsiteContentProvider>
  )
}

export default MyApp
