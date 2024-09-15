import { useMenuHandlerContext } from '@/context/menuHandler/menuHandlerContext'
import { useModalHandlerContext } from '@/context/modalHandler/modalHandlerContext'
import { List, Modal } from '@react95/core'
import React from 'react'
import DisplayPropertiesModal from '../modals/displayPropertiesModal'
import { Settings } from '@react95/icons'

type Props = {}

function DesktopMenu({ }: Props) {

  const { addWindow, removeWindow } = useModalHandlerContext()

  return (
    <div className='pointer-events-auto'>
      <List width={'200px'}>
        <List.Item>Active Desktop</List.Item>
        <List.Divider />
        <List.Item>Arrange Icons</List.Item>
        <List.Item>Line Up Icons</List.Item>
        <List.Divider />
        <List.Item>Refresh</List.Item>
        <List.Divider />
        <List.Item>Paste</List.Item>
        <List.Item>Paste Shortcut</List.Item>
        <List.Item>Undo Copy</List.Item>
        <List.Divider />
        <List.Item>New</List.Item>
        <List.Divider />
        <List.Item onClick={() => addWindow(
          "display_properties",
          <Modal
            title="Display properties"
            onClose={ () => removeWindow("display_properties") }
            icon={<Settings variant="16x16_4" />} width="500px" height="600px"
          >
            <DisplayPropertiesModal />  
          </Modal>,
          "Display properties"
        )}>Properties</List.Item>
      </List>
    </div>

  )
}

export default DesktopMenu