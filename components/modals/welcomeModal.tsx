"use client"
import { RenderedModalHandlerContext, useModalHandlerContext } from '@/context/modalContext'
import { cn } from '@/lib/utils'
import { Button, Modal } from '@react95/core'
import { User1 } from '@react95/icons'
import React, { useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

type HubButtonProps = { tagClassName: string, onClick?: (event: React.MouseEvent) => void }
type Props = { width: number, height: number }

function HubButton({ tagClassName, onClick, children }: React.PropsWithChildren<HubButtonProps>) {

  return <button className='flex items-center h-9' onClick={onClick}>
    <span className={cn(tagClassName, "w-[5px] h-full")}></span>
    {children}
  </button>
}

/**
 * The welcome modal shown at startup, which contains the links to the different sections.
 * It mimics the original welcome window from Windows 98
 * @param {Props} props
 * @returns The welcome modal component
 */
function WelcomeModal({ width, height }: Props) {

  // the id of the current modal window
  const { id } = useContext(RenderedModalHandlerContext)
  const { dispatch } = useModalHandlerContext()

  const handleCloseWindow = () => dispatch({ type: "close", id: id })

  return (
    <>
      <Modal
        title="Welcome to my portfolio!"
        onClose={() => handleCloseWindow}
        icon={<User1 variant="14x14_4" />} width={`${width}px`} height={`${height}px`}
        className='flex flex-col'
        boxShadow="$out"
      >
        <div className='-m-[5px] -mb-[10px] bg-center bg-w98-clouds flex flex-col flex-grow'>
          <div className='h-24 relative w-full'>
            <div className='ml-14 absolute top-0 w-1/2 h-full flex flex-col justify-center z-20'>
              <div className='flex font-light font-frlight text-xl -mb-1.5 items-end'>
                Microsoft® <Image className="pb-1" width={30} height={15} src="/assets/images/pictures/w98logo.png" alt="Windows 98 logo"/>
              </div>
              <div className='text-2xl -mt-1.5 ml-4 font-frlight'>
                <span className='font-frblack font-black'>Windows</span>98
              </div>
            </div>
            <div className="absolute top-12 w-full h-0.5 flex z-10">
              <span className='bg-red-500 top-5 w-1/6 h-0.5'></span>
              <span className='bg-yellow-500 top-5 w-1/6 h-0.5'></span>
              <span className='bg-green-500 top-5 w-1/6 h-0.5'></span>
              <span className='bg-blue-500 top-5 w-1/6 h-0.5'></span>
              <span className='bg-gradient-to-r from-blue-500 to-white top-5 w-1/3 h-0.5'></span>
            </div>
          </div>
          <div className="flex flex-grow">
            <div className='w-2/5 flex flex-col'>
              <h2 className='bg-black text-white tracking-[0.5em] pl-4'>CONTENTS</h2>
              <div className='flex flex-col divide-y-2 divide-gray-400'>
                <HubButton tagClassName='bg-blue-500'>
                  <p className='font-bold text-[14px] px-3'>Register now</p>
                </HubButton>
                <HubButton tagClassName='bg-red-500'>
                  <p className='font-bold text-[14px] px-3'>Connect to the Internet</p>
                </HubButton>
                <HubButton tagClassName='bg-green-500'>
                  <p className='font-bold text-[14px] px-3'>Discover Windows 98</p>
                </HubButton>
                <HubButton tagClassName='bg-yellow-500'>
                  <p className='font-bold text-[14px] px-3'>Maintain your computer</p>
                </HubButton>
              </div>
            </div>
            <div className='flex flex-col w-3/5'>
              <div className='flex flex-col flex-grow p-4 gap-2'>
                <h2 className='font-black text-xl font-msserif'>Welcome</h2>
                <p className='text-[13px] '>Welcome to the exciting new world of Windows 98, where your computer desktop meets the Internet!</p>
                <p className='text-[13px] '>Sit back and relax as you take a brief tour of the options available on this screen.</p>
                <p className='text-[13px] '>If you want to explore an option, just click it.</p>
              </div>
              <div className='flex justify-end p-2'>
                <Button className="pt-1 pb-0.5">Close</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default WelcomeModal