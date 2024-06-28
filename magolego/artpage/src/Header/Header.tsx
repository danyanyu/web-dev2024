import styles from './Header.module.css'

interface headerprops{
    handleclick: any
}

function Header(props: headerprops){
    return(
        <>
       
        <header className={styles.header}>
            <h1>Danyadoingstuff Gallery</h1>                
        </header>

        <div className={styles.stickyWrapper}>
        <div className={styles.buttonRow}>
        <button onClick={()=>props.handleclick("Home")}>Home</button>
            <button onClick={()=>props.handleclick("Watercolors")}>Watercolors</button>
            <button onClick={()=>props.handleclick("Graphics")}>Graphics</button>
            <button onClick={()=>props.handleclick("Digital")}>Digital</button>
            </div>
            </div>
            </>
    );
}

export default Header