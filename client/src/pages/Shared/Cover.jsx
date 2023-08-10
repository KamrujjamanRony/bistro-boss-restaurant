import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -75, max: 75 }}
      bgImage={img}
      bgImageAlt="the bistro boss"
      strength={-200}
    >
      <div className="hero">
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 py-36 w-9/12 mt-60 mb-32">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-7xl font-bold uppercase font-cinzel">
              {title}
            </h1>
            <p className="font-cinzel text-2xl font-semibold">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
