import { ReactNode } from 'react'

const EventCard = ({children}:{children: ReactNode}) => {
  return (
    <div className='w-full max-w-[340px] lg:max-w-[358px]'>
    {children}   
    </div>
  )
}

export default EventCard
