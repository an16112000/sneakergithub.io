import PropTypes from 'prop-types'
import React from "react";
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

export const dataType = [
    {
        id: 1,
        title: 'Jordan',
        type: 'jordan'
    },
    {
        id: 2,
        title: 'Air Force 1',
        type: 'airforce1'
    },
    {
        id: 3,
        title: 'Air Max',
        type: 'airmax'
    },
    {
        id: 4,
        title: "Dunk",
        type: 'dunk'
    }
]

const Header = ({ code, onChangeValue, onChangeSize, size, handleClick , onResetPageNumber}) => {
    console.log(onResetPageNumber, onChangeSize)
    return (
        <div className={styles.header}>
            <div className={styles.type}>
                {
                    dataType.map(
                        item => {
                            return <Link
                            key={item.id}
                            to={`/${item.type}/page/1`}
                            onClick={onResetPageNumber}
                            // onClick={(e) => handleChoose(e)}
                                className={styles.itemHeader}
                            >
                                {item.title}
                            </Link>
                        }
                    )
                }
            </div>
            <div className={styles.search}>
                <input
                    placeholder='Code...'
                    className={styles.input}
                    value={code}
                    onChange={(e) => onChangeValue(e)}
                />
                <input
                    placeholder='Size...'
                    className={styles.input}
                    style={{ width: '50px' }}
                    value={size}
                    onChange={(e) => onChangeSize(e)}
                />
                <Link
                    className={styles.btn}
                    onClick={handleClick}
                    to={`/product/${code}`}
                >
                    Submit
                </Link>
            </div>
            <div className={styles.filter}>
            </div>


        </div>
    )
}

Header.propTypes = {
    code: PropTypes.string,
    onChangeValue: PropTypes.func,
    onChangeSize: PropTypes.func,
    size: PropTypes.string,
    handleClick: PropTypes.func,
    onResetPageNumber: PropTypes.func
}

export default Header;