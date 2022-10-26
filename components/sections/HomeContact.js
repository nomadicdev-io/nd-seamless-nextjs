import { useRef, useState, useEffect } from "react";
import Container from "../Container";
import UISection from "../UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import mapboxgl from 'mapbox-gl';
import { motion } from "framer-motion";

import 'mapbox-gl/dist/mapbox-gl.css';
import { StlyledMapWrapper, StyledAddressWrapper, StyledContactWrapper, StyledSocialContact } from "../styles/Contact.styles";
import { DefaultIconButton } from "../Buttons";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "react-feather";


const HomeContact = ()=> {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbnNoYXNhbGltIiwiYSI6ImNrcjB6MXQ4ZjAyaHQzMXB0enVmZml5cXgifQ.x4Zbac3MleCpIhW_Qgf24A';

    const {contactContent} = useWebsiteContext();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(contactContent.location.lng);
    const [lat, setLat] = useState(contactContent.location.lat);
    const [zoom, setZoom] = useState(10);


    const contactContainerAnim = {
        offscreen: {opacity: 0},
        onscreen: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
            }
        }
    }

    const transformAnim = {
        offscreen: {opacity: 0, y: 100},
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.48, 0.26, 0.94],
            }
        }
    }

    const scaleAnim = {
        offscreen: {scale: 0},
        onscreen: {
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.48, 0.26, 0.94],
            }
        }
    }

    useEffect(() => {

        if (map.current) return; 

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/alanshasalim/cl8h4du2l000a14mt9gkeyggn',
            center: [lng, lat],
            zoom: zoom,
            interactive: false
        });

        const el = document.createElement('div');
        el.className = 'marker_';
  
        const marker = new mapboxgl.Marker(el)
            .setLngLat([lng, lat])
            .addTo(map.current);
    });

    const openSocial = (value)=> {
        window.open( value, "_blank");
    }

    return (
        <UISection id={'contact'}>
            <Container>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={contactContainerAnim}
                    viewport={{ once: true }}
                >

                    <StlyledMapWrapper
                        as={motion.div}
                        variants={transformAnim}
                    >
                        <div ref={mapContainer} className="map-container" />
                    </StlyledMapWrapper>

                    <StyledContactWrapper
                        as={motion.div}
                        variants={transformAnim}
                    >

                        <div className="content_">
                            <UITitleWrapper justify={'flex-start'}>
                                <UITitle title={contactContent.title} />
                            </UITitleWrapper>

                            <StyledAddressWrapper>
                                <motion.div 
                                variants={transformAnim}
                                className="item_"
                                >
                                    <div className="icon_">
                                        <MapPin />
                                    </div>
                                    <div className="field_">
                                        {
                                            contactContent.address.map((item, index)=> <span  key={index}>{item}</span>)
                                        }
                                    </div>
                                </motion.div>

                                <motion.div 
                                variants={transformAnim}
                                className="item_">
                                    <div className="icon_">
                                        <Phone />
                                    </div>
                                    <div className="field_">
                                        {
                                            contactContent.phone.map((item, index)=> <span  key={index}>{item}</span>)
                                        }
                                    </div>
                                </motion.div>

                                <motion.div 
                                variants={transformAnim}
                                className="item_">
                                    <div className="icon_">
                                        <Mail />
                                    </div>
                                    <div className="field_">
                                        {
                                            contactContent.email.map((item, index)=> <span  key={index}>{item}</span>)
                                        }
                                    </div>
                                </motion.div>
                            </StyledAddressWrapper>

                        </div>

                        <StyledSocialContact
                            as={motion.div}
                            variants={transformAnim}
                        >
                            <motion.h4 variants={transformAnim}>Follow Us On</motion.h4>

                            {   
                                contactContent.socialmedia &&
                                <ul>
                                    {
                                        contactContent.socialmedia.facebook &&
                                        <motion.li
                                            variants={scaleAnim}
                                        >
                                            <DefaultIconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.facebook)} >
                                                <Facebook />
                                            </DefaultIconButton>
                                        </motion.li>

                                    }

                                    {
                                        contactContent.socialmedia.instagram &&
                                        <motion.li
                                        variants={scaleAnim}
                                        >
                                            <DefaultIconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.instagram)} >
                                            <Instagram />
                                            </DefaultIconButton>
                                        </motion.li>

                                    }

                                    {
                                        contactContent.socialmedia.twitter &&
                                        <motion.li
                                        variants={scaleAnim}
                                        >
                                            <DefaultIconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.twitter)} >
                                                <Twitter />
                                            </DefaultIconButton>
                                        </motion.li>

                                    }

                                    {
                                        contactContent.socialmedia.youtube &&
                                        <motion.li
                                        variants={scaleAnim}
                                        >
                                            <DefaultIconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.youtube)} >
                                                <Youtube />
                                            </DefaultIconButton>
                                        </motion.li>

                                    }
                                </ul>
                            }

                        </StyledSocialContact>

                    </StyledContactWrapper>

                </motion.div>
            
            </Container>
        </UISection>
    )
}

export default HomeContact;