import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from './Home'
import AddPost from './AddPost'
import EditPost from './EditPost'

function App() {
    return (
        <div className="container">
            <Router>
                <ul  className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add-post">Add Post</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/" element = {<Home />} />
                    <Route exact path="/add-post" element = {<AddPost />} />
                    <Route exact path="/edit-post" element = {<EditPost />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
