import axios from "axios";

export const instance = axios.create({
    headers: {
        'Appkey': 'JAkSzosy4X7K2FvPBwut5GN0At8DFuIwdhfs1dvr'
    }
})

export const instanceKream = axios.create({
    headers: {
        'X-Kream-Api-Version': '20',
        'X-Kream-Client-Datetime': '20230728191518+0700',
        'X-Kream-Device-Id': 'web;73522a0f-986b-487e-bd41-cbcddf57bf4d',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTA2Mjg3MjYsIm5iZiI6MTY5MDYyODcyNiwianRpIjoiZDY0YzVmMDItMzZkNS00OTJiLTgwMDctZTE0ZmFjNmRhMTM2IiwiZXhwIjoxNjkwNjM1OTI2LCJpZGVudGl0eSI6MjczNzkyLCJmcmVzaCI6dHJ1ZSwidHlwZSI6ImFjY2VzcyIsInVjIjp7InNhZmUiOnRydWV9LCJjc3JmIjoiOGMxODRhOGQtZjZkMy00ZmE1LWIzYmQtNWFkYjJmZjNjODcxIn0.3Z0l78PfaP1GZb5NYnMVGVpJT9oOzRQ-K1oBmkaWYaA'
    }
})

export const instanceKreamWithToken = axios.create({
    headers: {
        'X-Kream-Api-Version': '20',
        'X-Kream-Client-Datetime': '20230728191518+0700',
        'X-Kream-Device-Id': 'web;73522a0f-986b-487e-bd41-cbcddf57bf4d',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTEwNjEzNDcsIm5iZiI6MTY5MTA2MTM0NywianRpIjoiOWQzMDZiZTgtM2FhMS00YjE5LWE2YjMtOGU2OTc5ZWM4NzJkIiwiZXhwIjoxNjkxMDY4NTQ3LCJpZGVudGl0eSI6MjczNzkyLCJmcmVzaCI6dHJ1ZSwidHlwZSI6ImFjY2VzcyIsInVjIjp7InNhZmUiOnRydWV9LCJjc3JmIjoiYmVhMTI2MTMtMWVjOS00ZjA4LTk5MGYtNDhmNWVhOTVlYmMyIn0.b7TfjEbNCU2c4WK_7La4Fn3wzEMwHHnXDwQFYJTNp9o'
    }
})



