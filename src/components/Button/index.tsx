import { ButtonContainer } from './style'
import { IButton } from './types'
const Button = ({title, onClick, type = 'button'}: IButton) => {
    return (
        <ButtonContainer type={type} onClick={onClick}>{title}</ButtonContainer>
    )
}

export { Button }