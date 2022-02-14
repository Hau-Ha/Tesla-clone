import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="Existing inventory"
      />
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="lear more"
      />
      <Section
        title="Solar for New Roofs"
        description="Produve Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        BtnTextLeft="Custom order"
        BtnTextRight="lear more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        BtnTextLeft="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
