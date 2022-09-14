import SubMenuItem from './SubMenuItem'

import './Menu.css'

function MenuItem(props) {
  return(
    <>
      <div className='menu-item'>
        {props.name}
      </div>
      {props.item ? props.item.map((e, index) => 
        <SubMenuItem key={index} name={e} />) 
        :
        null
      }
    </>
  )
}

export default MenuItem