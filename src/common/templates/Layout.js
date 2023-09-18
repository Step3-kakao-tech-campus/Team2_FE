import { Outlet } from 'react-router-dom';
import NavMobile from '../organisms/NavMobile';
import NavBar from '../organisms/NavBar';

const Layout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <body>
                <Outlet />
            </body>
            <footer>
                <NavMobile />
            </footer>
        </div>
    );
};

export default Layout;
