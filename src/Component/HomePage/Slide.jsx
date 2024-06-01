

const Slide = ({image , title , description}) => {
    return (
        <div className="relative h-screen w-full">
        <img src={image} alt="Background Image" className="object-cover object-center w-full h-full" />
        {/* <img src alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-10/12 mx-auto text-center">
          <h1 className=" text-lg md:text-2xl lg:text-4xl text-white font-bold">{title}</h1>
          <p className="text-white mt-4">{description}</p>
        </div>
      </div>
    );
};

export default Slide;