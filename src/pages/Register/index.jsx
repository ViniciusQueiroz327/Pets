import { Link } from "react-router-dom"
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MdPerson, MdLock, MdLocalPostOffice } from "react-icons/md";
import { WrapperRegister, WrapperButtonRegister } from './style'
import { FaTag } from "react-icons/fa6"
import { GiPawHeart } from "react-icons/gi"

const Register = () => {
    return (<>
    <Header />
    <WrapperRegister>
        <div id='user'>
        <Input type="text" placeholder="@nickname" className="inputsRegister" icon={<MdPerson size={20} color="#F5A405"/>} required />
        </div>
        <div id='email'>
            <Input type="mail" placeholder="e-mail" className="inputsRegister" icon={<MdLocalPostOffice size={20} color="#F5A405"/>} required/>
        </div>
        <div id='petsName'>
            <Input type="text" placeholder="Pet's name" className="inputsRegister" icon={<FaTag size={20} color="#F5A405"/>} required/>
        </div>
        <div id='petsSpecie'>
            <Input type="text" placeholder="Pet's specie" className="inputsRegister" icon={<GiPawHeart size={20} color="#F5A405"/>} required/>
        </div>
        <div id='passwordEntry' className="password">
            <Input type="password" placeholder="Enter a password" className="inputsRegister" icon={<MdLock size={20} color="#F5A405"/>} required/>
        </div>
        <div id='passwordConfirm' className="password">
            <Input type="password" placeholder="Confirm the password" className="inputsRegister" icon={<MdLock size={20} color="#F5A405"/>} required/>
        </div>
    </WrapperRegister>
    <WrapperButtonRegister>
        <Button type="button" title="REGISTER"></Button>
        <p>Already have an account? <Link to="/">Login here</Link> now!</p>
    </WrapperButtonRegister>
    </>)
}

export { Register }