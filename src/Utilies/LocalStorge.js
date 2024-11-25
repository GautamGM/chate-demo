
// set data to local stoage
export function setDataToLocalStorage(key,item){
    return localStorage.setItem(`${key}`,JSON.stringify(item))
}

// get data from the local storaragt

export function getDataFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(`${key}`))
}