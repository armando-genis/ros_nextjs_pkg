import Image from 'next/image'
import HorizontalScrollPage from '../components/HorizontalScrollPage';
import Header from '../components/Header';
import Dashboard_ros from '../components/Dashboard_ros';

export default function Home() {
  return (
    <div className='plus-jakarta-font'>

      <HorizontalScrollPage>
        <Header />

        <div className="section bg-[#000] z-[1] relative">
          <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] inline-flex items-center justify-center z-[1]">

            {/* <div className="absolute w-[10rem] h-[10rem] bg-blue-600 blur-3xl right-1 bottom-1"></div> */}
            <div className="absolute w-[20rem] h-[20rem] bg-blue-600 blur-3xl top-1 left-1"></div>

            <div className="absolute w-[20rem] h-[20rem] bg-[#73ff00] blur-3xl bottom-1 right-1"></div>

          </div>

          <Dashboard_ros />

        </div>


        {/* <div className="section bg-[#000] z-[2]">

        </div> */}

      </HorizontalScrollPage>

    </div>
  )
}


