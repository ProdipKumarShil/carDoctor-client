import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative ">
          <img src={person} className=" h-[373px] w-[90%]  object-cover rounded-lg " />
          <img src={parts} className="absolute top-[80%] md:top-[65%] border-8 border-white -right-4 md:right-0  w-[50%] object-cover rounded-lg " />
        </div>
        <div className='space-y-[30px] px-4 mt-8 md:mt-0'>
          <h1 className='text-xl font-bold text-[#FF3811]'>About us</h1>
          <h1 className='text-[45px] font-bold space-y-0'>We are qualified & of experience in this field</h1>
          <p className='text-[#737373] text-[16px] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> 
          <p className='text-[#737373] text-[16px] '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className='my-btn-primary btn'>Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;