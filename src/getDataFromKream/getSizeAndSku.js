import { getRateKor } from "../rate";
import { instanceKream } from "../services";

export const getSizeAndSkuFromKream = async (submitCode) => {
    const idResponse = await instanceKream.get(`https://kream.co.kr/api/p/tabs/all/?keyword=${submitCode}&request_key=1175b18f-9722-434f-ac57-4d87fefba9cd`)
    const id = idResponse.data.items[0].product.release.id
    const data = await instanceKream.get(`https://kream.co.kr/api/p/products/${id}?request_key=9a9e4191-4911-46d5-992d-3bc702a20968`)
    const response = data.data.sales_options
    const rate = await getRateKor();
    const result = response.map(
        (item) => {
            return {
                size: parseInt(item.option),
                price: item.lowest_ask*rate
            }
        }
    )
    return result
}