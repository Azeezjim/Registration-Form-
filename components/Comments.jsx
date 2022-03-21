import Comment from './Comment'
const Comments = ({comments}) => {
    return (
        <div className="flex flex-col space-y-4 ">
            {comments.map((comment)=>(
                <Comment username={comment.username} desc={comment.description}/>
            ))}
        </div>
    )
}

export default Comments
