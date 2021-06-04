import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,backgoundImg,leftButton,rightButton}) {
    return (
        <div>
            <Wrap bgImage={backgoundImg}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </ItemText>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>{leftButton}</LeftButton>
                            {rightButton &&   <RightButton>{rightButton}</RightButton>}
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg" />
                    </Buttons>
                </Fade>
            </Wrap>
        </div>
    )
}

export default Section

const Wrap=styled.div`
  width=100vw;
  height:100vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  display:flex;
  background-image:url('images/model-s.jpg');
  flex-direction:column;
  justify-content:space-between;  //vertical
  align-items:center; //horizontal
  background-image:${props => `url("/images/${props.bgImage}")`};
`;

const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`;

const ButtonGroup=styled.div`
    display:flex;
    margin-buttom:35px;
    @media(max-width:768px){
        flex-direction:column;
    }
`;

const LeftButton=styled.div`
 background-color:rgba(23,26,32,0.8);
 height:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:15px;
 cursor:pointer;
 margin:8px;
`;

const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`;

const DownArrow=styled.img`
height:40px;
cursor:pointer;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`;

const Buttons=styled.div`
 
`;