import { createContext, useContext, useState } from "react";
import jsonData from "./data";

const WebsiteContentContext = createContext();

export const WebsiteContentProvider = ({children})=> {

    const [data, setData] = useState(jsonData);

    const websiteTitle = data.title;
    const metadata = data.metadata;
    const bannerContent = data.banner;
    const abooutContent = data.about;
    const whoContent = data.whoweare;
    const productsContent = data.products;
    const servicesContent = data.services;
    const clientsContent = data.clients;
    const contactContent = data.contact;

    return (
        <WebsiteContentContext.Provider value={{
            websiteTitle, 
            metadata, 
            bannerContent, 
            abooutContent, 
            whoContent, 
            productsContent,
            servicesContent,
            clientsContent,
            contactContent
            }}>
            {children}
        </WebsiteContentContext.Provider>
    )
}

export const useWebsiteContext = ()=> {
    const {
        websiteTitle, 
        metadata, 
        bannerContent, 
        abooutContent, 
        whoContent, 
        productsContent,
        servicesContent,
        clientsContent,
        contactContent} = useContext(WebsiteContentContext);

    return {
        websiteTitle, 
        metadata, 
        bannerContent, 
        abooutContent, 
        whoContent,
        productsContent,
        servicesContent,
        clientsContent,
        contactContent
    };
}