import img6 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img1 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg " />
        <div className="bg-gradient-to-r from-green-800">
          <div className="absolute ml-6  text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
            <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
            <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            <div className="flex gap-6">
              <button className="btn my-btn-primary">Discover More</button>
              <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
            <a href="#slide4" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg" />
        <div className="absolute ml-6 text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
          <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <div className="flex gap-6">
            <button className="btn my-btn-primary">Discover More</button>
            <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide1" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg" />
        <div className="absolute ml-6 text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
          <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <div className="flex gap-6">
            <button className="btn my-btn-primary">Discover More</button>
            <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide2" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg" />
        <div className="absolute ml-6 text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
          <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <div className="flex gap-6">
            <button className="btn my-btn-primary">Discover More</button>
            <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide3" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg" />
        <div className="absolute ml-6 text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
          <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <div className="flex gap-6">
            <button className="btn my-btn-primary">Discover More</button>
            <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide4" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full filter brightness-50 h-[100vh] object-cover rounded-lg" />
        <div className="absolute ml-6 text-white  gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px] space-y-[30px]">
          <h1 className='text-6xl  font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-xl'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
          <div className="flex gap-6">
            <button className="btn my-btn-primary">Discover More</button>
            <button className="btn my-btn-tertiary bg-opacity-0 text-black hover:text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide5" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;