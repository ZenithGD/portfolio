import { RenderedModalHandlerContext } from "@/context/modalContext";
import React, { Fragment } from 'react'

/**
 * The action to perform with the reducer.
 * These actions can either be:
 * 
 * - `add`: Adds a new modal with some *id* and the corresponding JSX *element*.
 * - `close`: Close a modal identified by an *id*.
 * - `close_all`: Close all modals
 */
export type ModalAction =
  {
    type: 'add',
    id: string
    element: JSX.Element,
  } |
  {
    type: 'close',
    id: string,
  } |
  {
    type: 'close_all'
  };

/**
 * The structure that contains the list of modals currently active
 */
export type ModalHandler = { modals: Record<string, JSX.Element | undefined> }

/**
 * Create a new modal handler object
 * @returns A new modal handler
 */
export function createModalHandler(): ModalHandler {
  return { modals : {} }
}

/**
 * The reducer that controls the modal handler state and modifies its state
 * with a modal action.
 * @param state The current modal handler state
 * @param action The action to apply
 * @returns The new updated state
 */
export const modalHandlerReducer: React.Reducer<ModalHandler, ModalAction> = (
  state,
  action
) => {

  const current = { ...state }

  // handle action type
  switch (action.type) {
    case 'add':
      {
        current.modals[action.id] = (
          <RenderedModalHandlerContext.Provider value={{ id: action.id }}>
            {action.element}
          </RenderedModalHandlerContext.Provider>
        )

        return current
      }
    case 'close':
      {
        delete current.modals[action.id]
        return current
      }
    case 'close_all':
      {
        for (const [key, value] of Object.entries(current.modals)) {
          if (value !== null) {
            delete current.modals[key];
          }
        }

        current.modals = {}
        return current
      }
  }
}

/**
 * Render the modals from the modal handler 
 * @param modalHandler The modal handler
 * @returns The JSX fragment containing all modals
 */
export function renderModals(modalHandler: ModalHandler): JSX.Element[]
{
  return Object.entries(modalHandler.modals)
    .filter(([_, entry]) => entry !== null)
    .map(([key, entry]) =>
      <Fragment key={"modal-" + key}>
        {entry}
      </Fragment>
    )
}