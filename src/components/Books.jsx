import {books as bookData} from "../constants/mockData.js"
import BookCard from "./BookCard.jsx";
import {useState} from "react";
import SideCard from "./SideCard.jsx";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox.jsx";

const Books = () => {
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState([]);
    const [books,setBooks]=useState(bookData);
    const handleLikedList = (book, status) => {
        if (!status) {
            setLiked(prevLiked => [...prevLiked, book])
        } else {
            const newLikedList = liked.filter(item => item.id !== book.id);
            setLiked(newLikedList);
        }
    }
    const SearchHandler = ()=>{
        if(search){
            const newBooks= bookData.filter(book => book.title.toLowerCase().includes(search));
            setBooks(newBooks);
        }else {
            setBooks(bookData);
        }
    }
    return (
        <>
            <SearchBox search={search} setSearch={setSearch} SearchHandler={SearchHandler}/>
            <div className={styles.container}>
                <div className={styles.cards}>
                    {books.map(book => (
                        <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
                    ))}
                </div>
                <div className={styles.favorite}>
                    <h4>Favorite</h4>
                    {!!liked.length && (<div>{liked.map((book) => (
                        <SideCard key={book.id} data={book}/>
                    ))}</div>)}
                </div>
            </div>
        </>
    )
}
export default Books