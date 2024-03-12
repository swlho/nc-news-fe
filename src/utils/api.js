import axios from "axios";

const NcNewsApi = axios.create({
    baseURL: 'https://nc-news-836l.onrender.com/api'
})

export const getData = (endpoint, topic) => {
    return NcNewsApi.get(endpoint, {params: {topic}})
    .then(({data})=>{
        return data
    })
}

export const getDataByArticleId = (endpoint) => {
    return NcNewsApi.get(endpoint)
    .then(({data})=>{
        return data
    })
}