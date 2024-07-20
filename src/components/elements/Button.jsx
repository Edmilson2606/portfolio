import styles from './Button.module.css'

function Button({link, text}) {
    return (
        <>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </>
    )
}
export default Button