import React from "react";
import { useEffect, useState } from 'react'
import Header from "../Header";
import styles from '../Header.module.scss'
import LayOutDataMenu from "../../DataMenu/LayOutDataMenu";
import { useParams } from "react-router-dom";


const MenuSneakers = () => {
    let {typeOfProduct, pageNumber} = useParams()
    const [code, setCode] = useState('')
    const [submitCode, setSubmitCode] = useState('');
    const [size, setSize] = useState('');
    const [submitSize, setSubmitSize] = useState('');
    const [modal, setModal] = useState(false);
    const [type, setType] = useState(typeOfProduct);
    console.log('MenuSneaker')
    useEffect(
        () =>
        {
            setType(typeOfProduct)
        }
        , [typeOfProduct]
    )


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

    function onChangeValue(e) {
        setCode(e.target.value)
    }
    function onChangeSize(e) {
        setSize(e.target.value)
    }
    function resetPageNumber() {
        // pageNumber = 1
    }
    
    return (
        <>
            <Header
                // handleChoose={handleChoose}
                code={code}
                onChangeValue={onChangeValue}
                onChangeSize={onChangeSize}
                onResetPageNumber={resetPageNumber}
                size={size}
                handleClick={handleClick}
                pageNumber={pageNumber}
            />
            <div className={styles.modal}>
                <LayOutDataMenu 
                type={type} 
                typeOfProduct={typeOfProduct} 
                pageNumber={pageNumber} 
                handleClick={(e) => {
                    setSubmitCode(e.code)
                }} 
                />
            </div>
        </>
    )
}

export default MenuSneakers