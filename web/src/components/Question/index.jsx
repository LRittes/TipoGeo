import { useState } from 'react'

import { Input, Label, Container } from './style'

const Question = ({ datas }) => {
    const [value, setValue] = useState('')
    const [dados] = useState({ ...datas, answer: false })
    const [dado, setDado] = useState(dados.answer)

    function onEnter(e) {
        if (e.key === 'Enter') {
            const valor = e.target.value
            setValue(valor)
            VerificationAnswer(dados)
        }
    }

    function VerificationAnswer(dados) {
        if (value.toLowerCase() === dados.capital.toLowerCase()) {
            setDado(true)
        } else {
            setDado(false)
        }
    }

    return (
        <Container>
            <Label htmlFor={dados.id}>{dados.pais}</Label>
            <Input
                style={dado ? { backgroundColor: '#84F56C' } : null}
                id={dados.id}
                name={dados.id}
                type="text"
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={onEnter}
                autoComplete="off"
            />
        </Container>
    )
}

export default Question
