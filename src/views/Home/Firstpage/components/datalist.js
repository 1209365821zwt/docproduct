import React ,{Component} from 'react'
import './index.css'
class Datalist extends Component{
   render(){
       const {retui} =this.props
       var list=[]
         for(var keys in retui){
            list.push(retui[keys])
                }
                console.log(list)
       return (
           <div className="lists">
              {
                list.length>0 ? list.map((item,index)=>{
                    return <dl key={index}>
                          <dt>
                              <img src={item[0].img_dr}/>
                          </dt>
                          <dd>
                <h4>{item[0].type}</h4>
                <p>{item[0].title}</p>
                          </dd>
                    </dl>
                }) : null


              }
           </div>
       )
   }
}
export default Datalist