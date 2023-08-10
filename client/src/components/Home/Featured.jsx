import img from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured mb-20 bg-fixed">
      <div className="p-20 max-w-screen-xl mx-auto">
      <div className="md:w-1/4 mx-auto mb-8 text-center">
        <p className="text-yellow-500 italic mb-2">--- Check it out ---</p>
        <h3 className="text-white text-3xl uppercase border-y-4 border-white p-3 font-semibold">
          from our menu
        </h3>
      </div>

      <div className="card lg:card-side">
          <img
          className="max-w-xl"
            src={img}
            alt="Album"
          />
        <div className="card-body text-white">
          <h2 className="card-title text-xl">July 27, 2023</h2>
          <h2 className="text-2xl uppercase">where can i get some?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tenetur culpa eius corrupti blanditiis, autem impedit dicta commodi temporibus rerum aliquam quae ut magnam. Quisquam blanditiis placeat reiciendis. Doloribus, obcaecati.</p>
          <div className="card-actions justify-start">
          <button className="btn text-white border-white btn-outline border-0 border-b-4">view full menu</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
