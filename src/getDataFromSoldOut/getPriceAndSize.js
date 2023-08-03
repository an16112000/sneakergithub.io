import { getRateKor } from "../rate";
import { instance } from "../services";

export async function getPriceAndSize(id) {
    const rateWon = await getRateKor();
    const data = await instance.get(`https://www.soldout.co.kr/api/v3/product/product/get-product-size-option?item_id=${id}`)
    const response = data.data.data.list
    const infor = response.map(
        (item) => {
            return {
                id: item.id,
                size: parseInt(item.kor_name),
                price: !!item.buy_product ? item.buy_product.price*rateWon : null
            }
        }
        
    )
    return infor
}