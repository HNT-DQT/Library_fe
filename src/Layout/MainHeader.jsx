import { Form, Input, Select } from 'antd';

import './Layout.css';
import logo from '../Image/logo1.jpg';
import Menu from '../Component/Menu/Menu';

const { Option } = Select;

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
      <Menu/>
    </div>
  )
}

export default MainHeader;