import { Link, Navigate } from "react-router-dom"

import React from "react"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { MdPerson, MdLock } from "react-icons/md";

import { WrapperLogin, WrapperButtonLogin } from './style'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = () => {

    const schema = yup.object().shape({
        user: yup.string().required('Nickname é obrigatório'),
        password: yup.string().required('Password é obrigatória')
    });

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    });

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const onSubmit = (data) => {
        // Back-end call for validation
        console.log(data);
        // If succeded:
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Navigate to="/Feed" />;
    }

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
                placeholder="@Nickname*" 
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
                placeholder="Password*" 
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