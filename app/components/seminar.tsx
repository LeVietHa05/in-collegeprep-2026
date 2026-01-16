import Image from "next/image"

export default function Seminar({ num, content }: { num: string, content: string }) {
    return (
        <div className="bg-[#004AF7] mt-16 scroll-mt-30 " id="seminar">
            <div className=" w-[1268px] mx-auto flex">
                <div className="flex-4 text-[#CEFF82] px-12">
                    <div className="font-black text-[80px] uppercase">
                        Seminar {num}
                    </div>
                    <div className="text-[18px] pb-2">
                        <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeHGVx0m7WBQBXPxPLftIZZD-eHllCb7iBv9dAa3ZhtlFKz2A/viewform" className="block hover:underline font-black text-[20px] text-[#004AF7] bg-[#E5FFA4] w-fit px-12 py-4">
                        <span >ĐĂNG KÝ HỌC</span>
                    </a>
                </div>
                <div className="bg-[#FDFFD6] flex-3 p-[1px] ">
                    <div className="bg-[#157EFF] rounded-br-[220px]">
                        <div className="bg-[#004AF7] rounded-tl-[220px] rounded-br-[220px] flex items-center justify-center overflow-hidden">
                            <Image src={'/seminar-ceo.png'} alt="ceo inception" width={354} height={489}></Image>
                        </div>
                    </div>
                    <div className="text-center uppercase font-bold text-[#004AF7] py-3">
                        <div className="text-[19px]">CEO INCEPTION</div>
                        <div>MBA TẠI DUKE UNIVERSITY</div>
                    </div>
                </div>
            </div>
        </div>
    )
}