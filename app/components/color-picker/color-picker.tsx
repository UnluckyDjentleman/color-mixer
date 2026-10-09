export default function ColorPicker({value, setValue}:{
    value: string, 
    setValue: (x:string)=>void
}){
    return (
        <div className="h-[150px] w-full flex flex-col gap-2 items-center">
            <input type='color' className="h-full w-full" value={value} onChange={(e)=>setValue(e.target.value)} />
            <span className="text-md dark:color-white color-black">{value}</span>
        </div>
    )
}