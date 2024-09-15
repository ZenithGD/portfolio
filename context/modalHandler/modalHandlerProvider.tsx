import React, { useReducer } from 'react'
import { ModalHandlerContext } from './modalHandlerContext'
import { modalHandlerReducer, createModalHandler } from '@/context/modalHandler/modalHandler'

type Props = {}

function ModalProvider({ children }: React.PropsWithChildren<Props>) {
  // modal reducer
  const [modalHandler, dispatch] = useReducer(modalHandlerReducer, createModalHandler())

  const addWindow = (id: string, window: JSX.Element, title?: string) =>
  {
    if (modalHandler.modals[id])
      return false
    
    dispatch({ type: "add", id, element: window, title: title })
    return true
  }

  const removeWindow = (id: string) =>
  {
    if (!modalHandler.modals[id])
      return false

    dispatch({ type: "close", id })
    return true
  }

  const closeAll = () =>
  {
    dispatch({ type: "close_all" })
  }

  return (
    <ModalHandlerContext.Provider value={{ modalHandler, dispatch, addWindow, removeWindow, closeAll }}>
      {children}
    </ModalHandlerContext.Provider>
  )
}

export default ModalProvider