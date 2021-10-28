let crim = []

export const useCrims = () => {
    return crim.slice()
}
export const getCrims = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(dirtyCrim => dirtyCrim.json())  
        .then(
            cleanCrim => {
            crim = cleanCrim
        } )      
    
}