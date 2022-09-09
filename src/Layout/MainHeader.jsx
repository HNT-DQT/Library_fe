import { Form, Input, Select } from 'antd';

import './Layout.css';
import logo from '../Image/logo1.jpg';

const { Option } = Select;

const handleOpenMenu = () => {
  document.getElementById('menu-layer').classList.remove('hidden');
}

const handleCloseMenu = (e) => {
  if (e.target === e.currentTarget)
  document.getElementById('menu-layer').classList.add('hidden');
}

function MainHeader() {
  return (
    <div className='main-header'>
      <img src={logo} alt='logo'/>
      <div className='search-box'>
        <Select
          size='large'
          defaultValue={1}
        >
          <Option value={1}>Tất cả</Option>
          <Option value={2}>Tên sách</Option>
          <Option value={3}>Tác giả</Option>
        </Select>
        <Form.Item className='form-item'>
          <Input.Search placeholder='Tìm kiếm' size='large' enterButton/>
        </Form.Item>
      </div>
      <button className='button-option' onClick={handleOpenMenu}>
        ☰
      </button>
      <div 
        id='menu-layer' 
        className='menu-layer hidden'
        onClick={handleCloseMenu}
      >
        <div className='menu'></div>
      </div>
    </div>
  )
}

export default MainHeader;