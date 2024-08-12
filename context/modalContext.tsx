import React, { createContext, Dispatch } from 'react';
import { ModalHandler, ModalAction, createModalHandler } from '@/components/modals/modalHandler';

export type RenderedModalHandlerContext = {
  id: string;
};

export const RenderedModalHandlerContext = createContext<RenderedModalHandlerContext>(undefined!);

export type ModalHandlerContext = {
  modalHandler: ModalHandler;
  dispatch: Dispatch<ModalAction>;
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
