import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
    
  return (
    <Wrap bgImage={backgroundImg}> 
    <Fade bottom>
        <ItemText>
           
            <h1>
                {title}
            </h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
   <Buttons>
    <Fade bottom>
    <ButtonGroup>
        <LeftButton>
        {leftBtnText}
        </LeftButton>
        {rightBtnText &&  <RightButton>
        {rightBtnText}

        </RightButton>}
       
    </ButtonGroup>
    </Fade>
    <DownArrow src='/Tesla_clone/images/down-arrow.svg' />
    </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
width: 100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/Images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;//vertical
align-items:center;//horizontal
background-image: ${props => `url("/Tesla_clone/images/${props.bgImage}")`};

`
const ItemText=styled.div`

padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`

display:flex;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}


`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
justify-content:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
display:flex;
align-items:center;
cursor:pointer;
margin:8px;




`
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;

`

const DownArrow=styled.img`
//margin-top:20px; to maintain the space between the above buttons
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;// To avoid the scroll bar

`
const Buttons=styled.div`
// All the buttons are grouped into a single component Buttons to avoid the justify content space between problem

`