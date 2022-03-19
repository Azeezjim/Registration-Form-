const Button = ({text, active}) => {
    return (
        <div className={`w-20 h-8 rounded-md cursor-pointer flex items-center justify-center ${active? 'bg-[#FF1534] text-gray-100':'bg-[#e7e5e5]' }`}>
            <p className="text-sm font-semibold">{text}</p>
        </div>
    )
}

export default Button
