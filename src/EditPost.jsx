import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const EditPost = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    let location = useLocation();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    } 

    useEffect(() => {
        setFormData(location.state.post)
      }, [location]);

    const editPost = (e) => {
        e.preventDefault()
        console.log("Baal")
        let posts = JSON.parse(localStorage.getItem("posts"));

        let foundIndex = posts.findIndex(x => x.id == formData.id);
        posts[foundIndex] = formData;
        
        console.log("Baal")
        localStorage.setItem("posts", JSON.stringify(posts));
        navigate("/");
    }

    return (
        <> 
            <div className="px-10 py-5 m-2">
                <h2>Content</h2>
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

            <button className="px-10 py-5 m-2" onClick={(e) => editPost(e)}> Submit </button>
        </>
    )
}

export default EditPost