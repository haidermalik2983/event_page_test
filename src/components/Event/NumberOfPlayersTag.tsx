import UserIcon from "../UI/icons/UserIcon"

const NumberOfPlayersTag = ({numberOfPlayers}:{numberOfPlayers:number}) => {
  return (
    <div className="w-full flex justify-end mb-2">
      <div className="flex items-center gap-1 bg-[#f1f5f2] px-3 py-1 mt-2 rounded-full">
      <div className="w-4"> <UserIcon/></div>  {numberOfPlayers} Players
      </div>
    </div>
  )
}

export default NumberOfPlayersTag
