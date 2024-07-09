import { ReactNode } from "react"

const EventHeader = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full border rounded-lg overflow-hidden relative h-[160px]">
      {children}
    </div>
  )
}

export default EventHeader
