import React, { useEffect, useState } from 'react'
import { getSalesHistorySoldOut } from './getSalesHistorySoldOut'
import LayOutTable from '../LayOut/LayOutTable'

const LayOutSalesHistorySoldOut = ({ submitCode, size }) => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            const fetchApi = async () => {
                const response = await getSalesHistorySoldOut(submitCode, size)
                setData(response)
            }
            fetchApi()
        }, [submitCode, size]
    )
    return (
        <>
            <LayOutTable title={'Sold Out'} data1={'size'} data2={'price'} data3={'date'} array={data} />
        </>
    )
}

export default LayOutSalesHistorySoldOut