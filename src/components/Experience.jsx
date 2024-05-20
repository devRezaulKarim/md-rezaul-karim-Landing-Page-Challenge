import experience from "../assets/experience.png";
import Button from "./Button";
const Experience = () => {
  return (
    <div
      style={{ backgroundImage: `url(${experience})` }}
      className="bg-[#fed29c] bg-contain bg-right bg-no-repeat lg:h-[316px] xl:h-[616px]"
    >
      <div className="max-w-[1321px] mx-auto flex items-center h-full">
        <div className="w-[500px]">
          <h3 className="text-4xl leading-10 font-bold font-josefin">
            Experience clear vision with OptiChroma Vision Frames
          </h3>
          <p className="mt-5 mb-10 leading-8 font-josefin text-lg">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That&#39;s why we&#39;ve designed a collection of
            frames that prioritize both form and function. Our team of experts
            is dedicated to helping you find the perfect pair of glasses.
          </p>
          <Button>About Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;