import { Link } from "react-router-dom"
import { getData } from "../utils/api"
import { useState, useEffect } from "react"

const Navbar = () => {

    const [topicsArr, setTopicsArr] = useState([])

    useEffect(() => {
      getData('/topics')
      .then(({topics})=>{
        setTopicsArr(topics)
      })
    }, [])
    
    const topicsMap = topicsArr.map((topic)=>{
        const topicName = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)
        return <Link className="dropdown-links" to={`/articles/${topic.slug}`} key={topic.slug}>{topicName}</Link>
    })

    return(
        <nav className="navbar" id="navbar">
            <ol>
                <li><a href="/">Home</a></li>
                <li>
                    <div className="dropdown">
                    <Link to = '/articles' className="dropbtn">Topics</Link>
                        <div className="dropdown-content">
                            {topicsMap}
                        </div>
                    </div>
                </li>
                <li><Link to = '/account'>Account</Link></li>
            </ol>
        </nav>
        )
}

export default Navbar