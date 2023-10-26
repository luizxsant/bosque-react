import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/cafe.jpg')] md:h-[68vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Venha nos conhecer</h1>
        <p className="text-white xl:text-xl">
          Desde sempre trazendo saciedade e carinho para todos os nossos clientes
        </p>
        
        <button className="bg-pad text-white rounded-md py-3 px-6">Peça agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      
      
      </div>
    
  );
};

export default Offer;
