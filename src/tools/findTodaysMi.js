import { convertDistance } from "./convert"

export const findTodaysMi = (data) => {
    // (f)ormat todays date
    const td = new Date()
    const y = td.getFullYear()
    let m = td.getMonth() + 1
    let d = td.getDate()
    m.toString().length === 1 && (m = `0${m}`)
    d.toString().length === 1 && (d = `0${d}`)
    const tdf = `${y}-${m}-${d}`
    // check for runs done on tdf
    let todaysMi = 0
    for (let run of data) {
        if (run.start_date_local.includes(tdf)) {
            todaysMi += run.distance
        }
    }
    return convertDistance(todaysMi)
}