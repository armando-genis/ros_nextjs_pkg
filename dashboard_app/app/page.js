import Image from 'next/image'
import HorizontalScrollPage from '../components/HorizontalScrollPage';
import Header from '../components/Header';
export default function Home() {
  return (
    <div>

      <HorizontalScrollPage>
        <Header />

        <div className="section bg-[#000]">

        </div>


        <div className="section bg-blue-500">

        </div>

      </HorizontalScrollPage>

    </div>
  )
}


