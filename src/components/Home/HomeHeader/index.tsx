import { FC } from "react";
import SearchByLocation from "./SearchByLocation"
import { EventType } from "../../../Types/events";
import Filters from "./Filters";
import AddTournament from "./AddTournament";

interface Props {
    setEvents: (events: EventType[]) => void;
  
  }

const HomeHeader:FC<Props> = ({setEvents}) => {

  return (
    <div className="w-full navtabShadow">
       
       
       <div className="w-full max-w-[1340px] mx-auto gap-4 flex-wrap lg:flex-nowrap px-5 py-5 flex items-center justify-between ">
        <SearchByLocation setEvents={setEvents} />
        <div
          className="flex items-center gap-4 xl:gap-12 cursor-pointer whitespace-nowrap flex-wrap sm:flex-nowrap w-full
          sm:w-auto justify-between sm:justify-center"
        >
        <Filters />
        <AddTournament />
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
