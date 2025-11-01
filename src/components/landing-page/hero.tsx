import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

import Link from 'next/link'
import Image from 'next/image'
import PinMapDesign from '@/components/pin-map-design'
import SquarePinMap from '@/components/square-pin-map'

import map from '@/assets/svg/map.svg'
import pinmap1 from '@/assets/images/pin-map2.jpg'
import pinmap2 from '@/assets/images/pin-map3.jpg'
import pinmap3 from '@/assets/images/pin-map4.jpg'
import pinmap4 from '@/assets/images/pin-map5.jpg'
import pinmap5 from '@/assets/images/pin-map6.jpg'
import pinmap6 from '@/assets/images/pin-map7.jpg'
import pinmapsquare from '@/assets/images/square-pin.jpg'
import { ArrowUpRight } from 'lucide-react'

const HeroSection = () => {
  const ref = useRef(null)
  const t = useTranslations('HomePage')

  const title = t.raw('title')
  const parts = title.split(/<highlight>|<\/highlight>/g)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const mapY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const blurY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div className='overflow-x-hidden'>
      <div ref={ref} className='relative flex flex-col justify-center gap-52 items-center h-screen overflow-hidden'>
        <motion.div style={{ y: mapY }} className='absolute inset-0 bottom-40 pointer-events-none'>
          <div className='relative w-full h-full md:h-screen overflow-hidden'>
            <Image src={map} alt='map' draggable={false} loading='eager' fill className='object-contain md:object-contain object-top select-none' priority />
            
            {/* Pin map */}
            <PinMapDesign src={pinmap1} className='left-[16%] bottom-[56%]' />
            <PinMapDesign src={pinmap2} className='left-[34.5%] bottom-[35%]' />
            <SquarePinMap src={pinmapsquare} className='left-[43%] bottom-[27.5%]' />
            <PinMapDesign src={pinmap3} className='right-[38%] bottom-[52%]' />
            <PinMapDesign src={pinmap6} className='right-[15%] bottom-[65%]' />
            <PinMapDesign src={pinmap5} className='right-[2%] bottom-[61%]' />
            <PinMapDesign src={pinmap4} className='right-[5%] bottom-[51%]' />
          </div>
        </motion.div>

        <motion.div style={{ y: blurY }} className='absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[72vh] bg-[#fffefe] dark:bg-[#1a1a1a] rounded-[50%] blur-3xl pointer-events-none' />

        <div className='absolute right-[7%] top-[14%]'>
          <svg width="106" height="126" viewBox="0 0 106 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 93.7454C34.5652 143.627 69.9253 124.071 73.6696 93.7454C77.1796 65.3186 51.906 50.0689 36.4728 51.9765C21.7903 53.7913 21.2125 72.0027 34.5652 72.0027C50.8149 72.0027 58 51.9765 62.5 47.435" stroke="#FFA559" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 7" />
            <path d="M104 1.43501L59.1849 14.8259C58.2352 15.1097 58.2326 16.4538 59.1813 16.7411L69.4861 19.8622M104 1.43501L69.4861 19.8622M104 1.43501L98.5959 28.2241C98.3534 29.4263 97.0959 30.129 95.9449 29.7056L81.5524 24.4107M104 1.43501L78.5234 23.2963M69.4861 19.8622V35.935M78.5234 23.2963L69.4861 35.935M78.5234 23.2963L81.5524 24.4107M69.4861 35.935L81.5524 24.4107" stroke="#FFA559" strokeWidth="2" />
          </svg>
        </div>

        <div className='max-w-7xl mb-40 mx-auto relative flex flex-col justify-center items-center gap-6 px-4'>
          <h1 className='text-5xl font-extrabold text-center w-[1100px] leading-tight'>
            {parts.map((part: string, i: any) =>
              i % 2 === 1 ? (
                <span key={i} className='text-green-lime-dark'>
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </h1>
          <p className='max-w-[749px] text-center'>{t('description')}</p>
          <Link href={'/'} className='py-1 pl-4 pr-1 bg-orange rounded-full gap-3 flex items-center justify-center text-white font-normal'>
            {t('button')}{' '}
            <span className='bg-white w-9 h-9 text-orange rounded-full flex items-center justify-center'>
              <ArrowUpRight size={28} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
