import { InputContainer, IconContainer, ErrorText, ContainerMaster } from './style'
import { IInput } from './types'
import { Controller } from 'react-hook-form'

const Input = ({ icon, control, name, defaultValue = '', errorMessage, ...props }: IInput) => {
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