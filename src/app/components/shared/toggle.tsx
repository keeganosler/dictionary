import { MoonIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Toggle() {

    const [toggleOn, setToggleOn] = useState(false);

    useEffect(() => {
        if (toggleOn) {
            document.body.className = 'bg-neutral-900 text-neutral-100';
        } else {
            document.body.className = 'bg-neutral-100 text-neutral-900';
        }
    })

    return (
        <div className="flex">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="theme-switcher" onChange={() => setToggleOn(!toggleOn)} className="sr-only peer" />
                <div className="relative w-7 h-4 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-400 peer-checked:bg-fuchsia-700 dark:peer-checked:bg-fuchsia-700"></div>
            </label>
            <MoonIcon className={`ml-2 size-5 ${toggleOn ? 'text-fuchsia-700' : 'text-gray-300'}`} />        
        </div>


    )
}