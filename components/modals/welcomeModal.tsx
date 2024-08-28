import { ModalHandlerContext, RenderedModalHandlerContext, useModalHandlerContext } from '@/context/modalContext'
import { Modal } from '@react95/core'
import { WindowsExplorer } from '@react95/icons'
import React, { useContext } from 'react'

type Props = {}

function WelcomeModal({ }: Props) {
  
  const { id } = useContext(RenderedModalHandlerContext)
  const { dispatch } = useModalHandlerContext()
  
  return (
    <>
      <Modal
        title="Welcome to my portfolio!"
        onClose={() => dispatch({ type: "close", id : id })}
        icon={<WindowsExplorer variant="16x16_4" />} width="300px" height="200px"
      >
        <h1>Welcome</h1>
        <p>This is a simple modal</p>
      </Modal>
    </>
  )
}

export default WelcomeModal