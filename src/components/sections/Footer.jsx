import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <ul>
                    <li>Meu contato:</li>
                    <li>79 9 9800 2606</li>
                </ul>
                <ul>
                    <li>Email:</li>
                    <li>ecmelo.26@gmail.com</li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/edmilsonmelo2606/">
                            <FaLinkedin size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Edmilson2606">
                            <FaGithub size={40}/>
                        </a>
                    </li>
                </ul>

            </footer>
        </>
    )
}
export default Footer