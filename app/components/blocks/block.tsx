export default function Block({bgColor}:{bgColor:string}){
    return (
        <div className={`flex flex-col justify-center items-center gap-4 w-full h-[300px]`} style={{backgroundColor: bgColor}}>
            <span className={"text-white text-sm"}>{bgColor.toUpperCase()}</span>
        </div>
    )
}