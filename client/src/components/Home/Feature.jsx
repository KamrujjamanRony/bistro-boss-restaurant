import img from '../../assets/home/chef-service.jpg';

const Feature = () => {
    return (
        <div className='relative mb-20'>
            <img src={img} alt="featured" className='h-full' />
            <div className='w-3/4 mx-auto px-40 py-20 text-center absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 bg-white'>
                <h1 className='font-cinzel text-4xl uppercase mb-4'>bistro boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quo quaerat autem et pariatur, perspiciatis hic quis architecto consequuntur saepe itaque est, facilis laborum incidunt iste dolores! Quis, in voluptatem.</p>
            </div>
        </div>
    );
};

export default Feature;