import Image, { StaticImageData } from "next/image";

type PinMapDesignProps = {
  src: string | StaticImageData;
  className?: string;
};

const PinMapDesign = ({ src, className }: PinMapDesignProps) => {
  return (
    <div className={`absolute flex items-center justify-center ${className}`}>
      <div className="relative h-20 w-14">
        <svg
          viewBox="0 0 100 140"
          className="h-full w-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* pin shape */}
          <path
            d="M50 10
               C30 10, 15 30, 15 50
               C15 75, 35 100, 48 122
               Q50 128, 52 122
               C65 100, 85 75, 85 50
               C85 30, 70 10, 50 10Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />

          {/* clip path untuk foto lingkaran sempurna */}
          <defs>
            <clipPath id="photoClip">
              <circle cx="50" cy="50" r="25" />
            </clipPath>
          </defs>

          {/* container foto */}
          <foreignObject
            x="25"
            y="25"
            width="50"
            height="50"
            clipPath="url(#photoClip)"
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt="pinmap"
                fill
                className="object-cover"
                sizes="50px"
              />
            </div>
          </foreignObject>
        </svg>

        {/* efek glow halus */}
        <div className="absolute bottom-1 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-green-lime-dark/20 blur-md" />
      </div>
    </div>
  );
};

export default PinMapDesign;