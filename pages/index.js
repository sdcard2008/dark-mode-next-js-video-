import { modeState , changeMode } from "../public/utils/state"
import styles from "../styles/Home.module.css"

import json from "../public/json/themes.json"

import {returnModeStyle} from "../public/utils/funcs"
import { useRouter } from "next/router"

const Index = () => {
  let router = useRouter()
  return(
    <div className={returnModeStyle(modeState.getState().mode , json , "bg" , styles , true)}>
      <button
      onClick={() => {
        changeMode()
        router.replace(router.asPath)

      }}>Click TO Change Mode</button>
    </div>
  )
}
export default Index