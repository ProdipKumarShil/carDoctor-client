import img6 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img1 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide4" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide1" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide2" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide3" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide4" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full h-[100vh] object-cover rounded-lg" />
        <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-12 bottom-[20px]">
          <a href="#slide5" className="btn bg-white bg-opacity-30 hover:bg-opacity-30 border-none text-white btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;