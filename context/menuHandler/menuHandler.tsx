import React, { Fragment, useEffect, useRef } from 'react'
import { ModalHandler } from "../modalHandler/modalHandler";
import TaskbarMenu from "../../components/menus/taskbarMenu";
import DesktopMenu from '@/components/menus/desktopMenu';
import { useMenuHandlerContext } from './menuHandlerContext';

/**
 * The action to perform with the reducer.
 * These actions can either be:
 * 
 * - `add`: Adds a new modal with some *id* and the corresponding JSX *element*.
 * - `close`: Close a modal identified by an *id*.
 * - `close_all`: Close all modals
 */
export type MenuAction =
  {
    type: 'open',
    id: string,
    position: { x: number, y: number }
  } |
  {
    type: 'close',
  }

/**
 * The structure that contains the list of modals currently active
 */
export type MenuHandler = {
  menus: Record<string, JSX.Element>
  current?: string,
  position: { x: number, y: number }
}

/**
 * Create a new modal handler object
 * @returns A new modal handler
 */
export function createMenuHandler(): MenuHandler {
  return {
    menus: {
      taskbar: <TaskbarMenu />,
      desktop: <DesktopMenu />,
    },
    position: { x: 0, y: 0 }
  }
}

/**
 * The reducer that controls the modal handler state and modifies its state
 * with a modal action.
 * @param state The current modal handler state
 * @param action The action to apply
 * @returns The new updated state
 */
export const menuHandlerReducer: React.Reducer<MenuHandler, MenuAction> = (
  state,
  action
) => {

  const current = { ...state }

  // handle action type
  switch (action.type) {
    case 'open':
      {
        current.current = action.id
        current.position = action.position
        return current
      }
    case 'close':
      {
        current.current = undefined
        return current
      }
  }
}

type ContextualProps = { menuHandler : MenuHandler }

/**
 * Render the contextual menu if any of them is selected
 * @param menuHandler The modal handler
 * @returns The JSX fragment containing all modals
 */
export function Contextual({ menuHandler } : ContextualProps)
{
  const focusRef = useRef<HTMLDivElement | null>(null)
  const { closeMenu } = useMenuHandlerContext()

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!menuHandler.current) return;
    function handleClick(event: any) {
      if (focusRef.current && !focusRef.current.contains(event.target)) {
        console.log("removing menu")
        closeMenu()
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [menuHandler.current])
  
  console.log(menuHandler.current)

  if (!menuHandler.current) return <></>

  return (
    <div className='relative h-screen w-screen pointer-events-none'>
      <div style={{ position: "absolute", top: menuHandler.position.y, left: menuHandler.position.x}}
        key={"menu-" + menuHandler.current}
        ref={focusRef}
      >
        {menuHandler.menus[menuHandler.current]}
      </div>
    </div>
  )
}