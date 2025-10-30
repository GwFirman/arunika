import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

import Link from 'next/link'
import Image from 'next/image'
import PinMapDesign from '@/components/pin-map-design'

import map from '@/assets/svg/map.svg'
import pinmap from '@/assets/images/pinmap1.jpg'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
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
          </div>
        </motion.div>

        <motion.div style={{ y: blurY }} className='absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[72vh] bg-[#fffefe] dark:bg-[#1a1a1a] rounded-[50%] blur-3xl pointer-events-none' />

        <PinMapDesign src={pinmap} className='left-62 bottom-67' />
        <PinMapDesign src={pinmap} className='left-134 bottom-28' />
        <PinMapDesign src={pinmap} className='left-178 bottom-19' />
        <PinMapDesign src={pinmap} className='right-149 bottom-57' />
        <PinMapDesign src={pinmap} className='right-60 bottom-82' />
        <PinMapDesign src={pinmap} className='right-23 bottom-55' />
        <PinMapDesign src={pinmap} className='right-10 bottom-72' />

        <div className='max-w-7xl mb-40 mx-auto relative flex flex-col justify-center items-center gap-6 px-4'>
          <h1 className='text-5xl font-extrabold text-center w-[1200px] leading-tight'>
            {parts.map((part: string, i: any) =>
              i % 2 === 1 ? (
                <span key={i} className='text-green-lime'>
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </h1>
          <p className='max-w-[749px] text-center'>{t('description')}</p>
          <Link href={'/'} className='py-1 pl-4 pr-1 bg-orange rounded-[100px] gap-3 flex items-center justify-center text-white font-semibold'>
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

export default Hero
