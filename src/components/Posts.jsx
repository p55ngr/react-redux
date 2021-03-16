import React from 'react'
import Post from './Post'
import {connect} from 'react-redux'
const Posts = ({props}) =>{
    if(!props.posts.length){
        return <p className="text-center">No Posts</p>
    }
    return (
        props.posts.map(post => <Post key={post} post={post}></Post>)
    )
}

export default Posts
