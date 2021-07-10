import React,{ useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: ${({theme}) => theme.colors.white};
    display: flex;
    margin-bottom: 10rem;
`
const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 3rem;
    &::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        right: 0;
    }
    &:last-child {
        &::before {
            display: none;
        }
    }
`
const TimerNum = styled.span`
    font-size: ${({theme}) => theme.fontSize.largeTitle};
    font-weight: bold;
`
const TimerTxt = styled.span`
    font-size: ${({theme}) => theme.fontSize.subTitle};
`

const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let intervalRef = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Aug 30, 2021 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimerDays(String(days));
                setTimerHours(String(hours));
                setTimerMinutes(String(minutes));
                setTimerSeconds(String(seconds));
            }

        }, 1000);
        intervalRef.current = interval;
    };

    function LeadingZero(num) {
        return num < 10 ? "0" + num : num;
    };

    //componentDidMount
    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(intervalRef.current);
        };
    });
    return (
        <Container>
            <TimerWrapper>
                <TimerNum>{LeadingZero(timerDays)}</TimerNum>
                <TimerTxt>Day</TimerTxt>
            </TimerWrapper>
            <TimerWrapper>
                <TimerNum>{LeadingZero(timerHours)}</TimerNum>
                <TimerTxt>Hour</TimerTxt>
            </TimerWrapper>
            <TimerWrapper>
                <TimerNum>{LeadingZero(timerMinutes)}</TimerNum>
                <TimerTxt>Min</TimerTxt>
            </TimerWrapper>
            <TimerWrapper>
                <TimerNum>{LeadingZero(timerSeconds)}</TimerNum>
                <TimerTxt>Sec</TimerTxt>
            </TimerWrapper>
        </Container>
    )
}

export default Timer
