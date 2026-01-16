
const data = [
    {
        title: "Module 1: Psychology",
        content: [
            {
                num: 1,
                title: "Attachment Theory Academic Principles & College Writing",
                content: [
                    "Tiếp cận Attachment Theory(Thuyết gắn bó) - nền tảng tâm lý học giải thích cách con người hình thành cảm xúc, mối quan hệ và cách phản ứng với thế giới xung quanh.",
                    "Hướng dẫn đọc - phân tích - thảo luận một bài luận học thuật bậc đại học",
                    "Phân biệt giữa viết sáng tạo thông thường và viết học thuật trong chương trình đại học.",
                    "Làm quen với với yêu cầu viết và tư duy học thuật trong môi trường đại học",
                ]
            },
            {
                num: 2,
                title: "Cravings Ethical Source Integration",
                content: [
                    "Khám phá tâm lý học về sự thèm muốn (Cravings) và cách ham muốn chi phối hành vi, quyết định và lựa chọn của con người.",
                    "Hiểu mối liên hệ giữa cảm xúc - động lực - hành vi, từ góc nhìn khoa học tâm lý.",
                    "Làm quen với Ethical Source Integration: Phương pháp trích dẫn văn bản và sử dụng nguồn học thuật đúng - chuẩn trong môi trường đại học.",
                    "Phân biệt trích dẫn, diễn đạt lại (paraphrase) và sao chép; hiểu rõ thế nào là đạo văn trong môi trường đại học.",
                ]
            },
            {
                num: 3,
                title: "The Psychology of Passion Critical Reading & Summary",
                content: [
                    "Passion là gì? Phân tích khái niệm đam mê; so sánh fixed mindset và growth mindset trong việc hình thành và phát triển đam mê.",
                    "Học cách đọc - phân tích - đánh giá một bài viết học thuật dựa trên: luận điểm, lập luận, bối cảnh và quan điểm của tác giả.",
                    "Phân biệt Summary - Paraphrase - Opinion.",
                    "Nắm rõ cấu trúc và nguyên tắc viết Summary trong một bài viết học thuật: Trung lập, súc tích và đúng trọng tâm.",
                ]
            }
        ]
    },
    {
        title: "Module 2: Economics",
        content: [
            {
                num: 4,
                title: "Macroeconomics Forming Arguments",
                content: [
                    "Làm quen với kinh tế học vĩ mô và cách các nền kinh tế vận hành ở quy mô quốc gia & toàn cầu.",
                    "Phân tích các khái niệm cốt lõi như: GDP, lạm phát, thất nghiệp, tăng trưởng kinh tế và mối quan hệ giữa chúng.",
                    "Học cách đọc hiểu các vấn đề kinh tế đương đại thông qua số liệu, bối cảnh và lập luận",
                    "Nắm cấu trúc một luận điểm học thuật: claim - reasoning - evidence, chuẩn bị cho các bài viết học thuật tại bậc đại học.",
                ]
            },
            {
                num: 5,
                title: "The Story of Money Supporting Arguments",
                content: [
                    "Tìm hiểu tiền tệ ra đời như thế nào, vì sao xã hội cần tiền và cách tiền phát triển từ trao đổi hàng hoá đến hệ thống tài chính hiện đại.",
                    "Phân tích vai trò của tiền trong kinh tế, quyền lực, hành vi con người và các vấn đề xã hội đương đại.",
                    "Học cách chứng minh một luận điểm học thuật bằng dẫn chứng, ví dụ, số liệu và lập luận logic.",
                    "Phân biệt các loại bằng chứng và cách lựa chọn evidence phù hợp để làm bài viết thuyết phục.",
                ]
            },
            {
                num: 6,
                title: "Bounded Rationality Argument Expansion & Progression",
                content: [
                    "Khái niệm về Bounded Rationality (tính hợp lý có giới hạn) và vì sao con người không luôn đưa ra quyết định tối ưu trong đời sống và kinh tế.",
                    "Phân tích vai trò của thông tin không đầy đủ, cảm xúc và bối cảnh trong các lựa chọn cá nhân và xã hội.",
                    "Học cách mở rộng một luận điểm từ ý đơn lẻ thành lập luận nhiều tầng, có chiều sâu học thuật.",
                    "Thực hành phát triển luận điểm thông qua giải thích, ví dụ và phản biện.",
                ]
            }
        ]
    }
]

export default function Noidungkhoahoc() {
    return (
        <div className="mt-16  w-[1268px] mx-auto scroll-mt-30" id="khoahoc">
            {/* title */}
            <div className=" pb-8 uppercase text-[64px] font-black text-[#FFC800] text-center">
                Nội DUng Khoá Học
            </div>
            {/* main */}
            <div>
                {
                    data.map((each, i) => {
                        return (
                            <div key={i}>
                                <div className="bg-[#9CDDFF] text-[#004AF7] px-12 py-4 font-extrabold text-[36px] uppercase">
                                    {each.title}
                                </div>

                                <div className="grid grid-cols-3 gap-[2px] py-[2px] bg-[#004AF7] text-[#004AF7] font-semibold">
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