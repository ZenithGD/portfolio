import { useMenuHandlerContext } from '@/context/menuHandler/menuHandlerContext'
import { List } from '@react95/core'
import React from 'react'

type Props = {}

function DesktopMenu({ }: Props) {

  return (
    <div className='pointer-events-auto'>
      <List width={'200px'}>
        <List.Item>View</List.Item>
        <List.Divider />
        <List.Item>Customize this Folder...</List.Item>
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
        <List.Item>Properties</List.Item>
      </List>
    </div>

  )
}

export default DesktopMenu