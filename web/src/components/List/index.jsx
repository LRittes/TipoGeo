import { useEffect, useState } from 'react'
import axios from 'axios'

import { Container } from './style'

import Question from '../Question'

const List = () => {
    const [dados, setDados] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8080/data')
            .then((r) => r.data)
            .then((datas) => setDados(datas))
    }, [])
    return (
        <Container>
            {dados.map((pais) => (
                <Question key={pais.id} datas={pais} />
            ))}
        </Container>
    )
}

export default List
