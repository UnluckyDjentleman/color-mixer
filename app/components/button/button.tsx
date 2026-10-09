import Image from "next/image"
export default function Button({onClick, icon, text}:{onClick: ()=>void, icon:string, text:string}){
    return (
        <button className="bg-transparent px-3 py-2 flex items-center justify-evenly w-[150px]" onClick={onClick}>
            <Image src={icon} width={20} height={20} alt={"delete-icon"}></Image>
            <span className="text-sm dark:text-zinc-50 text-zinc-900">{text}</span>
        </button>
    )
}