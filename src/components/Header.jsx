import Logo from "@/assets/svg/logo"
import Gift from "@/assets/svg/gift"
import Link from "next/link"
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter();
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo" href="/">
                        <Logo />
                    </Link>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li className="header__item">
                                <Link className={router.pathname == "/find" ? "header__active-link" : ""} href="/find">Найти место</Link>
                            </li>
                            <li className="header__item">
                                <Link className={router.pathname == "/animators" ? "header__active-link" : ""} href="/animators">Аниматоры</Link>
                            </li>
                            {/* <li className="header__item">
                                <Link className={router.pathname == "/food" ? "header__active-link" : ""} href="/food">Питание</Link>
                            </li>
                            <li className="header__item">
                                <Link className={router.pathname == "/taxi" ? "header__active-link" : ""} href="/taxi">Детское такси</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Header