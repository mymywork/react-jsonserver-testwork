import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const PostView = ({ }) => {

    let params = useParams();
    const post = useSelector((state) => state.postsReducer.data.filter(x => x.id == params.id)[0]);
    console.log(post)
    if (!post) return (<div>no post data</div>)
    return(
    <React.Fragment>
        
        <h1>Post id = {post.id}.</h1>
        <span>Title:</span><span>{post.title}</span><br />
        <span>Author:</span><span>{post.author}</span>

    </React.Fragment>)
}
