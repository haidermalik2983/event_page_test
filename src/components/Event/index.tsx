import { FC } from 'react'
import EventCard from './EventCard'
import EventImage from './EventImage'
import { EventType } from '../../Types/events'
import EventHeader from './EventHeader'
import NumberOfPlayersTag from './NumberOfPlayersTag'
import EventHeading from './EventHeading'
import EventDate from './EventDate'
import EventLocation from './EventLocation'

interface Props {
  event: EventType
}

const Event: FC<Props> = ({event }) => {
  return (
    <EventCard>
        <EventHeader>
        <EventImage src={event.imageSrc} />
        <div className='absolute bottom-0 right-0 px-7 py-0.5 bg-[#cb5660] rounded-tl-lg text-white'>
          <p>Event full</p>
        </div>
        </EventHeader>
         <NumberOfPlayersTag numberOfPlayers={event.numberOfPlayers} />
        <EventHeading heading={event.eventHeading} />
        <EventDate start={event.eventStart} end={event.eventEnd} year={event.eventYear} />
        <EventLocation city={event.eventCity} state={event.eventState} country={event.eventCountry} distance = {event.distance} />



    </EventCard>
  )
}

export default Event
