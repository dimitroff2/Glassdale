let facilities = []

export const useFac = () => {
    return facilities.slice()
}
export const getFac = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(dirtyFac=> dirtyFac.json())  
        .then(
            cleanFac => {
            facilities = cleanFac
        } )      
    
}