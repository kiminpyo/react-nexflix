import axios from 'axios'
// 인스턴스화

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: 'a4343b44533bcc8e32bc48b03c241b0e',
        language: 'ko-KR'
    }
})

export default instance