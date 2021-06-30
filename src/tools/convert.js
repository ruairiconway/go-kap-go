export const convertDistance = (distance) => { // mts -> mi
    let d = distance / 1609
    if ( Number.isInteger(d) ) {
        return d
    } else {
        return d.toFixed(1)
    }
}

export const convertTime = (time) => { // seconds -> HH:MM:SS
    return new Date(time * 1000).toISOString().substr(11,8)
}

export const convertPace = (speed) => { // m/s -> min/mi
    const mph = speed * 2.237
    const roughPace = 60 / mph
    const min = Math.floor(roughPace)
    let sec = Math.floor((roughPace - min) * 60)
    sec.toString().length === 1 && (sec = `0${sec}`)
    return `${min}:${sec}`
}

export const convertElevation = (gain) => { // m -> ft
    const ft = gain * 3.281
    if ( Number.isInteger(ft) ) {
        return ft
    } else {
        return ft.toFixed(1)
    }
}