import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeaderBar:React.FC=()=>{
    return (
        <header className={"sticky t-0 flex justify-around items-center align-center " +
                            "bg-gray-50 h-20 pt-3 pb-3 mb-3 drop-shadow-md"}>
            <Link href={"/"} className={"pl-3"}>
                <Image src={"/home-page-svgrepo-com.svg"} alt={"home"} width={24} height={24}/>
            </Link>
            <Link href={"/board"} className="xm:hidden sm:flex border p-1 pl-2 pr-2 rounded-full">
                board
            </Link>
            <Link href={"/product"} className="xm:hidden sm:flex border p-1 pl-2 pr-2 rounded-full">
                product
            </Link>
            <div className={"search-bar-wrapper flex relative"}>
                <input className={"rounded-full shadow-inner p-1 w-80 pl-5 border-1"}
                       placeholder={"검색"}/>
                <button className={"absolute p-1 self-center right-9 opacity-20 hover:opacity-100"}>
                    <Image src={"/delete-svgrepo-com.svg"} alt={"delete"} width={20} height={20}/>
                </button>
                <button className={"absolute p-1 self-center right-2 opacity-75 hover:opacity-100"}>
                    <Image src={"/search-svgrepo-com.svg"} alt={"search"} width={24} height={24}/>
                </button>
            </div>
                <div className={"flex bg-blue-100 hover:bg-blue-50 p-1 w-20 rounded-full text-right border-1"}>
                    <Image src={"/user-2-svgrepo-com.svg"}
                           alt={"login"}
                           width={24}
                           height={24}/>
                    Login
                </div>
        </header>
    )
}
export default HeaderBar