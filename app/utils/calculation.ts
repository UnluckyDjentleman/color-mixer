import ColorParamsWithWeight from "../types/color-params-with-weight";

export default function Calculation (colors: ColorParamsWithWeight[]){
    const totalWeight=colors.reduce((sum, item)=>sum+(item.weight||0),0);
    if (totalWeight===0) return `rgb(0,0,0)`

    let r=0
    let g=0
    let b=0

    for(const color of colors){
        const normalizedWeight=color.weight/totalWeight
        r+=Math.round(color.rgb_values[0]*normalizedWeight);
        g+=Math.round(color.rgb_values[1]*normalizedWeight);
        b+=Math.round(color.rgb_values[2]*normalizedWeight);
    }

    return `rgb(${r},${g},${b})`
}