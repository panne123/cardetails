import React,{useState}from 'react'
import Menu from "./partlist"
import Menucard from "./Menucard"
import "./style.css";

const App = () => {
    const [menuData,setMenuData]  = useState(Menu);

    
  return (
    <>
     <header className='head'>
      <div className='image'>
      <img src='./car.jpg' alt='davi'  style={{width: "100%"}}></img>
      <div className='text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
           at consectetur totam voluptatibus quibusdam iusto. <br></br>
           Accusamus quas, soluta ipsam autem eius <br></br>
           necessitatibus fugiat in .</p> 
           <button><a href="#david">START</a></button>
</div>
      </div>

    </header>


    <Menucard   menuData={menuData}/>
    </>
  )
}

export default App