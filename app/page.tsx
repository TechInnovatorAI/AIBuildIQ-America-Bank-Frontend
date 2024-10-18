import Select from "@/components/landing/Select";
import HomeImage from "@/public/assets/header/home.jpg";

export default function Home() {
  return (
    <>
      <Select 
        title="Home"
        description="Home description"
        activeButtonLetter="Home"
        backgroundImage={HomeImage.src}      
      />
    </>
  );
}
