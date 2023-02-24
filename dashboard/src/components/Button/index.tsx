import React from 'react'

interface BtnProp {
  child: any
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: any
  icon?: any
}

export default function Button({
  child,
  type = 'button',
  onClick,
  className,
  icon,
}: BtnProp) {
  return (
    <button className={className} onClick={onClick}>
      <div className="flex justify-center items-center">
        {icon && (
          <img
            src={icon}
            alt="notify"
            className="pr-3"
          />
        )}{' '}
        {child}
      </div>
    </button>
  )
}
