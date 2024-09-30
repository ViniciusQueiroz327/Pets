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
    background-color: #F5A405;
`

export const ActionButton = styled.button `
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #F5A405;

    &:hover {
        background-color: #d48e02;
        cursor: pointer;
    }

    svg {
        font-size: 1.5rem;
    }
`