import React, { useState, useEffect } from "react";
import styles from './LayOut.module.scss'
import GetDataFromSNKRDUNK from "../getDataFromSNKRDUNK";
import GetDataFromSoldOut from "../getDataFromSoldOut/getDataFromSoldOut";
import { getData } from "../getDataFromSNKRDUNK/getDataJp";
import { mergeData } from "../mergeData";
import LayOutSalesHistoryKream from "../getDataFromKream/LayOutSalesHistoryKream";
import LayOutSalesHistorySoldOut from "../getDataFromSoldOut/LayOutSalesHistorySoldOut";
import LayOutSalesHistorySNKRDUNK from "../getDataFromSNKRDUNK/LayOutSalesHistorySNKRDUNK";

function Layout({ submitCode, size }) {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            if (!submitCode) {
                return
            }
            const fetchData = async () => {
                const data = await mergeData(submitCode);
                setData(data)
            }
            fetchData()
        }, [submitCode, size]
    )
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.image}>
                    {!data.code || <img src={data.img} />}
                </div>
                <div className={styles.infor}>
                    <h3 className={styles.name}>{data.name}</h3>
                    <p className={styles.code}>{data.code}</p>
                    <div className={styles.details}>
                        {
                            data.price && data.price.length > 0 && <table>
                                <thead>
                                    <tr className={`${styles.priceAndSize}`}>
                                        <th>Size</th>
                                        <th>Sold Out</th>
                                        <th>Kream</th>
                                        <th>SNKRDunk</th>
                                    </tr>

                                </thead>
                                {data.price.map(
                                    (item, index) => {
                                        if (!item.size) {
                                            return <React.Fragment key={index}></React.Fragment>
                                        }
                                        // Can xem lai item.key
                                        return <tbody key={index}>
                                            <tr className={styles.priceAndSize}>
                                                <td>{item.size}</td>
                                                <td className={styles.td}>{item.priceSoldOut}</td>
                                                <td className={styles.td}>{item.priceKream}</td>
                                                <td className={styles.td}>{item.priceJp}</td>
                                            </tr>
                                        </tbody>
                                    }
                                )}
                            </table>
                        }
                    </div>

                </div>
            </div>

            {
                !!submitCode && <div className={styles.histories}>
                    <div className={styles.itemHistory}>
                        <LayOutSalesHistoryKream submitCode={submitCode} size={size} />
                    </div>
                    <div className={styles.itemHistory}>
                        <LayOutSalesHistorySoldOut submitCode={submitCode} size={size} />
                    </div>
                    <div className={styles.itemHistory}>
                        <LayOutSalesHistorySNKRDUNK submitCode={submitCode} size={size} />
                    </div>
                </div>
            }

        </div>
    )
}

export default Layout