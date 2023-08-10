import { Parallax } from "react-parallax";


const MenuCover = ({ img, title, subtitle }) => {
    return (
        <Parallax
      blur={{ min: -75, max: 75 }}
      bgImage={img}
      bgImageAlt="the bistro boss"
      strength={-200}
    >
      <div className="hero">
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 py-24 w-9/12 m-44">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-semibold uppercase font-cinzel">
              {title}
            </h1>
            <p className="font-inter text-base font-semibold">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
    );
};

export default MenuCover;