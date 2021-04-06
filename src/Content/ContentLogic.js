import React from 'react';
import {useState,useEffect} from 'react'

export const ContentLogic = ({children}) => {
    // we got props.render function which is a Sider component with props,
    // we can pass props => to function render => to Sider
    console.log(children)
    const [divDisabled,SetDivDisabled] = useState(false)
    const [number,setNumber] = useState(null)

    const someEvent = (e) => {
        setNumber(e.key)
        SetDivDisabled(true)
    }
    function givenProps (){
      return [divDisabled,number]
    }
    useEffect(()=>{
      console.log(number, divDisabled)
    },[number,divDisabled,])
    return (
      <>
        {/* we are passing someEvent function to render => to Sider,
        so Sider is rendered with a someEvent prop on click
        */}
        {children[0](someEvent)}
        {children[1](givenProps())}
      </>
    )
  }
  
