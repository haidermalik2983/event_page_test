import Event from "../Event";
import { sampleEvents } from "../../Utils/constants";
import { EventType } from "../../Types/events";
import HomeHeader from "./HomeHeader";
import { Fragment, useState } from "react";
import NoEvent from "../Event/NoEvent";

const Home = () => {
  const [events, setEvents] = useState(sampleEvents);

  const noEvents = events.length === 0;
  return (
    <div className="w-full">
      
      <div>
        <HomeHeader setEvents={setEvents} />
      </div>

      <div className="w-full max-w-[1440px] flex gap-8 px-5 flex-wrap mx-auto justify-center mt-5">
        {noEvents ? (
          <NoEvent />
        ) : (
          events.map((event: EventType) => {
            return (
              <Fragment key={event.id}>
                <Event event={event} />
              </Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
