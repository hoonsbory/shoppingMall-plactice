import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: IPortal) => {
  const element = typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
