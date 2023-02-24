import React from 'react'
import Dropdown from '../Dropdown'
import logo from '../../assets/logo.svg?url'
import overview from '../../assets/over.svg?url'
import repayments from '../../assets/credit_score.svg?url'
import customers from '../../assets/group (1).svg?url'
import loan from '../../assets/paid.svg?url'
import defaults from '../../assets/flag.svg?url'
import report from '../../assets/lab_profile.svg?url'


const Menu = [
    {
        icon: overview,
        path: '/overview',
        name: 'Overview',
    },
    {
       icon: customers,
        path: '/registered-users',
        name: 'Registered Users',
          subNav: [
            {
                title: 'Customers',
                path: '/registered-users/customers'
            },
            {
                title: 'Gate Keeper',
                path: '/registered-users/gatekeeper'
            },
        ]
    },
     {
        icon: repayments,
        path: '/repayments',
        name: 'Repayments',
    },
     {
        icon: loan,
        path: '/loans',
        name: 'Loans',
    },
      {
        icon: defaults,
        path: '/defaulters',
        name: 'Defaulters',
    },
      {
        icon: report,
        path: '/report',
        name: 'Report',
    },
]


const Siderbar = () => {
  return (
     <div className="bg-white border-r-2 border-borderAsh pt-8 px-8 h-screen fixed top-0 left-0 w-310 font-body">
      <div className="">
        <img src={logo} alt="logo" />
         <h1 className="text-[#808080] text-xs font-normal mt-14 mb-6">QUICK MENU</h1>
        <div className="grid gap-6">
          {Menu && Menu.map((item, index) => (
           <Dropdown key={index} item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Siderbar