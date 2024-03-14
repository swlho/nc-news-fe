import axios from "axios";

const NcNewsApi = axios.create({
    baseURL: 'https://nc-news-836l.onrender.com/api'
})

export const getData = (endpoint, topic, sortByCategory, orderBy) => {
    
    if(!topic){
        return NcNewsApi.get(endpoint, {params: {sort_by:sortByCategory,order:orderBy}})
        .then(({data})=>{
            return data
        })
    } else {
        return NcNewsApi.get(endpoint, {params:{topic:topic,sort_by:sortByCategory,order:orderBy}})
        .then(({data})=>{
            return data
        })
    }
}

export const getDataByArticleId = (endpoint) => {
    console.log(endpoint)
    return NcNewsApi.get(endpoint)
    .then(({data})=>{
        return data
    })
}

export const patchArticleVotes = (endpoint, patchVal) =>{
    const patchBody = {
            inc_votes: patchVal
    };
    return NcNewsApi.patch(endpoint, patchBody)
    .then(({data})=>{
        return data
    })
}

export const postComment = (endpoint, comment, user) =>{
    const postBody = {
        body: comment,
        votes: 0,
        author: user,
    }
    return NcNewsApi.post(endpoint, postBody)
    .then(({data})=>{
        return data
    })
}

export const deleteComment = (endpoint) =>{
    return NcNewsApi.delete(endpoint)
}