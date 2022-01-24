import React from "react";


import Navbar from "../Components/Navbar";
import Delivery from "../Components/Delivery/index";
import FoodTab from "../Components/FoodTab/index";


const HomeLayout = (props) => {

    return (
        <>
        <div className="container mx-auto">
          <Navbar />
            <FoodTab />
          <Delivery/>

          {props.children}
        </div>
        </>
    )
};

export default HomeLayout;
