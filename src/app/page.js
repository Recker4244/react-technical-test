import Image from 'next/image'
import './page.module.css';
import ReviewCard from './components/ReviewCard';

export default function ReviewPage() {
  return (
    <div className='bg-current relative w-full h-screen'>
      <div className='absolute bottom-0 -left-72'>
        <Image src="/graphics/Accent.svg" alt="Background Image" width={500}
          height={500} />
      </div>
      <div className='absolute top-0 left-2/3'>
        <Image src="/graphics/Accent.svg" alt="Background Image" width={500}
          height={500} />

      </div>
      <div className='relative h-full flex flex flex-col items-center justify-center'>
        <div className='flex flex-row flex-wrap justify-center'>
          <ReviewCard
            stars={4}
            review={"“Nice Website”"}
            name={"Brittan Wheeler"}
            designation={"Consultant"}
            image={"/images/Brittan_Wheeler.png"} />
          <ReviewCard
            stars={3}
            review={"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it is a good channel for us.”"}
            name={"Alexa Popen"}
            designation={"CEO"}
            image={"/images/Alexa_Popen.png"} />
          <ReviewCard
            stars={5}
            review={"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it is a good channel for us.”"}
            name={"Leslie Alexander"}
            designation={"Founder"}
            image={"/images/Leslie_Alexander.png"} />
        </div>
        <div className='flex flex-row justify-center'>
          <ReviewCard
            stars={2}
            review={"Nice Website"}
            name={"Brittan Wheeler"}
            designation={"Consultant"}
            image={"/images/Brittan_Wheeler.png"} />
          <ReviewCard
            stars={5}
            review={"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it is a good channel for us.”"}
            name={"Alexa Popen"}
            designation={"CEO"}
            image={"/images/Alexa_Popen.png"} />
          <ReviewCard
            stars={5}
            review={"“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change & it is a good channel for us.”"}
            name={"Leslie Alexander"}
            designation={"Founder"}
            image={"/images/Leslie_Alexander.png"} />
        </div>
      </div>

    </div>
  )
}
