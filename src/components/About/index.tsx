import { CheckmarkCircleOutline } from 'react-ionicons'
import  wallpaper from '../../assets/images/wallpaper.jpg'

const About = () => {
  return (
    <div className="w-full md:px-  [200px] px-8 flex md:flex-row flex-col items-center justify-between py-10   md:gap-0 gap-16">
        <div className="md:w-[700px] md:h-[700px] w-[505px] h-[530px] bg-no-repeat bg-cover relative  plane-mask"
        style={{ backgroundImage: `url(${wallpaper})` }}
        />
        <div className="flex flex-col md:w-[48%] w-full md:px-0 px-8">
            <span className="text-[15px] text-blue-600 font-semibold">ABOUT US</span>

            <span className="text-[30px] font-medium text-gray-700 mt-1">
              We Are Here To Bring You All The <br /> Comfort And Pleasure 
            </span>
            <p className="text-gray-600 max-w-[650px] leading-7 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem rerum odio, nulla cum voluptatibus placeat nemo vel accusantium cumque nam rem fugit quas ipsum sit nesciunt facere officiis velit.
            </p>
            <div className="flex flex-col gap-3 mt-5">
                <div className="flex items-center gap-3">
                    <CheckmarkCircleOutline color="#60a5fa" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckmarkCircleOutline color="#60a5fa" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckmarkCircleOutline color="#60a5fa" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
            </div>
            <button className="bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md">Discover More</button>
        </div>
    </div>
  )
}

export default About