import { Link } from "react-router-dom"
import { isoStringToDate } from "../utils/isoStringToDate"

const ArticleCard = (props) => {
    const {articlesArr} = props

    const articleCardsMap = articlesArr.map((article)=>
    {
        const {article_id,article_img_url, title, topic, author, created_at, votes, comment_count} = article
        return (
            <div className="article-card" key={article_id}>
                <Link to={`/articles/${topic}/${article_id}`} className="article-card-title"><h2 >{title}</h2></Link>
                <Link to={`/articles/${topic}`} className="article-topic-link"><p>#{topic}</p></Link>
                <Link to={`/articles/${topic}/${article_id}`}><img src={article_img_url} className="article-img"/></Link>
                <p>Author: {author}</p>
                <p>Created at: {isoStringToDate(created_at)}</p>
                <p>Votes: {votes} | Comments: {comment_count}</p>
            </div>
        )
    })

    return (
        <div id="articles">
            {articleCardsMap}
        </div>
    )
}

export default ArticleCard