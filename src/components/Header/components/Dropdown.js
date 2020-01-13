import React,{Component} from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.css'
class Dropdownlist extends Component{
    state={
        navlink:[
            {
              path:'/Mine',
              title:'个人中心'
            },
            {
                path:'/login',
                title:'登录'
            }
        ],
      display:false
    }
   render(){
       const { navlink } =this.state
    const menu = (
        <Menu>
            {
            navlink.map((item)=>{
                return <Menu.Item key={item.title}>
                <NavLink to={item.path}>
                  {item.title}
                </NavLink>
                </Menu.Item>
            })
            }
        </Menu>
      );

       return(
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link"
            href="#"
        >
          用户 <Icon type="down" />
        </a>
      </Dropdown>
       )
   }
}
export default Dropdownlist