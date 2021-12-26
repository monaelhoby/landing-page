// import { useSelector } from 'react-redux';
// import Loading from '../components/Loading';
// import LoginPage from '../pages/Login';
// import { selectLoadingUserInfo, selectUserPhone } from '../store/userInfo';

// export default function PrivateRoute({ as: Page, ...props }) {
//   const user = useSelector(selectUserPhone);
//   const loading = useSelector(selectLoadingUserInfo);
//   if (loading) {
//     return <Loading />;
//   }
//   return user ? <Page {...props} /> : <LoginPage />;
// }
