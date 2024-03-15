import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/api'
import { showSortCategory } from '../utils/showSortCategory'
import ArticleCard from "./ArticleCard"
import Loading from './Loading'
import ErrorApiPage from './ErrorApiPage'

const Articles = (props) =>{
    const { topic } = useParams();
    const [error,setError] = useState(null)
    const {articlesArr,setArticlesArr,isLoading,sortByCategory,orderBy, setIsLoading} = props

    useEffect(() => {
          setIsLoading(true)
          getData('/articles', topic, sortByCategory, orderBy)
          .then(({articles})=>{
            setArticlesArr(articles)
            setIsLoading(false)
          })
          .catch((err)=>{
            setError({err})
          })
    }, [topic, sortByCategory, orderBy])

    if(error){
        return <ErrorApiPage error={error}/>
    }

    return (
        isLoading? (
            <Loading/>
        ) :
            <>
            <p>Displaying all {topic ||"available"} articles {showSortCategory(sortByCategory)} in {orderBy} order</p>
            <ArticleCard articlesArr={articlesArr}/>
            </>
    )
}

export default Articles