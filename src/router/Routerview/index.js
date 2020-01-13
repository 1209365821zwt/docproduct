import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
function Routerview(props){
  const {routes} =props;
  const RouterArr=routes && routes.filter(item=>!item.redirect);
  const RedirectArr=routes && routes.filter(item=>item.redirect).map((val,index)=>{
  return <Redirect from={val.path}
      key={index}
      to={val.redirect}
         ></Redirect>});
  return (
    <Switch>
        {
            RouterArr.map((item,index)=>{
                return <Route key={index}
                    path={item.path}
                    render={(props)=>{
                    return <item.component {...props}
                        child={item.children}
                           ></item.component>
                }}
                       ></Route>
            }).concat(RedirectArr)
        }
    </Switch>
  )
}

export default Routerview;