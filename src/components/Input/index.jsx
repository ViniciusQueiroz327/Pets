import { InputContainer, IconContainer, ErrorText, ContainerMaster } from './style'
import { Controller } from 'react-hook-form'

const Input = ({ icon, control, name, defaultValue = '', errorMessage, ...props }) => {
    return (<>
        <ContainerMaster>
            <IconContainer>
                {icon}
            </IconContainer>
            <InputContainer>
                <Controller 
                    name= {name} 
                    control={control} 
                    rules={{required: true}}
                    defaultValue={defaultValue}
                    render={({ field }) => <input {...field} {...props}/>}
                />
                {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
            </InputContainer>
        </ContainerMaster>
    </>
    )
}

export { Input }