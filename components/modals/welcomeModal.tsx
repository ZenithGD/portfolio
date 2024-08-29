"use client"
import { ModalHandlerContext, RenderedModalHandlerContext, useModalHandlerContext } from '@/context/modalContext'
import { Button, Modal } from '@react95/core'
import { User1 } from '@react95/icons'
import React, { useContext } from 'react'

import clouds from "@/public/assets/images/backgrounds/Clouds.webp"

type Props = { width: number, height: number}

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

  const handleCloseWindow = () => dispatch({ type: "close", id : id })
  
  return (
    <>
      <Modal
        title="Welcome to my portfolio!"
        onClose={() => handleCloseWindow}
        icon={<User1 variant="14x14_4" />} width={`${width}px`} height={`${height}px`}
        className='flex flex-col'
      >
        <div className={`bg-w98-clouds -m-[5px] -mb-[10px] flex flex-grow`}>
          <div className='w-2/5'>

          </div>
          <div className='flex-grow flex flex-col'>
            <div className='flex-grow'>

            </div>
            <div className='flex justify-end p-4'>
              <Button>Close</Button>
            </div>
          </div>
          
        </div>
      </Modal>
    </>
  )
}

export default WelcomeModal