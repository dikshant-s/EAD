import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className='header'>
        <img 
        width={100}
        src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" alt="#" />

        <form action="">
          <div className='input'>
          <input type="search" placeholder='Search anything' /> 
          </div>
        </form>
        <span>
            <span>Hello User </span>
            <br />
            <b>Accounts & Lists</b>
        </span>
        <span>
            <span>Return</span>
            <br />
            <b>&Orders</b>
        </span>
      </header>
    </div>
  )
}

export default Header
