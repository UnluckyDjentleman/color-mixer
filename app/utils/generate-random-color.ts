import { NumsToHexs } from "./nums-to-hex"

export function generateRandomColor():string{
    const random_val=()=>Math.round(Math.random()*256)
    return NumsToHexs([random_val(),random_val(),random_val()])
}