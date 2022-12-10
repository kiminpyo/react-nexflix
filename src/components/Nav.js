import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'
import "./Nav.css";
const Nav = React.memo(() => {
    console.log("네브바 렌더");
    const [show, handleShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        // clean-up
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const handleChange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
        navigate(`/search?q=${e.target.value}`)
  

    };
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
                alt='Neflix logo'
                onClick={() => window.location.reload()}
            />
            <input type='text' onChange={handleChange} 
            value={searchValue} className="nav__input"
            placeholder="검색어 입력"
            />
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='User logged'
                className='nav__avatar'
            />
        </nav>
    );
});

export default Nav;
