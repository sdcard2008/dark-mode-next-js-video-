import create from "zustand";

export const modeState = create(state=> ({
    mode : "light"
}))

export  function changeMode() {
    let mode = modeState.getState().mode

    if (mode == "light") {
        modeState.setState({mode : "dark"})
    } else {
        modeState.setState({mode : "light"})
    }

    return mode
}