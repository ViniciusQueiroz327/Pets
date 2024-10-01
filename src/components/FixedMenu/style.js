import styled from 'styled-components';

export const MenuWrapper = styled.footer `
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #f9f9f9;

    transition: transform 0.3s ease;
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(100%)')};

`

export const ActionButton = styled.button `
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f9f9f9;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }

    svg {
        font-size: 1.5rem;
    }
`