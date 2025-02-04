const MAX_TIME = 59

const MIN_TIME = 0

let time = [0, 0]

let addTime = () => {
  
    if (time < MAX_TIME) {
        time[0]++       
    }
}

let subTime = () => {
    if (time > MIN_TIME) {
        time--
    }
}





//Set time out para decrementar el tiempo

