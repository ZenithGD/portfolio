"use client"

import { TaskBar, List, Modal, TitleBar } from '@react95/core';
import { Settings } from '@react95/icons';
import React from 'react'
import DisplayPropertiesModal from '../modals/displayPropertiesModal';
import { useModalHandlerContext } from '@/context/modalHandler/modalHandlerContext';

type Props = {}

function MenuTaskbar({ }: Props) {
  
  const { modalHandler, addWindow, removeWindow } = useModalHandlerContext()

  return (
    <TaskBar list={<List>
      <List.Item
        icon={<Settings variant="32x32_4"/>}
        onClick={() => addWindow("starter2", <Modal
          titleBarOptions={[
              <TitleBar.Help
                className="tw-react95-img"
                key="help"
                onClick={() => { alert('Help!') }} />,
              <Modal.Minimize className="tw-react95-img"/>,
              <TitleBar.Close 
                className="tw-react95-img"
                key="close" 
                onClick={ () => removeWindow("starter2") }
              />
            ]}
            icon={<Settings variant="16x16_4" />} title="Windows Explorer 2" width="500px" height="600px"
          >
            <DisplayPropertiesModal />  
          </Modal>
        )}
      >
        Local Disk (C:)
      </List.Item>
    </List>} />
  )
}

export default MenuTaskbar
