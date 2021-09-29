import { useEffect, useState } from 'react'
import { useOpenModal } from '../../context/OpenModal'

const START_MINUTE = 0.1
const TIME_INITIAL = START_MINUTE * 60

export const Timer = () => {
    const [timer, setTimer] = useState(TIME_INITIAL)
    const [minutes, setMinutes] = useState('--')
    const [sec, setSec] = useState('--')
    const { setOpenModal } = useOpenModal()

    useEffect(() => {
        const startTime = setInterval(() => {
            updateTime()
            setMinutes(Math.floor(timer / 60))
            setSec(timer % 60)
        }, 1000)
        if (timer < 0) return (clearInterval(startTime), setOpenModal(true)) 
        return () => {
            clearInterval(startTime)
        }
    })

    function updateTime() {
        setTimer(timer - 1)
    }

    return (
        <span>{`${minutes < 10 ? `0${minutes}` : minutes}:${
            sec < 10 ? `0${sec}` : sec
        }`}</span>
    )
}
