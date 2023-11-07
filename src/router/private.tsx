import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/user';
import { Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const user = useRecoilValue(userState);

    return user ? <Outlet /> : <Navigate to="/login" />;
}
