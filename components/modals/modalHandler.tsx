import { RenderedModalContext } from "@/context/modalContext";
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

export type ModalHandler = { modals: Record<string, JSX.Element | undefined> }

export function createModalHandler(): ModalHandler {
  return { modals : {} }
}

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
          <RenderedModalContext.Provider value={{ id: action.id }}>
            {action.element}
          </RenderedModalContext.Provider>
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