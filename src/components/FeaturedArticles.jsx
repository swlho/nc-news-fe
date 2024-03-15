import {useState, useEffect} from 'react'
import { getData } from '../utils/api';
import ArticleCard from './ArticleCard';
import ErrorApiPage from './ErrorApiPage'

const FeaturedArticles = () => {
    const [articlesArr, setArticlesArr]= useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getData('/articles')
        .then(({articles})=>{
          setIsLoading(false)
          return articles.filter((article)=>{
            return article.comment_count > 10
          })
        })
        .then((articlesMoreThanTenComments)=>{
            setArticlesArr(articlesMoreThanTenComments.slice(0,4))
        })
        .catch((err)=>{
          setError({err})
        })
  }, [])

  if(error){
    return <ErrorApiPage error={error}/>
}

  return (
    isLoading? (
        <p>LOADING...</p>
    ) :
        <ArticleCard articlesArr={articlesArr}/>
)

}

export default FeaturedArticles