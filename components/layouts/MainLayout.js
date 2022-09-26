import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({children}) {
  return (
    <>
        <Head>
            <title>Seamless Oilfield Equipments Supplies | #1 Oilfield Equipments Supplies in UAE | Abu Dhabi | Dubai</title>
            <meta name="description" content="We  Seamless Oilfield Equipment Supplies In Abudhabi From 2001  as a   Stockiest and  Supplier for  Oil& GAS industry Projects and Infrastructural materials to Major EPC contractors , MEP contractors We have an integrated stock of very high quality products like Pipes, Valves, Fittings, Flanges Gaskets and Stud bolts etc, - All from leading manufactures from Europe and China ."/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <meta property="og:title" content="Seamless Oilfield Equipments Supplies | #1 Oilfield Equipments Supplies in UAE | Abu Dhabi | Dubai" />
            <meta property="og:description" content="We  Seamless Oilfield Equipment Supplies In Abudhabi From 2001  as a   Stockiest and  Supplier for  Oil& GAS industry Projects and Infrastructural materials to Major EPC contractors , MEP contractors We have an integrated stock of very high quality products like Pipes, Valves, Fittings, Flanges Gaskets and Stud bolts etc, - All from leading manufactures from Europe and China . " />
            <meta property="og:image" content="/og-bg.png" />
            <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
            <link rel="preload" href="/logo.svg" as="image"/>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" size="57x57" href="/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" size="60x60" href="/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" size="72x72" href="/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" size="76x76" href="/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" size="114x114" href="/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" size="120x120" href="/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" size="144x144" href="/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" size="152x152" href="/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" size="180x180" href="/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" size="192x192" href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" size="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" size="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" size="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
        <Header />
            <main className={styles.page_}>{children}</main>
        <Footer />
    </>
  )
}
