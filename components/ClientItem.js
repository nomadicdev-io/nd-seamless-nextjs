import Image from "next/image";
import Link from "next/link";
import { StytledClientItem } from "./styles/Client.styles";

const ClientItem = ({data})=> {
    return (
        <StytledClientItem href={data.link} title={data.name} target="_blank">
            <Image src={data.imageUrl} layout="fill" objectFit="contain" objectPosition="center"/>
        </StytledClientItem>
    )
}

export default ClientItem;