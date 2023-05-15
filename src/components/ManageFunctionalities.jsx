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
    <div className="flex flex-col gap-[45px]">
      {manage.map((item) => (
        <div className='flex flex-col ml-4 gap-[10px]' key={item.id}>
          <div className="flex items-center gap-4 bg-emerald-600 rounded-l-full">
            <span className="pb-2 pt-[7px] w-[67px] font-bold bg-red-500/50 rounded-full text-center">{item.id}</span>
            <h3 className="font-medium tracking-tight">{item.title}</h3>
          </div>
          <p className="text-[14px] leading-7">{item.textContent}</p>
        </div>
      ))}
    </div>
  )
}
