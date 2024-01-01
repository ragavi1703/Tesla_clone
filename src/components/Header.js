import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars)
  //console.log(cars);
  return (
    <Container>
        <a>
          <img src="/Tesla_clone/images/logo.svg" alt=""/>
        </a> 
        <Menu>
          {cars && cars.map((car,index)=>
            <a key={index} href="">{car}</a>
          )}
          
          
        </Menu>
        <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerMenu  show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>

          </CloseWrapper>
              
          {/* Because it is need in top of the burgermenu : the cross symbol*/}
        {/* <li> <a href="">Existing Inventory</a>  </li>
        <li> <a href="">used Inventory</a>  </li>
        <li> <a href="">Trade-in</a>  </li>
        <li> <a href="">Roadaster</a>  </li>
        <li> <a href="">Cybertruck</a>  </li>
        <li>  <a href="">Existing Inventory</a>  </li>
        <li>  <a href="">Existing Inventory</a>  </li>
        <li> <a href="">Existing Inventory</a>  </li> */}
                  {cars && cars.map((car,index)=>
             <li key={index}> <a href="">{car}</a></li>
          )}
          <li> <a href="">Existing Inventory</a>  </li>
        <li> <a href="">Used Inventory</a>  </li>
        <li> <a href="">Trade-in</a>  </li>
        <li> <a href="">Roadaster</a>  </li>
        <li> <a href="">Cybertruck</a>  </li>
         
        
                
              
      
            
        </BurgerMenu>
        </Container>
  )
}

export default Header
const Container=styled.div`
z-index:1;// here z-index is given bcoz the burgermenu is showed up on the container
min-height:60px;
position:fixed;
display:flex;
align-items:center;// To align the TESLA logo in the center of 60px menu bar
padding: 0 20px;
justify-content:space-between;
top:0;
left:0;
right:0;

`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;//top&bottom left&right
  text-wrap:nowrap;
}
@media (max-width:768px){
  display:none;

}

`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  
}

`

const CustomMenu=styled(MenuIcon)`//burger icon
cursor:pointer;

`
const BurgerMenu=styled.div`
position:fixed;// it stays in the top but it the side bar should also be stayed fix so it is used again
top:0;
bottom:0;
right:0;//to fix the position of beurgermenu to the right side of page
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s;
//display:flex;
//flex-direction:column;
text-align:start;//to align the lists to the left side of the burgermenu
li{//for every element in list
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }
}





`
//inside styled() it is from the import statement
const CustomClose=styled(CloseSharpIcon)`//close icon
cursor:pointer;

`

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;


`



