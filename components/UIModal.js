import { X } from "react-feather";
import { DefaultIconButton } from "./Buttons";
import { StyledModal, StyleModalContent } from "./styles/Common.styles";
import Image from "next/image";
import TextArea from "./TextArea";
import { motion } from "framer-motion";

const UIModal = ({data, modalClose})=> {

    const modalVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            }
        }
    }

    const itemVariant = {
        initial: {
            scale: 0.5,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
        }
    }

    return (
        <StyledModal
            as={motion.div}
            variants={modalVariant}
            initial="initial"
            animate="animate"
            exit="initial"
        >
            <div className="overlay_" onClick={modalClose}></div>
            <div className="close_btn_wrap">
                <DefaultIconButton clicked={modalClose}>
                    <X />
                </DefaultIconButton>
            </div>

            <StyleModalContent
                as={motion.div}
                variants={itemVariant}
            >
                <div className="inner_">
                    <div className="image_">
                        <Image 
                            src={data.imageUrl} 
                            layout="fill" 
                            alt={data.name}
                        />
                    </div>

                    <div className="content_">
                        <div className="title_">
                            <h4>{data.name}</h4>
                            <p>{data.type}</p>
                        </div>
                        <TextArea>
                            <p>{data.description}</p>
                        </TextArea>
                    </div>
                </div>
            </StyleModalContent>

        </StyledModal>
    )    
}

export default UIModal;