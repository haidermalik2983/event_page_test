import MoreFilter from "../../UI/icons/MoreFilter"

const MoreFilters = () => {
  return (
    <div className="flex items-center gap-2">
    <div className="w-4">
      <MoreFilter />
    </div>

    <span className="text-medium text-base text-black font-poppins">
      More filters(2)
    </span>
  </div>
  )
}

export default MoreFilters
