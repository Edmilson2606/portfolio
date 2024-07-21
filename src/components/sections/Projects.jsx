import styles from './Projects.module.css'
import Cards from '../elements/Cards'

import landingPageArquitetura from '../../images/projects/landingPageArquitetura.svg'
import weather from '../../images/projects/weather.svg'
import landingPageDNC from '../../images/projects/landingPageDNC.svg'
import portfolio from '../../images/projects/portfolio.svg'

import javascript from '../../images/skills/javascript.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'
import vite from '../../images/skills/vite.svg'

function Projects() {
    return (
        <>
            <section className={styles.projects} id='projects'>
                <h1>Projetos</h1>
                <div className={styles.container}>
                    
                    <div>
                        <Cards
                            img={landingPageArquitetura}
                            tech1={ html }
                            tech2={ css }
                            tech3={ javascript }
                            title="Landing Page Arquitetura"
                            description="Esta Landing Page foi desenvolvida para uma empresa de arquitetura com base nos requisitos do produto."
                            site="https://landingpagearquiterura.netlify.app/"
                            repo="https://github.com/Edmilson2606/Landing-Page-Arquitetura"
                        />
                    </div>
                    
                    <div>
                        <Cards
                            img={weather}
                            tech1={ html }
                            tech2={ css }
                            tech3={ javascript }
                            title="Previsão do Tempo e Endereços"
                            description="Este projeto visa criar uma ferramenta útil para o dia a dia dos usuários que lidam com esse tipo de informação."
                            site="https://wfl.netlify.app/"
                            repo="https://github.com/Edmilson2606/weather_forecast_and_location"
                        />
                    </div>

                    <div>
                        <Cards
                            img={portfolio}
                            tech1={ javascript }
                            tech2={ react }
                            tech3={ vite }
                            title="Portfólio"
                            description="Este portfólio foi desenvolvido com técnicas modernas que demonstram as habilidades técnicas e profissionais."
                            site="https://edmilson-portfolio.netlify.app/"
                            repo="https://github.com/Edmilson2606/portfolio"
                        />
                    </div>

                    <div>
                        <Cards
                            img={landingPageDNC}
                            tech1={ html }
                            tech2={ css }
                            tech3={ javascript }
                            title="Landing page DNC"
                            description="ste é o projeto de desenvolvimento do módulo base do curso de Tecnologia da Escola DNC."
                            site="https://lp-dnc.netlify.app/"
                            repo="https://github.com/Edmilson2606/projeto-landing-page"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
export default Projects