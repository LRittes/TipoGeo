import { useEffect, useState } from 'react'

import { useOpenModal } from '../../context/OpenModal'
import { db } from '../../services/firebase'

import Question from '../Question'

import { Container } from './style'


const List = () => {
    const [dados, setDados] = useState([])
    const {openModal} = useOpenModal()
    useEffect(async ()=>{
        const dataRef = db.ref("data")
    
        await dataRef.once("value", country => (
            setDados(country.val())
        ))
    },[])
   
    return (
        <Container>
            {!openModal && dados.map((pais) => (
                <Question key={pais.id} datas={pais} />
            ))}
        </Container>
    )
}

export default List
