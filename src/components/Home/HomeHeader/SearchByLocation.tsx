import Search from "../../UI/icons/Search";
import LocationSearch from "../../UI/icons/locationSearch";
import { EventType } from "../../../Types/events";
import { ChangeEvent, FC, useState } from "react";
import { sampleEvents } from "../../../Utils/constants";
import Input from "../../HTMLTags/Inputs/Input";
import Select from "../../HTMLTags/Selects/Select";
import { milesOptions } from "../../../Utils/constants";

interface Props {
  setEvents: (events: EventType[]) => void;
}
const SearchByLocation:FC<Props> = ({setEvents}) => {

  const [search, setSearch] = useState("");
  const [distance, setDistance] = useState<number>(-1);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearch(search);
        if (e.target.value !== "") {
          if (distance === -1) {
            const filteredEvents = sampleEvents.filter(
              (event) =>
                (event.eventCity
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                  event.eventCountry
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  event.eventState
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())) 
            );
            setEvents(filteredEvents);
          } else {
            const filteredEvents = sampleEvents.filter(
              (event) =>
                (event.eventCity
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                  event.eventCountry
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  event.eventState
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())) &&
                event.distance <= distance
            );
            setEvents(filteredEvents);
          }
        } else {
          if (distance === -1) {
            setEvents(sampleEvents);
          } else {
            const filteredEvents = sampleEvents.filter(
              (event) => event.distance <= distance
            );
            setEvents(filteredEvents);
          }
        }
      };
    
      const handleDistanceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const distance = parseInt(e.target.value);
        setDistance(distance);
        if (search === "") {
          if (distance === -1) {
            setEvents(sampleEvents);
          } else {
            const filteredEvents = sampleEvents.filter(
              (event) => event.distance <= distance
            );
            setEvents(filteredEvents);
          }
        } else {
          if (distance === -1) {
            const filteredEvents = sampleEvents.filter(
              (event) =>
                event.eventCity
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                event.eventCountry
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                event.eventState
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            );
            setEvents(filteredEvents);
          } else {
            const filteredEvents = sampleEvents.filter(
              (event) =>
                event.distance <= distance &&
                (event.eventCity
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                  event.eventCountry
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  event.eventState
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()))
            );
            setEvents(filteredEvents);
          }
        }
      };
  return (
    <div className="flex items-center gap-4 w-full lg:w-auto xl:w-[440px] flex-wrap sm:flex-nowrap">
    <div className="bg-[#F2F2F2] w-full xl:max-w-[340px] relative rounded-full overflow-hidden">
      <Input
        onChange={handleSearchChange}
        className="bg-[#F2F2F2] w-full pl-9 pr-4 py-2 rounded-full outline-none placeholder:text-[#808080]"
        type="text"
        placeHolder="Search by loaction"
      />
      <div className="absolute w-3 left-4 top-3">
        <LocationSearch />
      </div>

      <div className="w-8 h-8 rounded-full overflow-hidden absolute top-1 right-1 bg-[#000] flex items-center justify-center cursor-pointer">
        <div className="w-4">
          <Search />
        </div>
      </div>
    </div>

    <Select
      onChange={handleDistanceChange}
      options={milesOptions}
      name="miles"
      id="miles"
      selectClassName="bg-transparent outline-none cursor-pointer w-[90px] text-base text-[#808080] font-poppins"
      optionClassName="bg-white border-none"
    />
  </div>
  )
}

export default SearchByLocation
