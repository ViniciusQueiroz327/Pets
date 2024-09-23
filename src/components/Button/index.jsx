import { ButtonContainer } from './style'

const Button = ({title, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
    )
}

export { Button }