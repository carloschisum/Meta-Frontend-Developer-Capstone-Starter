import React from "react";
import logo from "../images/Logo .svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are a family owned restaurant. Be good.</p>
                </div>
                <div>
                    <h3>Links:</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact:</h3>
                    <ul>
                        <li><a href="/">Email</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Phone</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;