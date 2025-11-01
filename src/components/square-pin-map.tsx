import Image, { StaticImageData } from 'next/image'

type SquarePinMapProps = {
  src: string | StaticImageData
  className?: string
}

const SquarePinMap = ({ src, className }: SquarePinMapProps) => {
  return (
    <div className={`absolute flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg
          viewBox="0 0 140 180"
          className="w-36 h-44 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pin dengan pinggiran tipis dan ujung sedikit membulat */}
          <path
            d="M20 10
               L120 10
               Q130 10, 130 20
               L130 120
               Q130 130, 120 130
               L78 130
               Q70 150, 62 130
               L20 130
               Q10 130, 10 120
               L10 20
               Q10 10, 20 10Z"
            fill="white"
            stroke="white"
            strokeWidth="1.2"
          />

          {/* Area foto, diperlebar agar lebih dekat ke tepi */}
          <defs>
            <clipPath id="photoClipSquare">
              <rect x="15" y="15" width="110" height="105" rx="8" />
            </clipPath>
          </defs>

          <foreignObject
            x="15"
            y="15"
            width="110"
            height="105"
            clipPath="url(#photoClipSquare)"
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt="pin map"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </foreignObject>
        </svg>

        {/* Bayangan lembut di bawah pin */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-emerald-500/20 rounded-full blur-md" />
      </div>
    </div>
  )
}

export default SquarePinMap
