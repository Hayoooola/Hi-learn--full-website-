import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./cart-items";
import { AiOutlineShopping } from "react-icons/ai";

import "./index.css";
import { refreshCart } from "../../features/cartState";
import ICourseData from "../../interfaces/course-data";
import { useFetchAllCoursesQuery } from "../../API/coursesApi";

interface IStore {
    userCart: string[];
    openCart: boolean;
}


const Cart = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [userCart, setUserCart] = useState<ICourseData[]>([]);
    const [coursesData, setCoursesData] = useState<ICourseData[] | []>([]);
    const [SumCart, setSumCart] = useState(0);

    const userCartItems = useSelector((store: { userCart: IStore; }) => store.userCart).userCart;
    const openCart = useSelector((store: { userCart: IStore; }) => store.userCart).openCart;

    const { data } = useFetchAllCoursesQuery(null);

    const dispatch = useDispatch();


    // getting primary data
    useEffect(() => {
        dispatch(refreshCart());
    }, []);

    // fetching all courses data from data-base
    useEffect(() => {
        data && setCoursesData(data);
        openCart && setIsCardOpen(true);
    }, [data, userCart, openCart]);


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



    return (

        <div className="main-header__cart mx-2">
            <div className="main-header__cart__cart-icon position-relative" onClick={() => setIsCardOpen(true)}>
                <AiOutlineShopping size="1.8rem" />
                <span className="main-header__cart__cart-count">{userCartItems.length}</span>
            </div>

            <CartItems isCardOpen={isCardOpen} closeCart={() => setIsCardOpen(false)} userCart={userCart} SumCart={SumCart} />
        </div>
    );
};

export default Cart;
