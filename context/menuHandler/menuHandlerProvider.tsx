import { useReducer } from "react"
import { createMenuHandler, menuHandlerReducer } from "./menuHandler"
import { MenuHandlerContext, Position } from "./menuHandlerContext"


type Props = {}

function MenuProvider({ children }: React.PropsWithChildren<Props>) {
  // menu reducer
  const [menuHandler, dispatch] = useReducer(menuHandlerReducer, createMenuHandler())

  const openMenu = (id: string, position: Position) =>
  {
    if (!menuHandler.menus[id])
      return false
    
    dispatch({ type: "open", id, position })
    return true
  }

  const closeMenu = () =>
  {
    dispatch({ type: "close" })
  }

  return (
    <MenuHandlerContext.Provider value={{ menuHandler, dispatch, openMenu, closeMenu }}>
      {children}
    </MenuHandlerContext.Provider>
  )
}

export default MenuProvider