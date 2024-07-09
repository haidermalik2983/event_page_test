import H1 from "../HTMLTags/Headings/H1"

const EventHeading = ({heading}: {heading: string}) => {
  return (
    <div className="w-full max-w-[340px]">
    <H1 weight={"bold"} textSize = {"base"} text={heading} />
    </div>
  )
}

export default EventHeading
