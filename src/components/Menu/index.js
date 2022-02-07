import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://youtube.com/" target="_blank">
                <BsYoutube size={31} color="#FFF" />
            </a>
            <a className="social" href="https://Instagram.com" target="_blank">
                <BsInstagram size={22} color="#FFF" />
            </a>
            <Link className="menu-item" to="/Links">
                Meus Links
            </Link>
        </div>
    )
}