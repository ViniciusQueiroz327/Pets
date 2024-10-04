import styled from 'styled-components';

export const ContainerMaster = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Krona One", sans-serif;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Krona One", sans-serif;
    padding: 3vh 0;

    input {
        border: none;
        border-bottom: 1px solid #AEA6A6;
        outline: none;
        font-size: .7rem;
        font-family: inherit;
        width: 70vw;
    }

    input::placeholder {
        color: #AEA6A6;
    }
`

export const IconContainer = styled.div`
    color: #AEA6A6;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`
export const ErrorText = styled.p`
    color: #FF0000;
    font-size: .5rem;
    font-family: "Krona One", sans-serif;
`