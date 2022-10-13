import Head from "next/head";
import HomeAbout from "../components/sections/HomeAbout";
import HomeBanner from "../components/sections/HomeBanner";

export default function Home() {

  return (
   <>
    <HomeBanner />
    <HomeAbout />    
   </>
  )
}
