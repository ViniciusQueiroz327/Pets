import { Link } from "react-router-dom"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { MdPerson, MdLock } from "react-icons/md";

import { WrapperLogin, WrapperButtonLogin } from './style'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
    user: yup.string()
    .min(10, 'No mínimo 10 caracteres')
    .required('*Campo Obrigatório'),

    password: yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .matches(/\d/, 'Deve conter ao menos um número')
    .matches(/[#@$!%*?&]/, 'Deve conter ao menos um caractere especial')
    .required('*Campo Obrigatório')
}).required()

const Login = () => {

    const { control, handleSubmit, formState: {errors, isValid} } = useForm({
        resolver: yupResolver(schema),
        mode:'onSubmit'
    })

    //console.log(isValid, errors)

    const onSubmit = data => console.log("data")

    return (<>
    <Header/>
    <WrapperLogin>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div id="user">
            <Input 
                name="user" 
                type="text" 
                errorMessage={errors?.user?.message} 
                defaultValue='' 
                control={control}
                placeholder="@nickname" 
                className="inputsLogin" 
                icon={<MdPerson size={20} color="#F5A405"/>} 
            />
        </div>
        <div id="password">
            <Input 
                name="password" 
                type="password" 
                errorMessage={errors?.password?.message} 
                defaultValue='' 
                control={control}
                placeholder="password" 
                className="inputsLogin" 
                icon={<MdLock size={20} color="#F5A405"/>} 
            />
        </div>
        <WrapperButtonLogin>
            <Button type="submit" title="LOGIN"></Button>
            <p>Do not have an account? <Link to="/Register">Register here</Link> now!</p>
        </WrapperButtonLogin>
    </form>
    </WrapperLogin>
    </>)
}

export { Login }