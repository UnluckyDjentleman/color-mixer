"use client"
import { useMemo, useState, Suspense } from "react";
import Block from "./components/blocks/block";
import ColorPicker from "./components/color-picker/color-picker";
import Range from "./components/range/range";
import Calculation from "./utils/calculation";
import { hexToNums } from "./utils/hex-to-nums";
import { generateRandomColor } from "./utils/generate-random-color";
import Button from "./components/button/button";
import ColorInputParams from "./types/color-input-params";

export default function Home() {
  const [colors, setColors]=useState<ColorInputParams[]>([{id: 1, color: "#ffffff", weight: 100}, {id:2, color: "#000000", weight:100}]);
  
  const finalColor=useMemo(()=>{
      const result=Calculation(
        colors.map(el=>({
          rgb_values: hexToNums(el.color),
          weight: el.weight
        }))
      );
      return result
  },[colors])

  const addColor=()=>{
    setColors(prev=>[...prev, {id: colors.length+1, color: generateRandomColor(), weight: 100}])
  }

  const deleteColor=(id:number)=>{
    setColors(prev=>prev.filter(x=>x.id!==id))
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Block bgColor={finalColor}>
        </Block>
        <div className="flex flex-wrap px-3 py-4 w-full gap-4">
          {
            colors.map((el, index)=>(
              <Suspense  key={el.id}>
                <div className="flex flex-col border-2 rounded-md overflow-x-hidden gap-4 w-[200px] items-center">
                  <ColorPicker value={el.color} setValue={v=>setColors(prev=>prev.map(x=>x.id===el.id?{...x,color: v}:x))}/>
                  <Range value={el.weight} setValue={v=>setColors(prev=>prev.map(x=>x.id===el.id?{...x,weight: v}:x))}/>
                  {
                    index>1&&(
                      <Button onClick={()=>deleteColor(el.id)} icon={"delete-icon.svg"} text={"Delete"}></Button>
                    )
                  }
                </div>
              </Suspense>
            ))
          }
        </div>
        <Button onClick={addColor} icon={"add-icon.svg"} text={"Add"}></Button>
      </main>
    </div>
  );
}
