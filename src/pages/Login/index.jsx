import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import './style.css'

const Login = () => {
    return (<>
    <Header />
    <div className='login'>
        <div id='user'>
            <Input type="text" placeholder="@nickname" className="inputs"/>
        </div>
        <div id='password'>
            <Input type="password" placeholder="password" className="inputs"/>
        </div>
    </div>
    <div className='buttonLogin'>
        <Button type="button">LOGIN</Button>
        <p>Do not have an account? <a href='#'>Register here</a> now!</p>
    </div>
    </>)
}

export { Login }