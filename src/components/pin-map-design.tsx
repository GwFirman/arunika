import Image, { StaticImageData } from 'next/image'

type PinMapDesignProps = {
  src: string | StaticImageData
  className?: string
}

const PinMapDesign = ({ src, className }: PinMapDesignProps) => {
  return (
    <div className={`flex absolute items-center justify-center ${className}`}>
      <div className='w-8 h-16 relative'>
        <svg viewBox='0 0 100 140' className='w-full h-full drop-shadow-lg'>
          <path d='M 50 10 C 30 10, 15 25, 15 45 C 15 65, 30 80, 50 120 C 70 80, 85 65, 85 45 C 85 25, 70 10, 50 10 Z' fill='white' stroke='white' strokeWidth='3' />
          <defs>
            <clipPath id='photoClip'>
              <circle cx='50' cy='45' r='20' />
            </clipPath>
          </defs>

          <foreignObject x='30' y='25' width='40' height='40' clipPath='url(#photoClip)'>
            <div className='w-full h-full flex items-center justify-center overflow-hidden rounded-full'>
              <Image src={src} alt='pinmap' width={40} height={40} className='object-cover h-12' />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}

export default PinMapDesign
