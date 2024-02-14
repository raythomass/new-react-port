import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link className="nav-link" id="links" to='/' >Home</Link>
                </li>
                <li>
                    <Link className="nav-link" id="links" to='/about' >About</Link>
                </li>
                <li>
                    <Link className="nav-link" id="links" to='/projects' >Projects</Link>
                </li>
                <li>
                    <Link className="nav-link" id="links" to='/contact' >Contact</Link>
                </li>
                <li>
                    <Link className="nav-link" id="links" to='/resume' >Resume</Link>
                </li>
            </ul>
        </nav>
    )


}

export default Nav;