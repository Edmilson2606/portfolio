import { useState, useEffect } from 'react';
import styles from './Hero.module.css'
import Button from '../elements/Button'

function Hero() {

    const toRotate = ['Edmilson Melo.', 'Desenvolvedor Full Stack.'];
    const [text, setText] = useState('');
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(200);

    useEffect(() => {
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(20)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(200);
            setLoop(loop + 1);
        }
    }

    return (
        <>
            <section className={styles.hero} id='hero'>
                <h1>Olá, eu sou {text} </h1>
                <p>
                    Sou apaixonado por tecnologia, como desenvolvedor Full-Stack foco no <br/> 
                    desenvolvimento de aplicações web modernas e eficientes, estou  <br/>
                    sempre em busca de novas oportunidades e desafios. <br/>
                </p>
                <Button link={'https://www.linkedin.com/in/edmilsonmelo2606/'} text='Saber mais'/>
            </section>
        </>
    )
}
export default Hero