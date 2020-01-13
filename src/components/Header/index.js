import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom'
import './index.css'
import Dropdownlist from './components/Dropdown'
class Headercomment extends Component{
    state={
        navlist:[
            {
                path:'/home/Firstpage',
                title:'首页'
            },
            {
                path:'/home/Docheadmost',
                title:'诊后第一课'
            },
            {
                path:'/home/Clinic',
                title:'医学最前沿'
            },
            {
                path:'/home/Aboutus',
                title:'关于我们'
            }
        ],
        ind:0
    }
    handclick(i){
       this.setState({
           ind:i
       })
    }
  render(){
      const {navlist,ind} =this.state;
      return (
          <div className="headercomment">
                <div className="icon">
                     <img src="https://www.y-med.com.cn/static/logo.8714365e.png" />>
                </div>
              <div className="headers">
                  {
                 navlist.map((item,index)=>{
                 return <NavLink className={ind==index ? 'active' : ''}
                     key={index}
                     onClick={this.handclick.bind(this,index)}
                     to={item.path}
                        >{item.title}</NavLink>
                 })
             }
              </div>
              <div className="form">
                  <input className="ipt"
                      placeholder="输入关键字"
                  ></input>
                  <button className="btn">搜索</button>
              </div>
           <div className="dropdown">
              <Dropdownlist></Dropdownlist>
           </div>
          </div>
      )
  }
}
export default withRouter(Headercomment)