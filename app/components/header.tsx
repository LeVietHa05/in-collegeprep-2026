import Image from "next/image"

export default function Header() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center bg-[#004AF7] max-w-[1268px] mx-auto relative  p-3">

            <div className="absolute w-[972px] h-[644px] bottom-0 -left-40 hidden lg:block">
                <Image src={'/header-bigsign.png'} alt=" " fill></Image>
            </div>
            <div className="absolute w-[267px] h-[492px] bottom-0 left-100 hidden lg:block">
                <Image src={'/header-person-1.png'} alt=" " fill></Image>
            </div>

            <div className="relative w-full aspect-[3/2] block lg:hidden">
                <Image src={'/header-group.png'} alt=" " fill></Image>
            </div>
            <div className="flex-6 h-[444px]">

            </div>

            <div className="flex-5  bg-[#157EFF] lg:h-[444px] text-white capitalize leading-9 text-justify lg:text-left text-xs lg:text-base">
                <div className="lg:h-[444px] flex justify-center items-center bg-[#004AF7] lg:rounded-tr-[160px]">
                    <div>
                        Trải nghiệm lớp học <b>đại học thu nhỏ</b> <br /> <b>Tư duy học thuật</b> đa ngành, đa lĩnh vực<br />giáo trình mô phỏng chương trình <b>giáo dục khai phóng</b> <br />Giảng viên kì cựu tại Inception - “Tác giả&quot; đằng sau <b>học bổng Toàn Phần</b>  tại MIT, University of Chicago, Darthmouth, William,...<br />Rèn luyện <b >tư duy phản biện và khả năng lập luận chặt chẽ</b>  với các tình huống thực tế<br />Tự tin học tập trong môi trường <b> đại học quốc tế</b><br />3 Buổi Seminar <b>ĐỘC QUYỀN</b>  của Inception: College Excellence - Làm sao để trở nên ‘<b>Competitive’</b> trong 4 năm đại học sắp tới?<br />
                    </div>
                </div>
            </div>
        </div>
    )
}