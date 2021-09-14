import { useState } from "react"

import { Input } from "./style"

const Question = () => {
    const [value, setValue] = useState('')
    const dados = {
        "pais": "Afeganistão",
        "capital": "Cabul",
        "id": 0,
        "answer": false
    }
    const [dado, setDado] = useState(dados.answer)

    function onEnter(e){
        if(e.key === 'Enter'){
        const valor = e.target.value
        setValue(valor)
        VerificationAnswer(dados)
        }
    }
    
    function VerificationAnswer(dados){
        if(value === dados.capital){
        setDado(true)
        } else {
        setDado(false)
        }
    }
    
    return (
        <div>
            <label htmlFor={dados.id}>{dados.pais}</label>
            <Input className={dado ? 'certo': ''}
                id={dados.id} 
                name={dados.id} 
                type='text'
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={onEnter}
            />
        </div>
    )
}

export default Question;