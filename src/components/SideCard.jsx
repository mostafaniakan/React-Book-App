import styles from "./SiteCard.module.css"
const SideCard = ({data:{image,title}}) => {
    return (
        <>
        <div className={styles.card}>
            <img src={`/assets/${image}`} alt={title}/>
            <p>{title}</p>
        </div>
        </>
    )
}
export default SideCard;