import React from "react";
import { useEffect, useState } from 'react'
import Header from "../Header";
import styles from '../Header.module.scss'


const Home = () => {
    const [code, setCode] = useState('')
    const [submitCode, setSubmitCode] = useState('');
    const [size, setSize] = useState('');
    const [submitSize, setSubmitSize] = useState('');
    const [modal, setModal] = useState(false);
    const [type, setType] = useState();


    const handleClick = () => {
        setSubmitCode(code)
        setSubmitSize(size)
        setModal(false)
        setCode('')
        setSize('')
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }

    function handleChoose(e) {
        const value = e.target.innerHTML
        setModal(true)
        setSubmitCode('')
        setType(value)
    }

    function onChangeValue(e) {
        setCode(e.target.value)
    }
    function onChangeSize(e) {
        setSize(e.target.value)
    }
    return (
        <>
            <Header
                handleChoose={handleChoose}
                code={code}
                onChangeValue={onChangeValue}
                onChangeSize={onChangeSize}
                size={size}
                handleClick={handleClick}
            />
        </>
    )
}

export default Home