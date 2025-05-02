import { RenderedModalHandlerContext, useModalHandlerContext } from '@/context/modalHandler/modalHandlerContext'
import { Modal, TitleBar, Button, List, Frame, Dropdown } from '@react95/core'
import { ArrowLeft, ArrowRight, Copy, Cut, Paste, Progman46, Undo, User1 } from '@react95/icons'
import React, { useContext } from 'react'
import TreeView from '../items/treeView'
import ListView from '../items/listView'
import { FolderFSNode, readProjects } from '@/lib/filesystem'

type Props = { width: number, height: number }

function ProjectBrowser({ width, height }: Props) {
  // the id of the current modal window
  const { id } = useContext(RenderedModalHandlerContext)
  const { dispatch } = useModalHandlerContext()

  const handleCloseWindow = () => dispatch({ type: "close", id: id })

  const tree = readProjects()
  const list = (tree as FolderFSNode).children
  const currentDir = "C:/"

  return (
    <>
      <Modal
        title="Project Browser"
        titleBarOptions={[
          <TitleBar.Help
            className="tw-react95-img !p-0"
            key="help"
            onClick={() => { alert('Help!') }} />,
          <Modal.Minimize
            className="tw-react95-img !p-0" />,
          <TitleBar.Close
            className="tw-react95-img !p-0"
            key="close"
            onClick={handleCloseWindow}
          />
        ]}
        icon={<User1 variant="14x14_4" />} width={`${width}px`} height={`${height}px`}
        className='flex flex-col'
        boxShadow="$out"
        menu={[{
          name: 'File',
          list: <List width="200px">
            <List.Item onClick={handleCloseWindow}>Exit</List.Item>
          </List>
        }, {
          name: 'Edit',
          list: <List width="200px">
            <List.Item>Copy</List.Item>
          </List>
        }, {
          name: 'View',
          list: <List width="200px">
            <List.Item>...</List.Item>
          </List>
        }, {
          name: 'Tools',
          list: <List width="200px">
            <List.Item onClick={handleCloseWindow}>...</List.Item>
          </List>
        }, {
          name: 'Help',
          list: <List width="200px">
            <List.Item onClick={handleCloseWindow}>...</List.Item>
          </List>
        }]}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex h-full w-full">
            <div className='w-64 h-full flex flex-col'>
              <Frame className="m-[3px]" boxShadow="$in" padding="$2" >
                All Folders
              </Frame>
              <Frame h="100%" bgColor="$material" boxShadow="$out" padding="$4">
                <Frame h="100%" bgColor="white" boxShadow="$in">
                  <TreeView tree={tree} />
                </Frame>
              </Frame>
            </div>
            <div className='h-full flex flex-grow flex-col'>
              <Frame className="m-[3px]" boxShadow="$in" padding="$2" >
                Contents of {currentDir}
              </Frame>
              <Frame h="100%" bgColor="$material" boxShadow="$out" padding="$4">
                <Frame h="100%" bgColor="white" boxShadow="$in">
                  <ListView list={list} />
                </Frame>
              </Frame>
            </div>
          </div>
          <div className='flex'>
            <div className='w-64 h-full flex flex-col'>
              <Frame className="m-[3px]" boxShadow="$in" padding="$2" >
                X objects
              </Frame>
            </div>
            <div className='h-full flex flex-grow flex-col'>
              <Frame className="m-[3px]" boxShadow="$in" padding="$2" >
                X Kb (Disk free space: Y MB)
              </Frame>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProjectBrowser