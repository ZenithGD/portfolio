import React from 'react'

type Props = { icon: JSX.Element, label: string, onClick? : React.MouseEvent<HTMLButtonElement> }

function DesktopIcon({ icon, label, onClick }: Props) {
  return (
    <button className='w-16 h-32 p-1 flex flex-col justify-center items-center'>
      {icon}
      <p className='text-white'>{label}</p>
    </button>
  )
}

export default DesktopIcon