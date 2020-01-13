import React ,{Component}from 'react'
import {connect} from 'react-redux'
class Aboutus extends Component{
    render() {
        return (
            <div>
                about
            </div>
        );
    }
}
export default connect((state)=>{
  return {
     list: state.list
  }
},(dispatch)=>{
   return {
      getlist(obj){
          dispatch({type:'LIST',obj})
      }
   }
})(Aboutus)