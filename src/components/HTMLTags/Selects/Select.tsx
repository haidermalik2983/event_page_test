import { ChangeEvent, FC } from "react"
import { SelectOptionsType } from "../../../Types/events"


interface Props {
    options: SelectOptionsType[],
    selectClassName: string, 
    optionClassName: string,
    name?: string
    id?: string | undefined
    onChange: (e: ChangeEvent<HTMLSelectElement>)=> void

}




const Select: FC<Props> = ({options, optionClassName, selectClassName, name, id, onChange}) => {
  return (
    <select
    className={selectClassName}
    name={name}
    id={id}
    onChange={onChange}
  >
    {options.map((option)=>{return <option className={optionClassName} value={option.value}>
      {option.label}
    </option>})}
    
  </select>
  )
}

export default Select
