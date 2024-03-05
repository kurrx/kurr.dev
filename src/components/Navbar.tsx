import { Fragment } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Clock from './Clock'

function Navbar() {
  return (
    <Fragment>
      <div className='navbar'>
        <div className='navbar-item'>
          <div className='navbar-text'>{import.meta.env.VITE_NICK_NAME}</div>
        </div>
        <div className='navbar-item'>
          <Clock timeZone={import.meta.env.VITE_TIME_ZONE}>
            {time => <div className='navbar-text'>{`${import.meta.env.VITE_CITY} (${time})`}</div>}
          </Clock>
        </div>
        <div className='navbar-item'>
          <div className='navbar-text'>Contacts</div>
        </div>
      </div>
      <ThemeSwitcher />
    </Fragment>
  )
}

export default Navbar
