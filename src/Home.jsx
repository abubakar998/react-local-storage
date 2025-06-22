import { useNavigate } from "react-router-dom";

const Home = () => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    console.log('p', posts);
    const navigate = useNavigate();

    const editPost = (e, post) => {
        e.preventDefault()
        navigate("/edit-post", { state: { post: post } });
    }

    const deletePost = (e, id) => {
        e.preventDefault()
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts = posts.filter(obj => obj.id !== id);
        localStorage.setItem("posts", JSON.stringify(posts));
        navigate("/");
    }

    return (
        <>
            <h1> This is Home</h1>
            {
                posts && posts.map(post =>
                    <div className="my-2" key={post.id}>
                        <h4> Id: {post.id} </h4>
                        <h2> Title: {post.title} </h2>
                        <p> Content: {post.content} </p>
                        <button className="mt-2" onClick={(e) => editPost(e, post)}> Edit Post </button>
                        <button className="mt-2" onClick={(e) => deletePost(e, post.id)}> Delete Post </button>
                    </div>
                )
            }
        </>
    )
}

export default Home