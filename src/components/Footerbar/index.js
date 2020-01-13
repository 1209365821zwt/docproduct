import React,{Component} from 'react'
import './index.css'
class Footerbar extends Component{
    state={
       imgicon:[
           'https://www.y-med.com.cn/static/yimaidaGZH.8b1b452f.jpg',
           'https://www.y-med.com.cn/static/yizhiTV.2c6a2440.jpg',
           'https://www.y-med.com.cn/static/xiaomaiXCX.e1946f13.jpg',
           'https://www.y-med.com.cn/static/tice.d49854d9.png'
       ]
    }
    render(){
        const {imgicon} =this.state
        return(
            <div className="imgicon">
                {
                    imgicon.map((item,index)=>{
                        return <img key={index}
                            src={item}
                               />
                    })
                }
            </div>
        )
    }
}
export default Footerbar