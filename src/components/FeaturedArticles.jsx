import {useState, useEffect} from 'react'
import { getData } from '../utils/api';
import ArticlePreviewCard from './ArticlePreviewCard';
import Loading from './Loading';
import ErrorApiPage from './ErrorApiPage'

const FeaturedArticles = () => {
    const [articlesArr, setArticlesArr]= useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    
    useEffect(() => {
      setIsLoading(true)
      getData('/articles')
      .then(({articles})=>{
        setIsLoading(false)
        return articles
      })
      .then((articlesRandom)=>{
          let sliceStartNum = randomNumber(0, articlesRandom.length-3)
            setArticlesArr(articlesRandom.slice(sliceStartNum,sliceStartNum+3))
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
        <Loading/>
    ) :
    <div className="frontpage-articles" id='featured-articles'>
      <ArticlePreviewCard articlesArr={articlesArr}/>
    </div>
)

}

export default FeaturedArticles