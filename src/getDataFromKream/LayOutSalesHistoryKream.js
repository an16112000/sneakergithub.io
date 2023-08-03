import React, { useEffect, useState } from "react";
import { getSalesHistoryKream } from "./getSalesHistoryKream";
import LayOutTable from "../LayOut/LayOutTable";

const LayOutSalesHistoryKream = ({ submitCode, size }) => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            const fetchApi = async () => {
                const response = await getSalesHistoryKream(submitCode, size)
                setData(response)
            }
            fetchApi()
        }, [submitCode, size]
    )
    let Component = <LayOutTable title={'Kream'} data1={'size'} data2={'price'} data3={'date'} array={data} />
    if(data == []) {
        Component = <></>
    }
    return (
        <>
            {Component}         
        </>
    )
}

export default LayOutSalesHistoryKream