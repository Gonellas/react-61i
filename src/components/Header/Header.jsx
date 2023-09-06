import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({title, numero, activa}) => {
    //let title = 'Comisión 61i😎';
    // const {title} = props;
    return ( 
        <>
        {/* // <header>{title}</header>
        // <header>{props.title}</header> */}
        <header>{title} {numero}, sigue {activa?'activa':'no activa'}</header>
        <SearchBar/>
        </>
     );
}
 
export default Header;