import { useContext } from 'react';
import { Link } from 'react-router-dom';

import "./index.css";
import PanelContext from '../../../../contexts/panelContext';


const Dashboard = () => {
    const panelContext = useContext(PanelContext);
    const name = panelContext.userObj?.name;

    return (
        <div className="panel-dashboard">

            <p className="panel-welcome-message my-3">
                {`سلام ${name} (${name} نیستید؟ خارج شوید)`}
            </p>
            <div className='panel-dashboard-body'>
                <p className="panel-dashboard-text">
                    از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
                </p>
                <div className="panel-dashboard-links mt-3">
                    <Link to="/my-account/setting">جزئیات حساب</Link>
                    <Link to="/my-account/courses">دوره های خریداری شده</Link>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
