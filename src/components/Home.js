import React from 'react'
import styled from "styled-components";
import Section from './Section';
function Home() {
    return (
        <div>
            <Container>
                <Section 
                  title="Model S"
                  description="Order Online For Touchless Delivery"
                  backgoundImg="model-s.jpg"
                  leftButton="Custom Order"
                  rightButton="Existing Invetory"
                />
                <Section 
                  title="Model Y"
                  description="Order Online for Touchless Delivery"
                  backgoundImg="model-y.jpg"
                  leftButton="Custom Order"
                  rightButton="Existing Invetory"
                />
                <Section 
                  title="Model 3"
                  description="Order Online For Touchless Delivery"
                  backgoundImg="model-3.jpg"
                  leftButton="Custom Order"
                  rightButton="Existing Invetory"
                />
                <Section 
                  title="Model X"
                  description="Order Online For Touchless Delivery"
                  backgoundImg="model-x.jpg"
                  leftButton="Custom Order"
                  rightButton="Existing Invetory"
                />
                <Section 
                  title="Lowest Cost Solar Panels in America"
                  description="Money-back guarantee"
                  backgoundImg="solar-panel.jpg"
                  leftButton="order now"
                  rightButton="learn more"
                />
                <Section 
                  title="Solar for New Roofs"
                  description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                  backgoundImg="solar-roof.jpg"
                  leftButton="order now"
                  rightButton="learn more"
                />
                <Section 
                  title="Accessories"
                  backgoundImg="accessories.jpg"
                  leftButton="Shop now"
                />
            </Container>
        </div>
    )
}

export default Home

const Container=styled.div`
    height:100vh;
`;