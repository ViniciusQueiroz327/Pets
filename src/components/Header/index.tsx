import { Container } from './style'
import { FaPaw } from "react-icons/fa6"
 
const Header = () => {
    return (
        <Container>
            <h1>Pets</h1>
            <FaPaw size={55} color='#F5A405'/>
        </Container>
    )
}

export { Header }