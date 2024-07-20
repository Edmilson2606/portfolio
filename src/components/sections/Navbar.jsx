import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#hero">Apresentação</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#aboutMe">Sobre mim</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/edmilsonmelo2606/">
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Edmilson2606">
                            <FaGithub size={30}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar