import { patchCommentVotes } from '../utils/api'
import { useState } from 'react'

const CommentCardVotes = (props) => {
    const {comment_id, votes} = props
    const [commentVotes, setCommentVotes] = useState(votes)

    const changeCommentVotes = ({target}) =>{
        const patchVal = +target.attributes.incrementvalue.value
    setCommentVotes((currVotes)=>{
        const newVotesValue = currVotes + patchVal
        return newVotesValue
    })
    patchCommentVotes(`comments/${comment_id}`, patchVal)
  }

return (
    <p><button className="vote-btn" onClick={(changeCommentVotes)} incrementvalue={1}>⬆️</button> Votes: {commentVotes} <button className="vote-btn" onClick={(changeCommentVotes)} incrementvalue={-1}>⬇️</button></p>
)

}

export default CommentCardVotes