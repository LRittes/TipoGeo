import { useEffect, useState } from 'react'

const START_MINUTE = 15
const TIME_INITIAL = START_MINUTE * 60

export const Timer = () => {
    const [timer, setTimer] = useState(TIME_INITIAL)
    const [minutes, setMinutes] = useState('--')
    const [sec, setSec] = useState('--')
    useEffect(() => {
        const startTime = setInterval(() => {
            updateTime()
            setMinutes(Math.floor(timer / 60))
            setSec(timer % 60)
        }, 1000)
        if (timer < 0) clearInterval(startTime)
        console.log('foi')
        return () => {
            clearInterval(startTime)
        }
    })
    function updateTime() {
        setTimer(timer - 1)
    }

    return (
        <span>{`${minutes < 10 ? '0' + minutes : minutes}:${
            sec < 10 ? '0' + sec : sec
        }`}</span>
    )
}
