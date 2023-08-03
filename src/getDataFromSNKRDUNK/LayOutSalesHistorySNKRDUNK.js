import React, { useEffect, useState } from "react";
import { getSalesHistorySNKRDUNK } from "./getSalesHistorySNKRDUNK";
import LayOutTable from "../LayOut/LayOutTable";

const LayOutSalesHistorySNKRDUNK = ({submitCode, size}) => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            const fetchApi = async() => {
                const response = await getSalesHistorySNKRDUNK(submitCode, size)
                setData(response)
            }
            fetchApi()
        }, [submitCode, size]
    )
    return (
        <>
            <LayOutTable title={'SNKRDUNK'} data1={'size'} data2={'price'} data3={'date'} array={data} />
        </>
    )
}

export default LayOutSalesHistorySNKRDUNK;