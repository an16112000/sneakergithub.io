import { instanceKream } from "../services"

export const getIdProductKream = async(submitCode) => {
    const idResponse = await instanceKream.get(`https://kream.co.kr/api/p/tabs/all/?keyword=${submitCode}&request_key=1175b18f-9722-434f-ac57-4d87fefba9cd`)
    const id = idResponse.data.items[0].product.release.id
    return id
}