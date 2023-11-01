import './footer.css'

function Footer() {
    return (
        <footer id="contacts">
            <div className="footer__infomation">
                <div className="footer__information__name">Gres Maxim</div>
                <div className="footer__information__prof">Front-end developer</div>
                <div className="mail">
                    <a href="mailto:chemax715511@gmail.com">chemax715511@gmail.com</a>
                </div>
            </div>
            <div className="footer__useful-inks">
                <ul>
                    <li>Useful Links</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Portfolio</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
            </div>
            <div className="footer__social-media">
                <ul>
                    <li>Social Media</li>
                    <li><a href="https://instagram.com/maksgres95?igshid=MzRlODBiNWFlZA==" target="_blank">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/maxim-gres-430b3a24b/" target="_blank">linkedin</a></li>
                    <li><a href="https://github.com/Chemax777" target="_blank">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer