import { InputContainer, IconContainer } from './style'

const Input = ({ icon, ...props }) => {
    return (
        <InputContainer>
            <IconContainer>
                {icon}
            </IconContainer>
            <input {...props}/>
        </InputContainer>
    )
}

export { Input }