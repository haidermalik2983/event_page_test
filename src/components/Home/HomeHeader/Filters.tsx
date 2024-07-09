import Select from "../../HTMLTags/Selects/Select"
import { genderOptions, SkillLevelOptions } from "../../../Utils/constants"
import MoreFilters from "./MoreFilters"

const Filters = () => {
  return (
    <>
        <Select onChange={()=>{}} name="gender" id="gender" selectClassName="bg-transparent outline-none cursor-pointer relative" optionClassName="bg-white border-none" options={genderOptions}/>
        <Select onChange={()=>{}} name="skill" id="skill" selectClassName="bg-transparent outline-none cursor-pointer w-[110px] text-base text-[#707070] font-poppins" optionClassName="bg-white border-none" options={SkillLevelOptions}/>
        <MoreFilters /> 
          
          </>
  )
}

export default Filters
