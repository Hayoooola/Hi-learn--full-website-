import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

import "./index.css";
import Btn2 from "../../components/buttons/btn-2";
import ICourseData from "../../interfaces/course-data";
import { useFetchAllCoursesQuery } from "../../API/coursesApi";
import { refreshCart, removeFromCart } from "../../features/cartState";
import Loading from "../../components/loading";

interface IStore {
    userCart: string[];
    openCart: boolean;
}



const CartPage = () => {
    const [userCart, setUserCart] = useState<ICourseData[]>([]);
    const [coursesData, setCoursesData] = useState<ICourseData[] | []>([]);
    const [SumCart, setSumCart] = useState(0);

    const userCartItems = useSelector((store: { userCart: IStore; }) => store.userCart).userCart;

    const { data, isLoading } = useFetchAllCoursesQuery(null);

    const dispatch = useDispatch();


    // getting primary data
    useEffect(() => {
        dispatch(refreshCart());
    }, []);

    // fetching all courses data from data-base
    useEffect(() => {
        data && setCoursesData(data);
    }, [data]);


    // update user cart
    useEffect(() => {
        if (userCartItems.length > 0) {
            const newArr: ICourseData[] = coursesData.filter((courseObj) => userCartItems.includes(courseObj.shortName));
            const priceArray = newArr.map((cartItem) => +cartItem.price);

            setUserCart(newArr);
            priceArray.length > 0 && setSumCart(priceArray.reduce((a, b) => a + b));
        } else {
            setUserCart([]);
            setSumCart(0);
        }
    }, [userCartItems, coursesData]);


    const itemsToShow = () => {
        if (isLoading) {
            return <Loading />;
        } else if (userCart.length > 0) {
            return (
                <div className="container">
                    <div className="cart-page-container my-5 px-3">
                        <table className="cart-page-table w-100">
                            <thead className="d-none d-lg-block">
                                <tr className="row cart-page__title">
                                    <th className="course-remove col-12 col-lg-1"></th>
                                    <th className="course-thumbnail col-12 col-lg-3"></th>
                                    <th className="course-name col-12 col-lg-6">دوره ها</th>
                                    <th className="course-price col-12 col-lg-2">قیمت</th>
                                </tr>
                            </thead>
                            <tbody>

                                {userCart.map((courseObj, index) => (
                                    <tr className="row align-items-center" key={index}>
                                        <th className="course-remove col-12 col-lg-1">
                                            <AiFillCloseCircle size="1.5rem" onClick={() => dispatch(removeFromCart(courseObj.shortName))} />
                                        </th>
                                        <th className="course-thumbnail col-12 col-lg-3">
                                            <img src={require(`../../assets/images/courses/${courseObj.cover}`)} alt={courseObj.name} className="cart-page-thumbnail" />
                                        </th>
                                        <th className="course-name col-12 col-lg-6" data-title="دوره">
                                            {courseObj.name}
                                        </th>
                                        <th className="course-price col-12 col-lg-2" data-title="قیمت">
                                            {courseObj.price.toLocaleString()} تومان
                                        </th>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                        <div className="car-page-sum d-flex justify-content-center">
                            جمع کل:  {SumCart.toLocaleString()} تومان
                        </div>

                        <div className="cart-page__discount">
                            <Btn2 title="ادامه جهت تسویه حساب" />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="cart-page-container my-5 px-3 py-5">
                        <div className="empty-cart">
                            <div className="empty-cart__header">
                                <AiOutlineInfoCircle size="1.5rem" />
                                <span className="mx-2  empty-cart__title">سبد خرید شما درحال حاضر خالی است!</span>
                            </div>
                            <div className="empty-cart__body">
                                <p className="mt-5 text-center">پیش از مراجعه به صفحه پرداخت شما باید دوره هایی را به سبد خریدتان اضافه نمایید.</p>
                                <div className="d-flex justify-content-center">
                                    <Btn2 title="مشاهده فروشگاه" link="/courses/all" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };


    return itemsToShow();
};

export default CartPage;
