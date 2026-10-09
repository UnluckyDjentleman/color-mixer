export function NumsToHexs(numbers:number[]):string{
    const result="#"+numbers.map(num=>num.toString(16).padStart(2, "0")).join('')
    return result
}