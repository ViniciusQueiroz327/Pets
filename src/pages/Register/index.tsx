import { Link } from "react-router-dom"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { MdPerson, MdLock, MdLocalPostOffice } from "react-icons/md";

import { WrapperRegister, WrapperButtonRegister } from './style'
import { RegisterFormInputs } from './types'

import { FaTag } from "react-icons/fa6"
import { GiPawHeart } from "react-icons/gi"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
    user: yup.string()
    .min(10, 'No mínimo 10 caracteres')
    .required('*Campo Obrigatório'),

    email: yup.string()
    .email('Digite um e-mail válido')
    .required('*Campo Obrigatório'),

    petsName: yup.string()
    .required('*Campo Obrigatório'),

    petsSpecie: yup.string()
    .required('*Campo Obrigatório'),

    passwordConfirm: yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .matches(/\d/, 'Deve conter ao menos um número')
    .matches(/[#@$!%*?&]/, 'Deve conter ao menos um caractere especial')
    .required('*Campo Obrigatório'),

    passwordEntry: yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .matches(/\d/, 'Deve conter ao menos um número')
    .matches(/[#@$!%*?&]/, 'Deve conter ao menos um caractere especial')
    .required('*Campo Obrigatório'),
}).required()

const Register = () => {

    const { control, handleSubmit, formState: {errors, /*isValid*/} } = useForm({
        resolver: yupResolver(schema),
        mode:'onSubmit'
    })

    //console.log(isValid, errors)

    const onSubmit = (data: RegisterFormInputs) => console.log("data")

    return (<>
    <Header />
    <WrapperRegister>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id='user'>
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
            <div id='email'>
                <Input 
                    name="email"
                    type="mail" 
                    errorMessage={errors?.email?.message} 
                    defaultValue='' 
                    control={control}
                    placeholder="E-mail*" 
                    className="inputsRegister" 
                    icon={<MdLocalPostOffice size={20} 
                    color="#F5A405"/>} 
                />
            </div>
            <div id='petsName'>
                <Input 
                    name="petsName"
                    type="text"
                    errorMessage={errors?.petsName?.message} 
                    defaultValue='' 
                    control={control}
                    placeholder="Pet's name*" 
                    className="inputsRegister" 
                    icon={<FaTag size={20} color="#F5A405"/>} 
                />
            </div>
            <div id='petsSpecie'>
                <Input 
                    name="petsSpecie"
                    type="text"
                    errorMessage={errors?.petsSpecie?.message} 
                    defaultValue='' 
                    control={control}
                    placeholder="Pet's specie*" 
                    className="inputsRegister" 
                    icon={<GiPawHeart size={20} color="#F5A405"/>} 
                />
            </div>
            <div id='passwordEntry' className="password">
                <Input
                    name="passwordEntry"
                    type="password"
                    errorMessage={errors?.passwordEntry?.message} 
                    defaultValue='' 
                    control={control} 
                    placeholder="Enter a password*" 
                    className="inputsRegister" 
                    icon={<MdLock size={20} color="#F5A405"/>} 
                />
            </div>
            <div id='passwordConfirm' className="password">
                <Input 
                    name="passwordConfirm"
                    type="password"
                    errorMessage={errors?.passwordConfirm?.message} 
                    defaultValue='' 
                    control={control} 
                    placeholder="Confirm the password*" 
                    className="inputsRegister" 
                    icon={<MdLock size={20} color="#F5A405"/>} 
                />
            </div>
            <WrapperButtonRegister>
                <Button type="submit" title="REGISTER"></Button>
                <p>Already have an account? <Link to="/">Login here</Link> now!</p>
            </WrapperButtonRegister>
        </form>
    </WrapperRegister>

    </>)
}

export { Register }