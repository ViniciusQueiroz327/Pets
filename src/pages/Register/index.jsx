import { Link } from "react-router-dom"
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import './register.css'

const Register = () => {
    return (<>
    <Header />
    <div className='register'>
        <div id='user'>
            <Input type="text" placeholder="@nickname" className="inputsRegister" required/>
        </div>
        <div id='email'>
            <Input type="mail" placeholder="e-mail" className="inputsRegister" required/>
        </div>
        <div id='petsName'>
            <Input type="text" placeholder="Pet's name" className="inputsRegister" required/>
        </div>
        <div id='petsSpecie'>
            <Input type="text" placeholder="Pet's Specie" className="inputsRegister" required/>
        </div>
        <div id='passwordEntry' className="password">
            <Input type="password" placeholder="Enter a password" className="inputsRegister" required/>
        </div>
        <div id='passwordConfirm' className="password">
            <Input type="password" placeholder="Confirm the password" className="inputsRegister" required/>
        </div>
    </div>
    <div className='buttonRegister'>
        <Button type="button">REGISTER</Button>
        <p>Already have an account? <Link to="/">Login here</Link> now!</p>
    </div>
    </>)
}

export { Register }