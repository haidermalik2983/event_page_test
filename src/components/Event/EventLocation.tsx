import LocationIcon from "../UI/icons/LocationIcon"
import P from "../HTMLTags/Paragraph/P"

const EventLocation = ({city, state, country, distance}: {city: string, state: string, country: string, distance: number}) => {
  return (
    <div className="w-full flex items-center mt-1">
        <div className="w-3 mr-2">
        <LocationIcon />
        </div> 
        <P text={city} />,
        <P text={state}/>,
        <P text={country}/>  <span className="w-1 h-1 rounded-full bg-black inline-block mx-1"> </span><P text={`${distance} mi`} />
    </div>
  )
}

export default EventLocation
