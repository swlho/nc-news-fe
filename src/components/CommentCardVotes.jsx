import { patchCommentVotes } from '../utils/api'

const CommentCardVotes = (props) => {
    const {comment_id, commentVotes, setCommentVotes} = props

    const changeCommentVotes = ({target}) =>{
        const patchVal = +target.attributes.incrementvalue.value
    setCommentVotes((currVotes)=>{
        const newVotesValue = currVotes + patchVal
        return newVotesValue
    })
    patchCommentVotes(`comments/${comment_id}`, patchVal)
  }

return (
    <p><button onClick={(changeCommentVotes)} incrementvalue={1}>⬆️</button> Votes: {commentVotes} <button onClick={(changeCommentVotes)} incrementvalue={-1}>⬇️</button></p>
)

}

export default CommentCardVotes