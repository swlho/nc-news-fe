import { useState, useEffect } from "react";
import { getData } from "../utils/api";
import ArticlePreviewCard from "./ArticlePreviewCard";
import Loading from "./Loading";

const TopVotedArticles = () => {
    const [articlesArr, setArticlesArr]= useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getData('/articles', null, 'votes', 'desc')
        .then(({articles})=>{
          setIsLoading(false)
          setArticlesArr(articles.slice(0,3))
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
    <div className="frontpage-articles" id='top-voted-articles'>
      <ArticlePreviewCard articlesArr={articlesArr}/>
    </div>
)
}

export default TopVotedArticles