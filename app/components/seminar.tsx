import Image from "next/image"

export default function Seminar({ num, content }: { num: string, content: string }) {
    return (
        <div className="bg-[#004AF7] mt-8 lg:mt-16 scroll-mt-30 " id="seminar">
            <div className=" w-full max-w-[1268px] mx-auto flex flex-col lg:flex-row">
                <div className="flex-4 text-[#CEFF82] px-2 lg:px-12">
                    <div className="mt-2 lg:mt-0 font-black text-3xl lg:text-[80px] text-center lg:text-left uppercase">
                        Seminar {num}
                    </div>
                    <div className="text-xs lg:text-[18px] pb-2">
                        <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeHGVx0m7WBQBXPxPLftIZZD-eHllCb7iBv9dAa3ZhtlFKz2A/viewform" className="block hover:underline font-black text-base lg:text-[20px] text-[#004AF7] bg-[#E5FFA4] w-fit px-4 lg:px-12 py-2 lg:py-4 mx-auto lg:mx-0 mb-2 lg:mb-0">
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
                        <div>THẠC SĨ TẠI DUKE UNIVERSITY</div>
                    </div>
                </div>
            </div>
        </div>
    )
}