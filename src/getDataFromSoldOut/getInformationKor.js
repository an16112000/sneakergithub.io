import React from "react";
import { instance } from '../services'
import { getPriceAndSize } from "./getPriceAndSize";


export const getInformationKor = async (submitCode) => {
    if(submitCode) {
        try {
            const data = await instance.get(`https://www.soldout.co.kr/api/v3/search/get-item-list?&typeGb=goods&pageIndex=1&pageSize=24&keyword=${submitCode}`)
            const responeData = data.data.data.product_info.list;
            // console.log(responeData)
            const priceAndSize = await getPriceAndSize(responeData[0].id)
            const infor = {
                id: responeData[0].id,
                code: submitCode,
                img: responeData[0].image_path,
                name_eng: responeData[0].name_eng,
                price: [...priceAndSize]
            }
            // console.log(infor)
            return infor;
        } catch(error) {
            return alert('Loi')
        }
    }
    // setData(responeData)    
}
