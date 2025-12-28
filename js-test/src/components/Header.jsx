import "./Header.css";
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltNew } from "react-icons/wi";


const Header = ({ title, theme, setTheme }) => {

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <nav>
            <h1>{title}</h1>
            <span onClick={toggleTheme}>
                {theme === "light" ? <WiMoonAltFull /> : <WiMoonAltNew />}
            </span>
        </nav>
    )
}

export default Header;