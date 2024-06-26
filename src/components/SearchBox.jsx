import { IoMdSearch } from "react-icons/io";
import styles from "./SearchBox.module.css";
const SearchBox = ({search,setSearch,SearchHandler}) => {
    return (
        <>
        <div className={styles.search}>
            <input type="text" placeholder="Search Title" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}/>
            <button onClick={SearchHandler}><IoMdSearch/></button>
        </div>
        </>
    )
}
export default SearchBox;