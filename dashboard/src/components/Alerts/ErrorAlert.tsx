import React from 'react'
import { classNames } from '../../helpers/classNames'

interface AlertProp {
  icon?: any
  message?: string
  buttonChild?: string
  status?: string
}

export const ErrorAlert = ({message}: any) => {
  return (
    <div className="text-red-600 bg-error text-center mt-5 py-2 text-sm rounded-lg">
      {message}
    </div>
  )
}

const AlertMessage = ({ message, icon, status, buttonChild }: AlertProp) => {
  return (
    <div
      className={classNames(
        status === 'review' && 'bg-review',
        `flex justify-between items-center w-full rounded-lg p-4 border-alertBorder border mb-4`,
      )}
    >
      <div className="flex justify-center items-center space-x-4">
        <p>{message}</p>
        <div className="border-buttoncolor border-2 rounded-lg px-3 py-1">
          {buttonChild}
        </div>
      </div>

      {/* <Image src="/pending_actions.svg" alt="review" className="" width={50} height={50}/> */}

      {status && <img src={icon} alt="review" width={50} height={50} />}
    </div>
  )
}



export default AlertMessage
