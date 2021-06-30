import { convertDistance } from "./convert"

export const findTotalMi = (data) => {
    let total = 0
    for (let run of data) {
        total += run.distance
    }
    return convertDistance(total)
}