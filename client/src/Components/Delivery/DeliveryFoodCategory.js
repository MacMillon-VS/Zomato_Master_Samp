import React from "react";

const DeliverySmCard = () => {
    return (
        <>
           <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56">
               <div className="w-full h-24">
                   <img
                   src="https://b.zmtcdn.com/data/pictures/3/18997523/1434f5fd4db9d9d412f6334e9922d3c7_o2_featured_v2.jpg?output-format=webp"
                   alt="Burger"
                      className="w-full h-full object-cover rounded-t-md"
                   />
               </div>
               <div>
                   <h3 className="text-sm my-1 text-center font-light">Burger</h3>
               </div>
           </div>
        </>
    );
};

const DeliveryLgCard = () => {
    return (
        <>
          <div className="hidden lg:block w-64 h-48 my-5">
               <div className="w-full h-full">
                   <img
                   src="https://b.zmtcdn.com/data/pictures/3/18997523/1434f5fd4db9d9d412f6334e9922d3c7_o2_featured_v2.jpg?output-format=webp"
                   alt="Burger"
                      className="w-full h-full object-cover rounded-md shadow-lg"
                   />
               </div>
               <div>
                   <h3 className="text-xl my-1 font-medium">Burger</h3>
               </div>
           </div>
        </>
    );
};

const DeliveryFoodCategory = () => {
    return (
        <>
           <DeliverySmCard />
           <DeliveryLgCard />
        </>
    );
};
export default DeliveryFoodCategory;
