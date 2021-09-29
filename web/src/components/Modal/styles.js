import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div`
    border-radius: 10px;
    width: 50%;
    height: 50%;
    margin: 100px auto 0 auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    background-color: #e5f8fc;
`

export const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;
    text-align: center;
`

export const Btn = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 50px;
    font-size: 3.2rem;
    font-weight: bold;
    background-color: #0077b6;
    color: #fff;
    border-radius: 4px;
    border: 1px solid #000;
    cursor: pointer;
    &:hover {
        filter: brightness(1.1);
    }
`
export const SubTitle = styled.h3`
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
    span {
        color: #4f9d69;
    }
`