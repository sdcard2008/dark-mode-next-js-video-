import { modeState , changeMode } from "../public/utils/state"
import styles from "../styles/Home.module.css"

import json from "../public/json/themes.json"

import {returnModeStyle} from "../public/utils/funcs"
import { useRouter } from "next/router"


const Test = () => {
    let router = useRouter()
    return (
        <div className={returnModeStyle(modeState.getState().mode , json , "bg" , styles)}>
            <h1 className={returnModeStyle(modeState.getState().mode , json , "heading" , styles , false , router.asPath)}>hello!</h1>
            <h2 className={returnModeStyle(modeState.getState().mode , json , "sub-heading" , styles , false, router.asPath)}>this is a test page</h2>
            <button
            onClick={() => {
                changeMode()
                router.replace(router.asPath)
            }}>Change Theme</button>
        </div>
    )
}
export default Test