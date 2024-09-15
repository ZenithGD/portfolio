"use client"
import { ModalProvider } from '@react95/core';
import MenuTaskbar from './menuTaskbar';
import ScreenContent from './screenContent';
import ModalHandlerProvider from '@/context/modalHandler/modalHandlerProvider';
import MenuProvider from '@/context/menuHandler/menuHandlerProvider';

type Props = {}

function ComputerScreen({ }: Props) {

  return (
    <MenuProvider>
      {/* This provider controls the modal handler and the events for opening and closing windows */}
      <ModalHandlerProvider>
        {/* This provider controls the logic for each modal and the integration with the task bar */}
        <ModalProvider>
          <ScreenContent />
          <MenuTaskbar />
        </ModalProvider>
      </ModalHandlerProvider>
    </MenuProvider>
  )
}

export default ComputerScreen