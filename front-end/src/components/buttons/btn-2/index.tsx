import { Link } from 'react-router-dom';
import { CgArrowLeft } from 'react-icons/cg';

import "./index.css";

interface IProps {
  title: string,
  link?: string;
}

const Btn2 = (props: IProps) => {
  return (
    <Link to={props.link || "#"} className='d-flex'>
      <div className='d-flex btn2__wrapper align-items-center'>
        <div className='mx-2 btn-2__title'>{props.title}</div>
        <CgArrowLeft size="1.4rem" />
      </div>
    </Link>
  );
};

export default Btn2;