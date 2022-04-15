export function Post ({id, name, deletePost}){
    return(
        <div>
            <h1 >{name}</h1>
            <button 
                onClick={ () => deletePost(id)}>
                Delete
            </button>
        </div>
    )
}