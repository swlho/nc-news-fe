import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar" id="navbar">
            <ol>
                <li><a href="/">Home</a></li>
                <li>
                    <div className="dropdown">
                    <Link to = '/articles' className="dropbtn">Articles</Link>
                    <div className="dropdown-content">
                        <Link className="dropdown-links" to ='/articles/coding'>Coding</Link>
                        <Link className="dropdown-links" to ='/articles/football'>Football</Link>
                        <Link className="dropdown-links" to ='/articles/cooking'>Cooking</Link>
                    </div>
                    </div>
                </li>
                <li> <Link to = '/account'>Account</Link></li>
            </ol>
        </nav>
        )
}

export default Navbar