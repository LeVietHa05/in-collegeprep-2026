
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="mt-20 bg-white w-full  relative z-2 ">
            <div className="max-w-[1080px] mx-auto py-12 flex justify-between text-xs font-light">
                <div className="text-xs">
                    <div >
                        <Image src={'/logo-footer.svg'} alt="logo" width={190} height={62}></Image>
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-4">
                        <Image className="pb-1" src={'/icon-home.svg'} alt="home logo" width={16} height={16}></Image>
                        Tầng 4, số 4, ngõ 48 Nguyễn Chánh,  Yên Hòa, Hà Nội
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-2">
                        <Image className="pb-1" src={'/icon-phone-call.svg'} alt="home logo" width={16} height={16}></Image>
                        <a href="tel:0947.995.245">0947.995.245</a>
                    </div>
                    <div className="flex items-center justify-start leading-[16px] gap-2 pt-2">
                        <Image className="" src={'/icon-email-unread.svg'} alt="home logo" width={16} height={16}></Image>
                        <a href={'mailto:info@i-inception.com'}> info@i-inception.com</a>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline">
                    <div className="text-[15px] text-[#004AF7] font-bold">
                        <Link href={'#lichkhaigiang'}>LỊCH KHAI GIẢNG</Link>
                    </div>
                    <div className="text-[15px] text-[#004AF7] font-bold">
                        <Link href={'#seminar'}>SEMINAR</Link>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline">
                    <div className="text-[15px] text-[#004AF7] font-bold">
                        <Link href={'#khoahoc'}>NỘI DUNG KHOÁ HỌC</Link>
                    </div>
                </div>

                <div className="space-y-4 *:hover:underline">
                    <div className="text-sm text-[#032852] font-semibold">Theo dõi ngay tại</div>
                    <div className="flex">
                        <Link target="_blank" href={'https://www.facebook.com/inceptionplatform'}>
                            <Image className="h-6" src={'/icon-facebook.svg'} alt="" width={25} height={25}></Image>
                        </Link>
                        <Link href={''} >
                            <Image className="h-6" src={'/icon-tiktok.svg'} alt="" width={25} height={25}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}