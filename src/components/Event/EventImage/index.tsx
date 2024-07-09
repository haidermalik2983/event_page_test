import Img from "../../HTMLTags/Image/Img"

const EventImage = ({src}:{src: string}) => {
  return (
    <Img src={src}  alt="eventImage"/>
  )
}

export default EventImage
