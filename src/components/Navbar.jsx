import logo from "../assets/YevhenDerkachLogo.png";
import { FaLinkedinIn, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="www.linkedin.com/in/yevhen-derkach-9b805b182" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;