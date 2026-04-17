import axios from "axios"

const api = axios.create({
    baseURL:"https://humble-robot-wr66459wxp5w3grjr-8081.app.github.dev/students"
})

export default api