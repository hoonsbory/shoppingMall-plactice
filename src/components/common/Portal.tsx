import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: IPortal) => {
  const [element, setElement] = useState<HTMLElement>();
  useEffect(() => {
    setElement(document.querySelector(selector) as HTMLElement);
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
};

export default Portal;
