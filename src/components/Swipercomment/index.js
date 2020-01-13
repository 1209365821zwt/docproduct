import React,{Component} from 'react'
import { Carousel } from 'antd';
import './index.css'
class Swipercomment extends Component{
    state={
        imglist:[
             'https://wechat.y-med.com.cn/attachment/images/8/2019/03/CRwR17RpR7BMx4bZPugfhLgRRF333L.png',
             'https://wechat.y-med.com.cn/attachment/images/8/2019/03/fUu9K612Nkyoi1YYfAqI66Kf1k16Y9.png',
             'https://wechat.y-med.com.cn/attachment/images/8/2019/03/fmJk645Mmm4ddMS25m6z56iUI5Iu6U.png'

        ]
    }
   render(){
       const {imglist} =this.state
       return (
           <div className="swipts">
          <Carousel autoplay>
    {
          imglist.map((item,index)=>{
              // eslint-disable-next-line react/jsx-key
              return <div className="carous"
                  key={index}
                     >
                  <img src={item}/>
              </div>
          })
    }
  </Carousel>,
           </div>
       )
   }
}
export default Swipercomment