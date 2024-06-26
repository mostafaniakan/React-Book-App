import {AiFillHeart} from "react-icons/ai";
import {useState} from "react";
import styles from "./BookCard.module.css";
const BookCard = ({data,handleLikedList}) => {
    const {id, author, country, image, language, link, pages, title, year} =data;
    const [like, setLike] = useState(false);
    const LikeHandler=()=>{
        handleLikedList(data,like);
        setLike(like => !like);
    }
    return (
        <div className={styles.card}>
            <img src={`/assets/${image}`} alt={title}/>
            <div className={styles.info}>
                <h3>
                    {title}
                </h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages}</span>
                </div>
            </div>
            <button onClick={LikeHandler}><AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem"/></button>
        </div>
    )
}
export default BookCard