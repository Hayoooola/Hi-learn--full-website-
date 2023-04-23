import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import "./index.css";
import ICourseData from "../../../interfaces/course-data";
import { removeFromCart } from "../../../features/cartState";

interface IProps {
    isCardOpen: boolean;
    closeCart: () => void;
    userCart: ICourseData[];
    SumCart: number;
}


const CartItems: FC<IProps> = ({ isCardOpen, closeCart, userCart, SumCart }) => {
    const cartRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    // open & close cart
    useEffect(() => {
        isCardOpen ? cartRef.current?.classList.add("show") : cartRef.current?.classList.remove("show");
    }, [isCardOpen]);


    return (
        <div className="cart-container" ref={cartRef}>
            <div className="cart-wrapper px-3">
                <div className="cart-title d-flex justify-content-center">
                    <div className="cart-title-wrapper d-flex">
                        <AiOutlineShopping size="1.4rem" />
                        <span className="mx-2">سبد خرید</span>
                    </div>
                </div>
                <div className="cart-items">

                    {userCart.length > 0 ?
                        userCart.map((cartItem, index) => (
                            <div className="cart-item row mb-3" key={index}>
                                <div className="cart-item__image-wrapper col-3">
                                    <img src={require(`../../../assets/images/courses/${cartItem.cover}`)} alt={cartItem.name} className="cart-item__image" />
                                </div>
                                <div className="cart-item__title col-8">
                                    {cartItem.name}
                                </div>
                                <div className="cart-item__delete-icon col-1">
                                    <span onClick={() => dispatch(removeFromCart(cartItem.shortName))}><AiFillCloseCircle size="1.2rem" /></span>
                                </div>
                                <div className="cart-item__price-wrapper mt-2">
                                    <div className="cart-item__price">{cartItem.price.toLocaleString()} تومان</div>
                                </div>
                            </div>
                        )) :
                        <div> سبد خرید شما خالی است.</div>}

                </div>
                <div className="cart-info">
                    <div className="cart-info__sum text-center mt-5">
                        <span> جمع کل سبد خرید:</span>
                        <span> {SumCart.toLocaleString()} تومان</span>
                    </div>
                    <div className="cart-info__buttons d-flex justify-content-center">
                        <Link to="/cart" className="cart-btn" onClick={closeCart}>
                            مشاهده سبد خرید
                        </Link>
                    </div>
                </div>
                <span className="cart-close-btn" onClick={closeCart}><AiOutlineClose size="1.4rem" /></span>
                <div className="card-canvas" onClick={closeCart} />
            </div>
        </div>
    );
};

export default CartItems;
