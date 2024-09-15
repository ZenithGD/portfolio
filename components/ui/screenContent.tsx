import { Modal, List, Frame, Button } from '@react95/core'
import { User1 } from '@react95/icons'
import React, { useEffect } from 'react'
import { renderModals } from '@/context/modalHandler/modalHandler';
import WelcomeModal from '../modals/welcomeModal';
import DesktopIcon from '../items/desktopIcon';
import { useModalHandlerContext } from '@/context/modalHandler/modalHandlerContext';
import { useMenuHandlerContext } from '@/context/menuHandler/menuHandlerContext';
import { Contextual } from '@/context/menuHandler/menuHandler';

type Props = {}

function ScreenContent({ }: Props) {

  const { modalHandler, addWindow, removeWindow, closeAll } = useModalHandlerContext()
  const { menuHandler, dispatch, openMenu, closeMenu } = useMenuHandlerContext()
  
  useEffect(() => {
    // create "welcome" modal at roughly the middle of the screen,
    // plus or minus a few pixels
    addWindow("welcome", <WelcomeModal width={500} height={400} />)

    // and nuke all modals when this page is unmounted
    return () => {
      closeAll()
    };
  }, []);

  const showDesktopMenu = (e : React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    openMenu("desktop", { x: e.clientX, y: e.clientY })
  }

  return <>
    {/* Generate the list of icons, spaced in a grid. 
    TODO detect screen space and display icons in a grid
    accordingly, as the original w98 desktop and current desktops*/}
    <div onContextMenu={showDesktopMenu}>
      <div className='px-6 h-[95vh] w-auto flex flex-col flex-wrap justify-start gap-2 overflow-y-auto overflow-x-clip'>
        <DesktopIcon
          icon={<User1 variant="32x32_4"/>}
          label="Welcome to my portfolio!"
        />
        <DesktopIcon
          icon={<User1 variant="32x32_4"/>}
          label="Welcome to my portfolio!"
        />
      </div>
    </div>
    {/* Render all the modal windows */}
    <div className='z-10'>
      {renderModals(modalHandler)}
    </div>

    {/* Render the contextual menu if active */}
    <div className='z-50 absolute top-0 left-0 h-screen w-screen pointer-events-none'>
      <Contextual menuHandler={menuHandler} />
    </div>
  </>;
}

export default ScreenContent