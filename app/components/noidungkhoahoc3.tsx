
const data = [
    {
        title: "Module 4: Sociology",
        content: [
            {
                num: 11,
                title: "Sociological Imagination Research Topics",
                content: [
                    "Làm quen với tư duy xã hội học: nhìn các vấn đề cá nhân trong mối liên hệ với cấu trúc xã hội, văn hoá và lịch sử.",
                    "Phân biệt trải nghiệm cá nhân và vấn đề xã hội; cách xã hội học lý giải hành vi con người.",
                    "Tìm hiểu các chủ đề nghiên cứu phổ biến trong xã hội học đương đại.",
                    "Học cách xác định và thu hẹp đề tài nghiên cứu, đặt câu hỏi nghiên cứu phù hợp cho bài viết học thuật.",
                ]
            },
            {
                num: 12,
                title: "The Presentation of Self Research Strategies",
                content: [
                    "Tìm hiểu cách cá nhân thể hiện bản thân trong đời sống xã hội; vai trò, hình ảnh và tương tác trong các bối cảnh khác nhau.",
                    "Phân tích mối quan hệ giữa cái tôi cá nhân và kỳ vọng xã hội trong giao tiếp hằng ngày.",
                    "Làm quen với các chiến lược nghiên cứu học thuật: tìm nguồn, định hướng tài liệu và xây dựng nền tảng nghiên cứu.",
                    "Kết nối đề tài đã chọn với phương pháp và nguồn nghiên cứu phù hợp.",
                ]
            },
            {
                num: 13,
                title: "Deviance Research Writing",
                content: [
                    "Tìm hiểu cách cá nhân thể hiện bản thân trong đời sống xã hội; vai trò, hình ảnh và tương tác trong các bối cảnh khác nhau.",
                    "Phân tích mối quan hệ giữa cái tôi cá nhân và kỳ vọng xã hội trong giao tiếp hằng ngày.",
                    "Làm quen với các chiến lược nghiên cứu học thuật: tìm nguồn, định hướng tài liệu và xây dựng nền tảng nghiên cứu.",
                    "Kết nối đề tài đã chọn với phương pháp và nguồn nghiên cứu phù hợp.",
                ]
            },
            {
                num: 14,
                title: "Workshop on Research",
                content: [
                    "Thực hành viết và hoàn thiện bài research paper dựa trên đề tài đã chọn.",
                    "Kiểm tra, rà soát và tinh chỉnh research question, thesis và hướng lập luận.",
                    "Kiểm tra cách vận dụng khung lý thuyết, nguồn học thuật và phân tích dẫn chứng.",
                    "Chỉnh sửa cấu trúc, lập luận và giọng văn theo chuẩn college-level writing",
                ]
            }
        ]
    }
]

export default function Noidungkhoahoc3() {
    return (
        <div className="pt-16  w-full max-w-[1268px] mx-auto">
            {/* main */}
            <div>
                {
                    data.map((each, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-[#9CDDFF] text-[#004AF7] px-2 lg:px-12 lg:py-4 font-extrabold text-xl lg:text-[36px] text-center lg:text-left uppercase">
                                    {each.title}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] py-[2px] bg-[#004AF7] text-[#004AF7] font-semibold">
                                    {each.content.map((ec, idx) => {
                                        return (
                                            <div key={idx} className="bg-[#EAFDFF] ">
                                                <div className="border-b-2 border-[#004AF7] flex px-6 py-2  items-center lg:items-end">
                                                    <div className=" text-[50px] font-bold leading-[50px]">
                                                        {ec.num}.
                                                    </div>
                                                    <div className="uppercase pl-4 font-bold text-sm lg:text-base">
                                                        {ec.title}
                                                    </div>
                                                </div>
                                                <div className="px-8 lg:px-12 py-8 text-justify space-y-4 text-xs">
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