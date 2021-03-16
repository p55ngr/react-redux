import React ,{useState}from 'react'

function PostForm({props}) {
    let title = props.title
    console.log(props)
    const submitHandler =(event) =>{
        event.preventDefault()
        props.addPost(props.posts,title)
        props.changeTitle('')
    }
    
    return (
        <form onSubmit={submitHandler}>
            <h1>Post From</h1>
            <div className="form-group">
                <label htmlFor="title">Заголовок Поста</label>
                <input type="text"
                 className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(event) => props.changeTitle(event.target.value)}
                  />
            </div>
            
            <button className="btn btn-success" type="submit">Создать</button>
            {title}
        </form>
    )
}

export default PostForm
