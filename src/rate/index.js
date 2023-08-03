import axios from "axios"

export const getRateJp = async () => {
    const data = await axios.get('https://wise.com/rates/history+live?source=JPY&target=VND&length=30&resolution=hourly&unit=day')
    const response = data.data;
    const rate = response[response.length - 1].value
    return rate
}

export const getRateKor = async () => {
    const data = await axios.get('https://wise.com/rates/history+live?source=KRW&target=VND&length=30&resolution=hourly&unit=day')
    const response = data.data;
    const rate = response[response.length - 1].value
    return rate
}