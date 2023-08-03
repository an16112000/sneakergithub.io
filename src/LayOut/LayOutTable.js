import PropTypes from "prop-types";
import React from "react";
import styles from './LayOutTable.module.scss'

const LayOutTable = ({title ,data1, data2, data3, array=[]}) => {
    return (
        <>  
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
            <div className={styles.tbody}>
                <table>
                    <thead>
                        <tr>
                            <th>{data1}</th>
                            <th>{data2}</th>
                            <th>{data3}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            array.map(
                                (item, index) => {
                                    return <tr key={index} className={styles.tr}>
                                        <td>{item[data1]}</td>
                                        <td>{item[data2]}</td>
                                        <td>{item[data3]}</td>
                                    </tr>
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

LayOutTable.propTypes = {
    array: PropTypes.array,
    title: PropTypes.string,
    data1: PropTypes.string,
    data2: PropTypes.string,
    data3: PropTypes.string
}

export default LayOutTable;