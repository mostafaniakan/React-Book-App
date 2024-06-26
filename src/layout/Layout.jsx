import styles from "./Layout.module.css";
const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p>React.js</p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed By Mostafa</p>
            </footer>
        </>
    )
}
export default Layout