import Comment from './Comment'
const Comments = ({comments}) => {
    return (
        <div className="flex flex-col space-y-4 ">
            {comments.map((comment, id)=>(
                <Comment username={comment.username} desc={comment.description} key={id}/>
            ))}
        </div>
    )
}

export default Comments
