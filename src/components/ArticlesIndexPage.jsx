import Articles from "./Articles"
import SortBy from "./SortBy"
import {useState} from 'react'

const ArticlesIndexPage = () => {
    const [articlesArr, setArticlesArr]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortByCategory, setSortByCategory] = useState('created_at')
    const [orderBy, setOrderBy] = useState('asc')

    return (
    <>
    <SortBy setSortByCategory={setSortByCategory} setOrderBy={setOrderBy} setIsLoading={setIsLoading}/>
    <Articles articlesArr={articlesArr} setArticlesArr={setArticlesArr}isLoading={isLoading} setIsLoading={setIsLoading}sortByCategory={sortByCategory} orderBy={orderBy}/>
    </>
    )
}

export default ArticlesIndexPage