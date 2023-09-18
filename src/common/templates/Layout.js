import { Outlet } from 'react-router-dom';
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
                {/*모바일이면서 로그인 상태여야한다*/}
                {/*  <NavMobile />*/}
            </footer>
        </div>
    );
};

export default Layout;
