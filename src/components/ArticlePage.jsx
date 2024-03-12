import Comments from './Comments'
import ArticleVotes from './ArticleVotes'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDataByArticleId } from '../utils/api'

const ArticlePage = () => {

    const { article_id } = useParams();
    const [article, setArticle]= useState({})
    const [articleVotes, setArticleVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const {title, topic, article_img_url, author, body, created_at, comment_count} = article

    useEffect(() => {
        setIsLoading(true)
        getDataByArticleId(`/articles/${article_id}`)
        .then(({article})=>{
          setIsLoading(false)
          setArticle(article)
          setArticleVotes(article.votes)
        })
  }, [article_id])

    return (
    isLoading? 
        <p>LOADING...</p>
     : 
        <div className='article-page'>
            <h3>{title}</h3>
            <p>Posted on {created_at}</p>
            <p>Written by {author}</p>
            <img src={`${article_img_url}`} className='article-img'></img>
            <p className='article-body'>{body}</p>
            <p>Tag: #{topic}</p>
            <ArticleVotes article_id={article_id} articleVotes={articleVotes} setArticleVotes={setArticleVotes}/>
            <h4>Comment on this article</h4>
            <p>[COMMENT BOX HERE]</p>
            <Comments article_id={article_id} comment_count = {comment_count}/>
        </div>
    )
}

export default ArticlePage