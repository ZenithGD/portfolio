import React, { createContext, Dispatch } from 'react';
import { MenuHandler, MenuAction, createMenuHandler } from '@/context/menuHandler/menuHandler';

export type Position = { x: number, y : number }

export type RenderedMenuHandlerContext = {
  id: string;
};

export const RenderedMenuHandlerContext = createContext<RenderedMenuHandlerContext>(undefined!);

export type MenuHandlerContext = {
  menuHandler: MenuHandler;
  dispatch: Dispatch<MenuAction>;

  /// Open a contextual with the given key, and unfocus every other menu.
  /// Therefore, at most only one contextual menu will be open at once
  openMenu: (id: string, position : Position) => boolean;

  /// Close the current contextual menu
  closeMenu: () => void;
};

export const createMenuHandlerContext = () => {
  return {
    menuHandler: createMenuHandler()
  } as MenuHandlerContext
}

export const MenuHandlerContext = createContext<MenuHandlerContext>(undefined!);

export function useMenuHandlerContext() {

  const context = React.useContext(MenuHandlerContext)

  if (context === undefined) {

    throw new Error('useMenuHandlerContext must be used within a MenuHandlerProvider')

  }

  return context

}
