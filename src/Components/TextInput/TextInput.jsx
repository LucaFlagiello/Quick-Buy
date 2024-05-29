export default function TextInput({ theme, label, placeholder, inputType, inputValue }) {
  return (
    <form className="grid w-full mb-6" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        {label} <span className={`text-${theme}`}>*</span>
      </label>
      <input className={`border outline-${theme} py-2 rounded-sm pl-4 mt-2 w-full placeholder:text-[14px]`} id="email" value={inputValue} type={inputType} placeholder={placeholder}/>
    </form>
  )
};