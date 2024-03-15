import { Link } from "react-router-dom"
import { isoStringToDate } from "../utils/isoStringToDate"

const ArticlePreviewCard = (props) => {
    const {articlesArr} = props

    const articleCardsMap = articlesArr.map((article)=>
    {
        const {article_id,article_img_url, title, topic, author, created_at, votes, comment_count, body} = article
        return (
            <div className="article-preview-card" key={article_id}>
                <Link to={`/articles/${topic}/${article_id}`} className="article-card-title"><h2 >{title}</h2></Link>
                <p>By {author}</p>
                <Link to={`/articles/${topic}/${article_id}`}><img src={article_img_url} className="article-img"/></Link>
                <Link to={`/articles/${topic}`} className="article-topic-link"><p>#{topic}</p></Link>
                <p>Votes: {votes} | Comments: {comment_count}</p>
            </div>
        )
    })

    return (
        <>
            {articleCardsMap}
        </>
    )
}

export default ArticlePreviewCard