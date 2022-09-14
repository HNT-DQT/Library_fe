
import MenuItem from './MenuItem'
import './Menu.css'

const MenuList = [{
  name: 'Browse',
  item: ['Subject', 'Trending', 'Library Explorer', 'Lists']
},
{
  name: 'More',
  item: ['Add a Book', 'Developer Center', 'Help & Support']
}]

function Menu() {
  const handleOpenMenu = () => {
    document.getElementById('menu-layer').classList.add('show');
    document.querySelector('#menu-layer .menu').classList.add('active');
  }
  
  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById('menu-layer').classList.remove('show');
      document.querySelector('#menu-layer .menu').classList.remove('active');
    }
  }

  return(
    <>
      <button className='button-option' onClick={handleOpenMenu}>
        ☰
      </button>
      <div 
        id='menu-layer' 
        className='menu-layer'
        onClick={handleCloseMenu}
      >
        <div className='menu'>
          <MenuItem name='My The Library' />
          <div className='login-box'>
            <button className='log-in-btn'>Đăng nhập</button>
            <button className='sign-up-btn'>Đăng ký</button>
          </div>
          {MenuList.map((e, index) =>
            <MenuItem key={index} name={e.name} item={e.item} />
          )}
        </div>
      </div>
    </>
  )
}

export default Menu