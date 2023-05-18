// eslint-disable-next-line react/prop-types
export default function OrangeBtn({textColor= 'text-white',bgColor = 'bg-BrightRed', margin, custom,}) {
  return (
    <a href="#" className={`w-[137px] text-center py-[14px] ${bgColor} rounded-full text-xs font-bold ${textColor} ${margin} ${custom}`}>Get Started</a>
  )
}
