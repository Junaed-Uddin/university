function HeroSection() {
  return (
    <section className="min-h-[300px] py-10 sm:py-8 px-6 relative text-white">
      {/* Parent Box */}
      <img
        src="/assets/images/footer/university.jpg"
        alt="Hero Image"
        className="absolute w-full h-full object-cover top-0 left-0 brightness-50 z-[-1]"
      />
      <div className="absolute w-full h-full object-cover top-0 left-0 bg-gradient-to-r from-blue-600/20 via-purple-500/0 to-blue-500/0" />
      <div className="relative w-[300px] h-[400px] sm:h-[300px]  border-[10px] border-secondary border-r-0 sm:ml-10 md:ml-[10vw]">
        {/* content box */}
        <div className="absolute h-[380] w-[80vw] md:w-[600px] top-[50%] p-4 -translate-y-[50%]">
          <h1 className="capitalize text-md font-semibold">
            Learn from the best
          </h1>
          <h2 className="uppercase text-2xl font-bold">
            {" "}
            The <span className="text-blue-400">best university</span> of the
            state
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut
            consequatur impedit cumque consequuntur perspiciatis nesciunt minima
          </p>
          <button className="capitalize text-xl px-4 py-2 bg-primary mt-3 rounded-md hover:shadow-lg hover:shadow-blue-600/30 transition">
            Take a tour
          </button>
        </div>
        {/*top right border */}
        <div className="absolute w-[10px] h-20 sm:h-[60px] top-0 bg-secondary right-0" />
        {/* bottom right border */}
        <div className="absolute w-[10px] h-20 sm:h-[60px] bottom-0 bg-secondary right-0" />
      </div>
    </section>
  );
}

export default HeroSection;
