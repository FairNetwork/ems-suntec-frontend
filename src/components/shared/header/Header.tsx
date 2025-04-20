import './header.scss';
import logo from "../../../assets/logo.png"
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header__logo" onClick={()=> navigate('/')}>
                <img src={logo} alt="logo"/>
            </div>
            <div className="header__actions">
                <h3 className="header__actions__item" onClick={()=> navigate('/contact')}>Kontakt</h3>
                <h3 className="header__actions__item" onClick={()=> navigate('/references')}>Referenzen</h3>
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
