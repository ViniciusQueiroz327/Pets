import { Link } from "react-router-dom"
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import './login.css'

const Login = () => {
    return (<>
    <Header />
    <div className='login'>
        <div id='user'>
            <Input type="text" placeholder="@nickname" className="inputsLogin" required/>
        </div>
        <div id='password'>
            <Input type="password" placeholder="password" className="inputsLogin" required/>
        </div>
    </div>
    <div className='buttonLogin'>
        <Button type="button">LOGIN</Button>
        <p>Do not have an account? <Link to="/Register">Register here</Link> now!</p>
    </div>
    </>)
}

export { Login }