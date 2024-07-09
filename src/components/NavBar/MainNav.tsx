import Img from "../HTMLTags/Image/Img"

const MainNav = () => {
  return (
    <div className="w-full navtabShadow">
    <div className="font-poppins text-base px-5 gap-10 text-[#818181] flex items-center justify-start sm:justify-center relative mx-auto w-full max-w-[1340px]">
    <a className="font-bold text-black pt-4 pb-4 border-4 border-x-0 border-t-0 border-b-black" href="#/">Tournaments</a>
    <a  href="#/">You</a>
    
    <a href="#/" className="w-10 h-10 rounded-full overflow-hidden absolute right-5">
        <Img className="w-full h-full object-cover position-center" src="/images/profile.jpg" alt="profile" />
    </a>
</div>
</div>

  )
}

export default MainNav
