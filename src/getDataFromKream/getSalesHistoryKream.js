import { VND } from "../changeCurrency/changeCurrency"
import { getRateKor } from "../rate"
import { instanceKream, instanceKreamWithToken } from "../services"
import { getIdProductKream } from "./getIdProductKream"


export const getSalesHistoryKream = async(submitCode, size) => {
    try {
        if(!!size) {
            size = `/${size}`
        }
        const id = await getIdProductKream(submitCode)
        const response = await instanceKreamWithToken.get(`https://kream.co.kr/api/p/products/${id}${size}/sales?cursor=1&per_page=50&sort=date_created[desc]&request_key=d7c32947-afd9-4bb5-af8b-19b0f893c3a1`)
        const rate = await getRateKor();
        const data = response.data.items
        const arr = [];
        for (let i=0; i<20; i++) {
            arr.push(
                {
                    size: parseInt(data[i].option),
                    price: VND.format(Math.floor(data[i].price*rate)),
                    date: data[i].date_created.replace('T', ' ').replace('Z', '')
                }
            )
        }
        return arr;
    } catch(text) {
        alert('Kream không có')
        return []
    }
}

