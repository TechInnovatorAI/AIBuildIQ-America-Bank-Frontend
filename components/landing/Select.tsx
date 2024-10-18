import React from 'react';
import Image from 'next/image';
import {Box} from "@/components/ui/box";
import Link from 'next/link';

interface SelectProps {
  title: string;
  description: string;
  activeButtonLetter: string;
  backgroundImage: string;
}

const buttonLetters = [
  { text: 'Innovator', link: 'innovator', title: 'Innovator', description: 'Innovator description' },
  { text: 'Services', link: 'services', title: 'Services', description: 'Services description' },
  { text: 'Products', link: 'products', title: 'Products', description: 'Products description' },
  { text: 'How It Works', link: 'how-it-works', title: 'How It Works', description: 'How It Works description' },
  { text: 'About Us', link: 'about-us', title: 'About Us', description: 'About Us description' },
];

const Select: React.FC<SelectProps> = ({ title, description, activeButtonLetter, backgroundImage }) => {
  return (
    <div className="flex flex-col">
      {/* Top bar */}
      <div className="bg-gray-100 p-4">
        <span className="font-bold">{activeButtonLetter}</span>
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
        <div className="absolute inset-0 flex items-end justify-center">
          <Box
            width="w-full sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]"
            height="h-auto min-h-[30vh] sm:h-[25vh] md:h-[20vh] lg:h-[15vh]"
            letter1={title}
            letter2={description}
            buttons={[
              { text: 'Appy here', variant: "outline" },
            ]}
          />
        </div>
        </div>

      {/* Bottom button bar */}
      <div className="bg-gray-100 w-[100%] p-4 flex justify-center mt-[10vh]">
        {buttonLetters.map((button) => (
            <Link href={ `/${button.link}`} key={button.text}>
                <button
                    key={button.text}
                    className={`px-4 py-2 ${
                    button.text === activeButtonLetter
                        ? 'border-b-2 border-blue-500'
                        : ''
                    }`}
                >
                    {button.text}
                </button>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Select;
