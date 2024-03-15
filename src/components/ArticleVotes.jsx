import { patchArticleVotes } from '../utils/api'

const ArticleVotes = (props) => {
    const {article_id, articleVotes, setArticleVotes} = props
    
    const changeArticleVotes = ({target}) =>{
        const patchVal = +target.attributes.incrementvalue.value
    setArticleVotes((currVotes)=>{
        const newVotesValue = currVotes + patchVal
        return newVotesValue
    })
    patchArticleVotes(`articles/${article_id}`, patchVal)
  }

return (
    <p><button className="vote-btn" onClick={(changeArticleVotes)} incrementvalue={1}>⬆️</button> Votes: {articleVotes} <button className="vote-btn" onClick={(changeArticleVotes)} incrementvalue={-1}>⬇️</button></p>
)

}

export default ArticleVotes