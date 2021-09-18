import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 3px;
    padding-left: 8px;
    font-size: 1.5rem;
    border: none;
    text-align: center;

    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
    width: 15rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-right: 1px solid #ccc;
    padding: 0 3px;
`

export const Container = styled.div`
    width: 35rem;
    padding: 3px 0;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
`