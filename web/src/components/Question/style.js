import styled from 'styled-components'

export const Input = styled.input`
    width: 70%;
    height: 100%;
    padding: 3px;
    padding-left: 8px;
    font-size: 2rem;
    border: none;
    text-align: center;

    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
    width: 32rem;
    font-size: 2rem;
    font-weight: 500;
    border-right: 1px solid #ccc;
    padding: 0 3px;
    white-space: nowrap;
    text-align: center;
`

export const Container = styled.div`
    /* width: 50rem; */
    padding: 3px 0;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
`
