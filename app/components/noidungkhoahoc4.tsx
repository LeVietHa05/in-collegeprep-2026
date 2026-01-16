
const data = [
    {
        title: "Project & Reflection",
        content: [
            {
                num: 15,
                title: "Capstone Project Presentation",
                content: [
                    "Trình bày bài research/capstone cuối khoá trước lớp.",
                    "Cách trình bày câu hỏi nghiên cứu, lập luận chính và kết luận một cách rõ ràng, mạch lạc.",
                    "Giải thích và bảo vệ lựa chọn nghiên cứu, lập luận và dẫn chứng. ",
                    "Nhận phản hồi từ mentor và teammate; tham gia thảo luận xoay quanh dự án đã trình bày.",
                ]
            },
            {
                num: 16,
                title: "Consolidation & Reflection",
                content: [
                    "Hệ thống lại các khái niệm và kỹ năng trọng tâm đã học xuyên suốt khoá College Prep.",
                    "Nhìn lại cách Psychology - Economics - Philosophy -Sociology kết nối với nhau trong tư duy học thuật.",
                    "Phản tư về quá trình học tập, thay đổi tư duy và cách tiếp cận vấn đề ở bậc đại học.",
                    "Định hướng cách tiếp tục áp dụng kỹ năng đọc, viết, lập luận và nghiên cứu trong môi trường đại học.",
                ]
            }
        ]
    }
]

export default function Noidungkhoahoc4() {
    return (
        <div className="pt-16  w-[1268px] mx-auto">
            {/* main */}
            <div>
                {
                    data.map((each, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-[#9CDDFF] text-[#004AF7] px-12 py-4 font-extrabold text-[36px] uppercase">
                                    {each.title}
                                </div>

                                <div className="grid grid-cols-2 gap-[2px] py-[2px] bg-[#004AF7] text-[#004AF7] font-semibold">
                                    {each.content.map((ec, idx) => {
                                        return (
                                            <div key={idx} className="bg-[#EAFDFF] ">
                                                <div className="border-b-2 border-[#004AF7] flex px-6 py-2 items-end">
                                                    <div className=" text-[50px] font-bold leading-[50px]">
                                                        {ec.num}.
                                                    </div>
                                                    <div className="uppercase pl-4 font-bold">
                                                        {ec.title}
                                                    </div>
                                                </div>
                                                <div className="px-12 py-8 text-justify space-y-4">
                                                    <ol className="list-decimal">
                                                        {ec.content.map((ecc, id) => {
                                                            return (
                                                                <li key={id}>
                                                                    {ecc}
                                                                </li>
                                                            )
                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}