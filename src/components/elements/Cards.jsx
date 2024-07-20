import styles from './Cards.module.css'
import Button from './Button'
import { useState } from 'react'

function Cards({ img, title, description, site, repo, tech1, tech2, tech3  }) {

    const [tech, setTech] = useState(false)

    function techIn() {
        setTech(true)
    } 

    function techOut() {
        setTech(false)
    }

    return (
        <>
            <main onMouseLeave={techOut} className={styles.card}>
                <a onMouseEnter={techIn} href={repo}>
                    <img src={img} alt="ERROR" />
                </a>
                {tech === true && (
                    <section className={styles.tech}>
                        <img src={tech1} alt="ERROR" />
                        <img src={tech2} alt="ERROR" />
                        <img src={tech3} alt="ERROR" />
                    </section>
                )}
                <section>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </section>
                <Button link={site} text='Clique aqui'/>
            </main>
        </>
    )
}
export default Cards