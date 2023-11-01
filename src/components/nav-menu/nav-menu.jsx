import './nav-menu.css'
import logo from '../../img/logo.svg'

function NavMenu() {

    const toggle = () => {
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.menu');
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    }

    const closeMenu = (e) => {
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.menu');

        if(!e.target.parentElement.classList.contains('menu-list__item')) return;
        
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }

    return (
        <>
            <div className='header'>
                <div className="header__container">

                    <div className="header__logo" id='header'>
                        <a href="#"><img src={logo} alt="logo" /></a>
                    </div>

                    <div className="btn-container" onClick={toggle}>
                        <div className="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="menu">
                        <nav>
                            <ul className='menu__list' onClick={closeMenu}>
                                <li className='menu-list__item'><a href="#">home</a></li>
                                <li className='menu-list__item'><a href="#about">about</a></li>
                                <li className='menu-list__item'><a href="#skills">skills</a></li>
                                <li className='menu-list__item'><a href="#works">portfolio</a></li>
                                <li className='menu-list__item'><a href="#contacts">contact</a></li>
                                <li className="content__about__description__hire-button menu-list__item">
                                    <a href="https://drive.google.com/uc?export=download&id=1DexDoKVE2hsE_lxzF8iJbPBeyQDmztc9">Download CV</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavMenu