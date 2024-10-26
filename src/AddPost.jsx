import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom";

const AddPost = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    } 

    const addPost = (e) => {
        e.preventDefault()
        let posts = JSON.parse(localStorage.getItem("posts"));
        const uuid = uuidv4()
        if(posts) {
            posts.push({...formData, id : uuid})
        } else {
            posts = [{...formData, id : uuid}]
        }

        localStorage.setItem("posts", JSON.stringify(posts));
        navigate("/");
    }

    return (
        <> 
            <div className="px-10 py-5 m-2">
                <h2>Title</h2>
                <input className="px-5 py-2 my-2 border-orange-500" 
                    placeholder="add title" 
                    type="text" 
                    name = "title" 
                    value={formData?.title? formData.title : ""} 
                    onChange={handleChange}
                />
            </div>
            <div className="px-10 py-5 m-2">  
                <h2>Content</h2>
                <textarea 
                    className="px-5 py-2 my-2 border-orange-500" 
                    placeholder="add content" 
                    name = "content" 
                    value={formData?.content? formData.content : ""} 
                    onChange={handleChange}
                />
            </div>

            <button className="px-10 py-5 m-2" onClick={(e) => addPost(e)}> Submit </button>
        </>
    )
}

export default AddPost