import { CgArrowLeft } from 'react-icons/cg';

import "./index.css";
import { Link } from 'react-router-dom';

interface IProps {
  title: string,
  link?: string;
}

const Btn1 = (props: IProps) => {
  return (
    <Link to={props.link || "#"} >
      <div className='d-flex btn1__wrapper align-items-center'>
        <div className='mx-2 btn-1__title'>{props.title}</div>
        <CgArrowLeft size="1.2rem" />
      </div>
    </Link>
  );
};

export default Btn1;