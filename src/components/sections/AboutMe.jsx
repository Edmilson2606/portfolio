import styles from './AboutMe.module.css'

import ellipse from '../../images/aboutMe/ellipse.svg'
import rectangle from '../../images/aboutMe/rectangle.svg'

function AboutMe() {
    return (
        <>
            <section className={styles.aboutme} id='aboutMe'>
                <h1>Sobre mim</h1>
                <div className={styles.container}>
                    <div className={styles.year}>
                        <p>2021</p>
                        <p>2022</p>
                        <p>2023</p>
                        <p>2024</p>
                    </div>
                    <div className={styles.img}>
                        <div className={styles.ellipse}>
                            <img src={ellipse} alt="Error" />
                            <img src={ellipse} alt="Error" />
                            <img src={ellipse} alt="Error" />
                            <img src={ellipse} alt="Error" />
                        </div>
                        <img src={rectangle} alt="Error" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Contratado pela Secretaria Municipal de Educação de Divina Pastora para gerenciar a infraestrutura e implementar o sistema integrado escolar.
                        </p>
                        <p>
                            Ingresso na EMSURB para manutenção e implementação de novos módulos no SINCRO, sistema de controle integrado da receita operacional.
                        </p>
                        <p>
                            Atuação em projetos para os setores de RH, Compras e Arrecadação na EMSURB, ampliando minha experiência em sistemas corporativos.
                        </p>
                        <p>
                            Início do curso de Desenvolvedor Full Stack na Escola DNC, aplicando conhecimentos adquiridos em projetos legados e buscando novas oportunidades e desafios.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMe