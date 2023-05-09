import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const MyImage = ({
  alt,
  className,
  src,
}: {
  alt: string
  className: string
  src: string
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <img
        alt={alt}
        className={className}
        src={src}
        onClick={() => setOpen(true)}
      />
      <Lightbox
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .6)' } }}
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  )
}

export default MyImage
