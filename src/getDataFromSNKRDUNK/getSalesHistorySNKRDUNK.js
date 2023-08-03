import { VND } from "../changeCurrency/changeCurrency";
import { getRateJp } from "../rate";
import { instance } from "../services"

export const getSalesHistorySNKRDUNK = async (submitCode, size ) => {
    try {
        size = 2*(size/10-14)
        let api = `https://snkrdunk.com/v1/products/${submitCode}/sales-history?size_id=${size}&page=1&per_page=20`
        const response = await instance.get(api)
        const rate = await getRateJp();
        const data = response.data.history;
        const arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(
                {
                    size: parseFloat(data[i].size)*10,
                    price: VND.format(Math.floor(data[i].price*rate)),
                    date: data[i].date
                }
            )
        }
        return arr
    } catch(msg) {
        // return alert('SNKRDunk không có')
    }
}