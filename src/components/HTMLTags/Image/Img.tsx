import  { FC } from 'react'

interface Props {
src:string,
alt:string,
className?:string,
}

const Img: FC<Props> = ({src, alt,  className}) => {
  return (
    <img src={src} alt={alt} className= {className}/>
  )
}

export default Img
