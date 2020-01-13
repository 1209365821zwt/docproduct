import React ,{Component}from 'react'
import Swipercomment from '@/components/Swipercomment'
import Datalist from './components/datalist'
import Miaozhao from './components/miaozhao'
import Zhenhou from './components/zhenhou'
import api from '@/api/api'
import './index.css'
class Firstpage extends Component{
    state={
        retui:{},
       yixue:[],
       xiaomiaozhao:[],
       yaoyan:[],
       diyi:[],
       dashike:[],
       toutiao:[],
       zhenhou:[
           {
               title:'心脑血管',
               cpid:150
           },
           {
               title:'内分泌系统',
               cpid:154
           },
           {
            title:'肿瘤',
            cpid:151
        },
        {
            title:'呼吸系统',
            cpid:152
        }
       ]
    }
    componentDidMount(){
        api.user.list().then(res=>{
            console.log(res.data.data)
            this.setState({
             yixue:res.data.data.yixue,
             xiaomiaozhao:res.data.data.xiaomiaozhao,
             yaoyan:res.data.data.yaoyan,
             diyi:res.data.data.diyi,
             dashike:res.data.data.dashike,
             toutiao:res.data.data.toutiao,
             retui:res.data.data.retui
            })
        })

     }
    render() {
        const {retui,xiaomiaozhao,zhenhou}=this.state
        return (
            <div className="fistpage"
                style={{height:'200px'}}
            >
             <div className="swiper">
             <Swipercomment></Swipercomment>
             <Datalist retui={retui}></Datalist>
             <Miaozhao xiaomiaozhao={xiaomiaozhao}></Miaozhao>
             <Zhenhou zhenhou={zhenhou}></Zhenhou>
             </div>
            </div>
        );
    }
}
export default Firstpage