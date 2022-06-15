import React,{useState}from 'react'
import Menu from "./partlist"
import menucard from './menucard'; 

const screen2 = () => {
    const [menuData,setMenuData]  = useState(Menu);
  return (
    <>
    <menuData  menuData={menuData}/>
    </>
  )
}

export default screen2