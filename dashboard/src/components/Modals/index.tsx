import React from 'react'
import { classNames } from '../../helpers/classNames';

interface ModalProps {
  children?: any;
  isOpen?: boolean;
}

export default function Modal({ children, isOpen }: ModalProps) {
  return (
    <div className={classNames(!isOpen ? "hidden" : "block")}>
      <div className="fixed w-full h-full left-0 top-0 bg-bgAsh modal z-40 flex items-center justify-center">
        <div className="fixed">{children}</div>
      </div>
    </div>
  );
}

