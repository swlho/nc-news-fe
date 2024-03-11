const ArticleCard = (props) => {
    const {articlesArr} = props

    const articleCardsMap = articlesArr.map((article)=>
    {
        const {article_id,article_img_url, title, topic, author, created_at, votes, comment_count} = article
        return (
            <div className="article-card" key={article_id}>
                <h2>{title}</h2>
                <p>#{topic}</p>
                <img src={article_img_url} className="article-img"/>
                <p>Author: {author}</p>
                <p>Created at: {created_at}</p>
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