import React,{Component} from 'react'
import api from '@/api/api'
import {Icon} from 'antd'
class Zhenhou extends Component{
    state={
         ind:0,
         zhenhoulist:[]
    }
    componentDidMount(){
         api.user.miaozhao({
            ps: 4,
            hid_all: 1,
            is_bear: 1,
            cpid: 150,
            order: 'browsenum desc'
         }).then(res=>{
            this.setState({
                zhenhoulist:res.data.data
            })
         })
         document.getElementById('zhenhou').addEventListener('mouseover', function(e){
            const dom=e.target.localName;


            if(dom=='img'){
                console.log(dom)
                e.target.style.width='184px';
                e.target.style.height='100px';

            }

        });
        document.getElementById('zhenhou').addEventListener('mouseout', function(e){
            const dom=e.target.localName
            if(dom=='img'){
                // e.target.style.width='184px';
                e.target.style.height='90px';

            }

        });
    }
    handclick=(i,id)=>{
       this.setState({
           ind:i
       })
       api.user.miaozhao({
        ps: 4,
        hid_all: 1,
        is_bear: 1,
        cpid: id,
        order: 'browsenum desc'
       }).then(res=>{
           this.setState({
            zhenhoulist:res.data.data
           })
       })
    }

    render(){
        const {zhenhou} =this.props;
        const {ind,zhenhoulist} =this.state;
        console.log(zhenhoulist)
        return (
            <div className="zhenhou">
               <div className="ul">
                   {
                      zhenhou.map((item,index)=>{
                          return <span className={ind==index ? 'active' :''}
                              key={item.title}
                              onClick={this.handclick.bind(this,index,item.cpid)}
                                 >
                               {item.title}
                          </span>
                      })
                   }
               </div>
               <div className="zhenhoudls"
                   id="zhenhou"
               >
                   {
                       zhenhoulist.map((item)=>{

                        return <dl key={item.title}>
                            <dt>
                                <img src={item.img_dr}/>
                            </dt>
                            <dd>
                       <h4>{item.title}</h4>
                       <b>{item.hname}</b>
                       <span>{item.tname}</span>
                       <span>{item.zhiwu}</span>
                       <span>{item.lcid}</span>
                       <div className="bofang">
                       <span>播放量{item.browsenum}</span>
                       <span>有用{item.best_num}</span>


                       </div>
                       <div className="show">
<Icon className="icon"
    type="step-forward"
/>
                       </div>
                            </dd>

                        </dl>

                       })
                   }
               </div>
            </div>
        )
    }
}
export default Zhenhou