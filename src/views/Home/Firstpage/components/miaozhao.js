import React,{Component} from 'react'

class Miaozhao extends Component{

    render(){
        const {xiaomiaozhao} =this.props
        return (
            <div className="miaozhao">
                <div className="title">
                     <h1>三分钟小妙招</h1>
              <span>谣言终结</span>
                </div>
             <div className="dls">
                 {
                     xiaomiaozhao.length>0 ? xiaomiaozhao.map((item)=>{
                         return <dl key={item.id}>
                             <dt>
                                 <img src={item.img_dr}/>
                             </dt>
                             <dd>
                     <h4>{item.title}</h4>
                     <span>播放{item.browsenum}</span>
                     <span>有用{item.best_num}</span>
                             </dd>
                         </dl>
                     }) : null
                 }
             </div>
            </div>
        )
    }
}
export default Miaozhao