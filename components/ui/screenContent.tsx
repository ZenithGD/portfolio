import { Modal, List, Frame, Button } from '@react95/core'
import { Mmsys113, Mshtml32534 } from '@react95/icons'
import React, { useEffect } from 'react'
import { renderModals } from '@/components/modals/modalHandler';
import { useModalHandlerContext } from '@/context/modalContext';
import WelcomeModal from '../modals/welcomeModal';

type Props = {}

function ScreenContent({ }: Props) {

  const { modalHandler, dispatch } = useModalHandlerContext()

  useEffect(() => {
    // create "welcome" modal at roughly the middle of the screen,
    // plus or minus a few pixels
    dispatch({
      type: 'add', id: "welcome", element: <WelcomeModal width={600} height={400} />
    });

    // and nuke all modals when this page is unmounted
    return () => {
      dispatch({ type: 'close_all' });
    };
  }, []);

  return <>
    {renderModals(modalHandler)}
  </>;
}

export default ScreenContent