let convictions = []

export const useConvictions = () => convictions.slice()


export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(dirtyCon => dirtyCon.json())  
        .then(
            cleanCon => {
            convictions = cleanCon
        } )      
     
}
