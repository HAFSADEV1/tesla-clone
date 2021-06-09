import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false); 
    const cars=useSelector(selectCars);
    return (
        <div>
            <Container>
                <a href="#">
                    <img src="images/logo.svg"/>
                </a>
                <Menu>
                    {cars && cars.map((car,index) => (
                        <a key={index} href="#">{car}</a>
                    ))}
                    
                </Menu>
                <RightMenu>
                        <a href="#">SHOP</a>
                        <a href="#">TESLA ACCOUNT</a>
                        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNave show={burgerStatus}>
               
                    <ul class="navMenu">
                    <CloseWrapper><CustomClose onClick={()=>setBurgerStatus(false)}/></CloseWrapper>
                        <li><a href="#">EXISTING INVETORY</a> </li>
                        <li><a href="#">USE INVETORY</a></li>
                        <li><a href="#">TRAD-IN</a></li>
                        <li><a href="#">CYBER-TRACK</a></li>
                        <li><a href="#">ROADSTER</a></li>
                        <li><a href="#">SMI</a></li>
                        <li><a href="#">CHARGIN</a></li>
                        <li><a href="#">POWERWALL</a></li>
                        <li><a href="#">COMERCIAL ENERGY</a></li>
                        <li><a href="#">UTILITIES</a></li>
                        <li><a href="#">TEST DRIVE</a></li>
                    </ul>
                    
                </BurgerNave>
            </Container>
        </div>
    )
}

export default Header

const Container=styled.div`
  backgound-color:white;
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`;

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
 display:none;
}
`;

const RightMenu=styled.div`
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    
}
`;

const CustomMenu=styled(MenuIcon)`
 cursor:pointer;
`;

const BurgerNave=styled.div`
 position:fixed;
 top:0;
 buttom:0;
 right:0;
 background:white;
 width:250px;
 z-index:16;
 padding:20px;
 display:flex;
 flex-derction:column;
 text-align:start;
 list-style: none;
 transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
 transition: transform 0.2s;
 li{
     padding:15px 0;
     border-bottom:1px solid rgba(0,0,0,.2);
     a{
        font-weight:600;
    }
 }

`;
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`;

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`;
