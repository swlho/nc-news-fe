import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/api'
import ArticleCard from "./ArticleCard"

const Articles = () =>{
    const { topic } = useParams();
    const [articlesArr, setArticlesArr]= useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
          setIsLoading(true)
          getData('/articles', topic)
          .then(({articles})=>{
            setIsLoading(false)
            setArticlesArr(articles)
          })
    }, [topic])
    
    return (
        isLoading? (
            <p>LOADING...</p>
        ) :
            <ArticleCard articlesArr={articlesArr}/>
    )
}

export default Articles