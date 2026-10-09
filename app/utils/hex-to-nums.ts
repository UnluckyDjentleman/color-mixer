export function hexToNums(color: string): number[] {
    color=color.replace('#','');

    if(color.length===3){
        color=color.split('').map(char=>char+char).join('');
    }

    return [
        parseInt(color.substring(0,2),16),
        parseInt(color.substring(2,4),16),
        parseInt(color.substring(4,6),16),
    ]
}