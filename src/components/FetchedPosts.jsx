import React from 'react'
import Post from './Post'
function FetchedPosts({posts}) {
    if(!posts.lenth){
        return <button className="btn btn-primary">Загрузить</button>
    }
    return (
        posts.map(post => <Post key={post} post={post}></Post>)
    )
}

export default FetchedPosts
