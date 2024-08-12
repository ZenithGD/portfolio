"use client"
import { Modal, TaskBar, List } from '@react95/core';
import { WindowsExplorer, ReaderClosed } from '@react95/icons';
import React, { useEffect, useReducer } from 'react'
import MenuTaskbar from './menuTaskbar';
import { createModalHandler, modalHandlerReducer, renderModals } from '../modals/modalHandler';
import { ModalHandlerContext } from '@/context/modalContext';
import WelcomeModal from '../modals/welcomeModal';

type Props = {}

function ComputerScreen({ }: Props) {
  // modal reducer
  const [modalHandler, dispatch] = useReducer(modalHandlerReducer, createModalHandler())

  useEffect(() => {
    // create "welcome" modal at roughly the middle of the screen,
    // plus or minus a few pixels
    dispatch({
      type: 'add', id: "welcome", element: <WelcomeModal />
    });

    // and nuke all modals when this page is unmounted
    return () => {
      dispatch({ type: 'close_all' });
    };
  }, []);

  return (
    <div>
      <ModalHandlerContext.Provider value={{ modalHandler, dispatch }} >
      {renderModals(modalHandler)}
        <MenuTaskbar />
      </ModalHandlerContext.Provider>
    </div>
  )
}

export default ComputerScreen