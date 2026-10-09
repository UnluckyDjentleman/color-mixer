export default function Range({value, setValue}:{value: number, setValue: (x:number)=>void}){
    return (
        <div className="flex flex-col px-2 py-2">
            <span className="text-sm dark:color-white color-black">Weight: {value}%</span>
            <input type='range' className="bg-neutral-quaternary rounded-full range-sm" min={1} step={1} max={100} value={value} onChange={e=>setValue(e.target.valueAsNumber)}/>
        </div>
    )
}