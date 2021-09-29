import {FaLinkedinIn,FaGithub,FaInstagram} from 'react-icons/fa'

import { Container } from './styles'

const Footer = () => (
        <Container>
            <a 
                href="https://www.linkedin.com/in/leandro-rittes/" 
                target='_self' 
                
            >
                <FaLinkedinIn/>
            </a>
            <a 
                href="https://github.com/LRittes" 
                target='_self' 
            >
                <FaGithub/>
            </a>
            <a 
                href="https://www.instagram.com/l.rittes/" 
                target='_self' 
            >
                <FaInstagram/>
            </a>
        </Container>
)

export default Footer