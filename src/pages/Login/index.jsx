import { Link } from "react-router-dom"
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MdPerson, MdLock } from "react-icons/md";
import { WrapperLogin, WrapperButtonLogin } from './style'

const Login = () => {
    return (<>
    <Header/>
    <WrapperLogin>
        <div id="user">
            <Input type="text" placeholder="@nickname" className="inputsLogin" icon={<MdPerson size={20} color="#F5A405"/>} required />
        </div>
        <div id="password">
            <Input type="password" placeholder="password" className="inputsLogin" icon={<MdLock size={20} color="#F5A405"/>} required />
        </div>
    </WrapperLogin>
    <WrapperButtonLogin>
        <Button type="button" title="LOGIN"></Button>
        <p>Do not have an account? <Link to="/Register">Register here</Link> now!</p>
    </WrapperButtonLogin>
    </>)
}

export { Login }