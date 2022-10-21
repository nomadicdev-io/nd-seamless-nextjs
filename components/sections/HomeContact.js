import { useRef, useState, useEffect } from "react";
import Container from "../Container";
import UISection from "../UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { StlyledMapWrapper, StyledAddressWrapper, StyledContactWrapper, StyledSocialContact } from "../styles/Contact.styles";
import { IconButton } from "../Buttons";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "react-feather";


const HomeContact = ()=> {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbnNoYXNhbGltIiwiYSI6ImNrcjB6MXQ4ZjAyaHQzMXB0enVmZml5cXgifQ.x4Zbac3MleCpIhW_Qgf24A';

    const {contactContent} = useWebsiteContext();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(contactContent.location.lng);
    const [lat, setLat] = useState(contactContent.location.lat);
    const [zoom, setZoom] = useState(10);

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

                <StlyledMapWrapper>
                    <div ref={mapContainer} className="map-container" />
                </StlyledMapWrapper>

                <StyledContactWrapper>

                    <div className="content_">
                        <UITitleWrapper justify={'flex-start'}>
                            <UITitle title={contactContent.title} />
                        </UITitleWrapper>

                        <StyledAddressWrapper>
                            <div className="item_">
                                <div className="icon_">
                                    <MapPin />
                                </div>
                                <div className="field_">
                                    {
                                        contactContent.address.map((item, index)=> <span  key={index}>{item}</span>)
                                    }
                                </div>
                            </div>

                            <div className="item_">
                                <div className="icon_">
                                    <Phone />
                                </div>
                                <div className="field_">
                                    {
                                        contactContent.phone.map((item, index)=> <span  key={index}>{item}</span>)
                                    }
                                </div>
                            </div>

                            <div className="item_">
                                <div className="icon_">
                                    <Mail />
                                </div>
                                <div className="field_">
                                    {
                                        contactContent.email.map((item, index)=> <span  key={index}>{item}</span>)
                                    }
                                </div>
                            </div>
                        </StyledAddressWrapper>

                    </div>

                    <StyledSocialContact>
                        <h4>Follow Us On</h4>

                        {   
                            contactContent.socialmedia &&
                            <ul>
                                {
                                    contactContent.socialmedia.facebook &&
                                    <li>
                                        <IconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.facebook)} >
                                            <Facebook />
                                        </IconButton>
                                    </li>

                                }

                                {
                                    contactContent.socialmedia.instagram &&
                                    <li>
                                        <IconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.instagram)} >
                                           <Instagram />
                                        </IconButton>
                                    </li>

                                }

                                {
                                    contactContent.socialmedia.twitter &&
                                    <li>
                                        <IconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.twitter)} >
                                            <Twitter />
                                        </IconButton>
                                    </li>

                                }

                                {
                                    contactContent.socialmedia.youtube &&
                                    <li>
                                        <IconButton color={'white'} iconSize={'xs'} clicked={ ()=> openSocial(contactContent.socialmedia.youtube)} >
                                            <Youtube />
                                        </IconButton>
                                    </li>

                                }
                            </ul>
                        }

                    </StyledSocialContact>

                </StyledContactWrapper>

            </Container>
        </UISection>
    )
}

export default HomeContact;