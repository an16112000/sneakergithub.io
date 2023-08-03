import { VND } from "../changeCurrency/changeCurrency";
import { getRateKor } from "../rate"
import { instance } from "../services"

export const getSalesHistorySoldOut = async (submitCode, size) => {
    try {
        const data1 = await instance.get(`https://www.soldout.co.kr/api/v3/search/get-item-list?&typeGb=goods&pageIndex=1&pageSize=24&keyword=${submitCode}`)
        const responeData = data1.data.data.product_info.list;
        const id = responeData[0].id
        const response = await instance.get(`https://www.soldout.co.kr/api/v3/product/item/get-item-order-graph?item_id=${id}&type=1w`)
        const rate = await getRateKor();
        const data = response.data.data['1w'].trade_list
        const arr = []
        if (data.length < 20) {
            for (let i = data.length - 1; i > 0; i--) {
                arr.push(
                    {
                        size: parseInt(data[i].option),
                        price: VND.format(Math.floor(data[i].y * rate)),
                        date: data[i].x
                    }
                )
            }
        }
        else {
            for (let i = data.length - 1; i > data.length - 21; i--) {
                arr.push(
                    {
                        size: parseInt(data[i].option),
                        price: VND.format(Math.floor(data[i].y * rate)),
                        date: data[i].x
                    }
                )
            }
        }
        return arr
    } catch (text) {
        alert('Sold Out không có')
        return []
    }
}