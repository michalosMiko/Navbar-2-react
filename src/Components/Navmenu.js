import "./Navmenu.css"
import logo from "./images/logo gl.png"
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../data"
import { useState } from "react"


const Navmenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return <nav>
    <div className="navigation">
      <div className="nav-header">
        <h1 className="logo">MWEBX</h1>
        {/* <img src={logo} alt="" /> */}
        <button onClick={() => setShowMenu(!showMenu) }>
          <GiHamburgerMenu className="hamburger-icon"/>
        </button>
      </div>
      {/* template string pravý alt + 7  `` */}
      <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
        <ul>
          {
            links.map( (oneLink) => {
                const {id, text, url} = oneLink
                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
            })
          }
          
        </ul>
      </div>

    </div>
  </nav>
    
     
  
}

export default Navmenu