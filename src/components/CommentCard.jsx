const CommentCard = (props) => {
    const {commentsArr} = props

    const commentCardsMap = commentsArr.map((comment)=>{
        const {comment_id, body, author, votes, created_at} = comment
        return (
            <div className="comment-card" key={comment_id}>
                <p>{author} commented at {created_at}</p>
                <p>{body}</p>
                <p><button>⬆️</button> {votes} <button>⬇️</button></p>
            </div>
        )
    })

    return (
        <div id="comments">
            {commentCardsMap}
        </div>
    )

}

export default CommentCard