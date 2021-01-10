import './styles.css';
import { ReactComponent as InstagramImage } from './Instagram.svg';
import { ReactComponent as LinkedinImage } from './Linkedin.svg';
import { ReactComponent as YoutubeImage } from './Youtube.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="youtube">
                    <YoutubeImage />
                </a>
                <a href="https://www.linkedin.com/in/eliasborges/">
                    <LinkedinImage />
                </a>
                <a href="https://www.instagram.com/eliasjborges/">
                    <InstagramImage />
                </a>
            </div>
        </footer>
    )
}

export default Footer;