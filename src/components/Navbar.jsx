import "../index.css";

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img
                src="../../public/assets/react-icon-small.png"
                className="nav--logo_icon"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}
