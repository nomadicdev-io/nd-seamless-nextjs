import Head from "next/head";
import HomeAbout from "../components/sections/HomeAbout";
import HomeBanner from "../components/sections/HomeBanner";
import HomeClients from "../components/sections/HomeClients";
import HomeContact from "../components/sections/HomeContact";
import HomeProducts from "../components/sections/HomeProducts";
import HomeServices from "../components/sections/HomeServices";
import HomeWho from "../components/sections/HomeWho";
import { WebsiteContentProvider } from "../store/websiteContent";

export default function Home() {

  return (
   <>
    <WebsiteContentProvider>
      <HomeBanner />
      <HomeAbout />    
      <HomeWho />
      <HomeProducts /> 
      <HomeServices /> 
      <HomeClients />
      <HomeContact /> 
    </WebsiteContentProvider>
   </>
  )
}
