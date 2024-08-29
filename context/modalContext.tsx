import React, { createContext, Dispatch } from 'react';
import { ModalHandler, ModalAction, createModalHandler } from '@/components/modals/modalHandler';

export type RenderedModalHandlerContext = {
  id: string;
};

export const RenderedModalHandlerContext = createContext<RenderedModalHandlerContext>(undefined!);

export type ModalHandlerContext = {
  modalHandler: ModalHandler;
  dispatch: Dispatch<ModalAction>;

  /// Add a window with id and return whether the window already exists.
  /// In this case, the window should return into focused (i.e. it will be maximized)
  addWindow: (id: string, window: JSX.Element) => boolean;

  /// Remove a window with id 
  removeWindow: (id: string) => boolean;
};

export const createModalHandlerContext = () => {
  return {
    modalHandler: createModalHandler()
  } as ModalHandlerContext
}

export const ModalHandlerContext = createContext<ModalHandlerContext>(undefined!);

export function useModalHandlerContext() {

  const context = React.useContext(ModalHandlerContext)

  if (context === undefined) {

    throw new Error('useModalHandlerContext must be used within a CountProvider')

  }

  return context

}
