import PlusIcon from "../../UI/icons/PlusIcon"


const AddTournament = () => {
  return (
    <button
    type="button"
    className="border rounded-full border-[#C7C7C7] flex items-center px-3 py-1 w-[200px] whitespace-nowrap"
  >
    <div className="w-4 mr-2 text-base font-poppins text-black font-medium  ">
      <PlusIcon />
    </div>
    List your tournament
  </button>
  )
}

export default AddTournament;
