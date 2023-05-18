export default function ManageFunctionalities() {
  const manage = [
    {
      "id": '01',
      "title": 'Track company-wide progress',
      "textContent": 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
    },
    {
      "id": '02',
      "title": 'Advanced built-in reports',
      "textContent": 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
    },
    {
      "id": '03',
      "title": 'Everything you need in one place',
      "textContent": 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
    }
  ]

  return (
    <div className="flex flex-col gap-[45px] md:basis-1/2 xl:gap-8">
      {manage.map((item) => (
        <div className='flex flex-col ml-4 gap-[10px]' key={item.id}>
          <div className="flex items-center gap-4 rounded-l-full xl:gap-[26px] xl:items-start">
            <span className="pb-2 pt-[7px] min-w-[67px] font-bold bg-BrightRed rounded-full text-center text-white">{item.id}</span>
            <h3 className="font-bold tracking-tight text-DarkBlue dark:text-white xl:hidden duration-300">{item.title}</h3>
            <div className="hidden flex-col gap-4 xl:flex">
              <h3 className="font-bold tracking-tight text-DarkBlue dark:text-white mt-2 duration-300">{item.title}</h3>
              <p className="text-[14px] leading-7 text-DarkGrayishBlue text-left xl:mr-12">{item.textContent}</p>
            </div>
          </div>
          <p className="text-[14px] leading-7 text-DarkGrayishBlue xl:hidden">{item.textContent}</p>
        </div>
      ))}
    </div>
  )
}
