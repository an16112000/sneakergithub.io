import React, { useState, useEffect } from 'react'
import { getInformationKor } from '../getDataFromSoldOut/getInformationKor'
import { getData } from '../getDataFromSNKRDUNK/getDataJp'
import { getSizeAndSkuFromKream } from '../getDataFromKream/getSizeAndSku';
import { getSalesHistory, getSalesHistoryKream } from '../getDataFromKream/getSalesHistoryKream';
import { getSalesHistorySNKRDUNK } from '../getDataFromSNKRDUNK/getSalesHistorySNKRDUNK';
import { getSalesHistorySoldOut } from '../getDataFromSoldOut/getSalesHistorySoldOut';
import { VND } from '../changeCurrency/changeCurrency';

function merge (data1, data2, data3) {
    const data = data1.map(
        (item1) => {
            let data = {}
            data2.forEach(
                item2 => {
                    if (item1.size == item2.size) {
                        data3.forEach(
                            item3 => {
                                if(item1.size == item3.size) {
                                    data = {
                                        size: item1.size,
                                        priceSoldOut: VND.format(Math.floor(item1.price)),
                                        priceJp: VND.format(Math.floor(item2.price)),
                                        priceKream: VND.format(Math.floor(item3.price))
                                    }
                                }
                            }
                        )
                    }
                }
            )
            return data
        }
    )
    return data
}

export const mergeData = async (submitCode = '') => {
    
    const dataKor = await getInformationKor(submitCode)
    const dataJp = await getData(submitCode);
    const dataKream = await getSizeAndSkuFromKream(submitCode)
    let data
    if (dataKor && dataJp) {
        data = merge(dataKor.price,dataJp.price, dataKream)
        
    }
    const result = {
        code: !!dataKor ? dataKor.code : null,
        img: !!dataKor ? dataKor.img : null,
        name: !!dataKor ? dataKor.name_eng : null,
        price: !!dataKor ? data : null
    }
    return result
}