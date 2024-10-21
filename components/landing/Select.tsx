import React from 'react';
import Image from 'next/image';
import {Box} from "@/components/ui/box";


interface SelectProps {
  title: string;
  description: string;
  activeButtonLetter: string;
  backgroundImage: string;
}



const Select: React.FC<SelectProps> = ({ title, description, activeButtonLetter, backgroundImage }) => {
  return (
    <div className="flex flex-col mb-[5vh] ">
      {/* Top bar */}
      <div className="bg-blue-500 py-4 px-4 sm:px-8 md:px-16 lg:px-24">
        <span className="font-bold text-white text-[3.2vh]">{activeButtonLetter}</span>
      </div>

        <div className="relative">
      {/* Middle section */}
        <div className="relative w-full h-[50vh]">
          <Image
                src={backgroundImage}
                alt="header"
                layout="fill"
                objectFit="cover"
                sizes="100vw"
                className="opacity-50"
                style={{clipPath: 'inset(0 0 30% 0)'}}
              />
          <div 
            className="absolute inset-0" 
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 px-8 flex items-end justify-center">
          <Box
            width="w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]"
            height="h-auto min-h-[30vh] sm:h-[25vh] md:h-[20vh] lg:h-[15vh]"
            letter1={title}
            letter2={description}
            buttons={[
              { text: 'Appy here', variant: "default" },
            ]}
            active={activeButtonLetter}
          />
          
        </div>
        
        </div>
      
    </div>
  );
};

export default Select;
