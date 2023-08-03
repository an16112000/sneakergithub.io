import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './GetDataFromSNKRDUNK.module.scss';
import { getData } from "./getDataJp.js";

function GetDataFromSNKRDUNK({ submitCode }) {
        const [data, setData] = useState([])
        // fetch('https://www.soldout.co.kr/api/v3/product/item/get-item-detail?item_id=3333&is_pc_request=1')
        //   .then(data=>data.json)
        //   .then(res=>console.log(res))
        useEffect(
            () => {
                const fetchApi = async() => {
                    const dataJP = await getData(submitCode);
                    console.log(dataJP)
                    setData(dataJP)
                }
                fetchApi()

            }, [submitCode]
        )

        return (
            <div className={styles.wrapper}>

            </div>
    )
}

export default GetDataFromSNKRDUNK;