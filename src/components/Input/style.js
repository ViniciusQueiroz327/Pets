import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: "Krona One", sans-serif;

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