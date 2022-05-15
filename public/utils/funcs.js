
export function returnModeStyle(mode , json , purpose , css , global=true  , href = undefined) {
    
    if (global) {
        return css[json["global"][mode][purpose]]
    } else {
        let allPaths
        
         allPaths = href.split("/")
              
        return css[json[allPaths[allPaths.length - 1]][mode][purpose]]
    }
    
}

