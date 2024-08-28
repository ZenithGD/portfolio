"use client"
import { useModalHandlerContext } from '@/context/modalContext';
import { TaskBar, List, Modal } from '@react95/core';
import { ReaderClosed, Settings, WindowsExplorer } from '@react95/icons';
import React from 'react'
import SettingsModal from '../modals/settingsModal';

type Props = {}

function MenuTaskbar({ }: Props) {

  const { modalHandler, dispatch } = useModalHandlerContext()
  
  return (
    <TaskBar list={<List>
      <List.Item
        icon={<Settings variant="32x32_4"/>}
        onClick={() => dispatch({
          type: 'add', id: "starter2", element: <Modal
            onClose={ () => dispatch({ type: "close", id: "starter2" }) }
            icon={<Settings variant="16x16_4" />} title="Windows Explorer 2" width="500px" height="600px"
          >
            <SettingsModal />  
          </Modal>
        })}
      >
        Local Disk (C:)
      </List.Item>
    </List>} />
  )
}

export default MenuTaskbar