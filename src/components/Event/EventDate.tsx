import CalanderIcon from "../UI/icons/CalanderIcon"
import P from "../HTMLTags/Paragraph/P"

const EventDate = ({start, end, year}:{start: string, end: string, year: number}) => {
  return (
    <div className="w-full flex items-center mt-1">
      <div className="w-3 mr-2">
      <CalanderIcon />
      </div>
      <P text={start} /> - 
      <P text ={end} />, 
      <P text = {year.toString()}/>
    </div>
  )
}

export default EventDate
