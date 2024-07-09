import P from "../HTMLTags/Paragraph/P";
const NoEvent = () => {
  return (
    <div className='w-full h-[70vh] my-auto flex items-center justify-center text-lg font-bold font-poppins'>
        <P text="No events found for the searched location" />
    </div>
  )
}
export default NoEvent