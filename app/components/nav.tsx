"use client";

import Image from "next/image"
import { usePathname } from 'next/navigation';
const navitems = [
    {
        link: "#",
        text: "TRANG CHỦ"
    },
    {
        link: "#lichkhaigiang",
        text: "LỊCH KHAI GIẢNG"
    },
    {
        link: "#khoahoc",
        text: "NỘI DUNG KHOÁ HỌC"
    },
    {
        link: "#seminar",
        text: "SEMINAR"
    }
]

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="w-screen fixed top-0 left-0 right-0 z-1000 bg-[#004AF7] py-2 md:p-5 shadow-lg/30">
            <div className="max-w-[1440px] mx-auto flex justify-center md:justify-between items-center text-white font-bold font-[Raleway] *:transition-all *:duration-300" >
                <a href={'/'}><Image src={'/logo-nav.svg'} alt="logo inception" width={154} height={140} ></Image></a>
                <div className="space-x-4 *:hover:scale-105 mr-20 hidden md:block">
                    {navitems.map((each, i) => {
                        return (
                            <a className={`${pathname.startsWith(each.link) ? "border-b-2" : "border-b-0"} border-white hover:underline hover:scale-105 duration-300"`} href={each.link} key={i}>
                                {each.text}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}