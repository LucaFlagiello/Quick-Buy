export default function NavSideCategories({ theme, list }) {
  return (
    <>
      <li className='text-[18px] font-Roboto font-medium mb-1'>{list.headerCategory.name}</li>
      <li className={`font-Poppins hover:text-${theme} cursor-pointer transition duration-[.2s] ease`}>{list.subCategory1}</li>
      <li className={`font-Poppins hover:text-${theme} cursor-pointer transition duration-[.2s] ease`}>{list.subCategory2}</li>
      <li className={`font-Poppins hover:text-${theme} cursor-pointer transition duration-[.2s] ease`}>{list.subCategory3}</li>
      <li className={`font-Poppins hover:text-${theme} cursor-pointer transition duration-[.2s] ease`}>{list.subCategory4}</li>
      <li className={`font-Poppins hover:text-${theme} cursor-pointer transition duration-[.2s] ease`}>{list.subCategory5}</li>
    </>
  )
}