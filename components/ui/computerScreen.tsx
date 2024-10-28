"use client"
import MenuTaskbar from './menuTaskbar';
import ScreenContent from './screenContent';
import ModalHandlerProvider from '@/context/modalHandler/modalHandlerProvider';
import MenuProvider from '@/context/menuHandler/menuHandlerProvider';
import { useClippy, ClippyProvider, AGENTS } from '@react95/clippy';

type Props = {}

function ComputerScreen({ }: Props) {

  return (
    <ClippyProvider agentName={AGENTS.ROVER}>
      <MenuProvider>
        {/* This provider controls the modal handler and the events for opening and closing windows */}
        <ModalHandlerProvider>
          <ScreenContent />
          <MenuTaskbar />
        </ModalHandlerProvider>
      </MenuProvider>
    </ClippyProvider>
  )
}

export default ComputerScreen