
const data = [
    {
        title: "Module 3: Philosophy",
        content: [
            {
                num: 7,
                title: "Essentialism & Existentialism Evaluating Arguments",
                content: [
                    "Tìm hiểu quan điểm cho rằng con người và sự vật có bản chất cố định, tồn tại độc lập với trải nghiệm cá nhân.",
                    "Khám phá tư tưởng hiện sinh: con người tự tạo ra ý nghĩa cho cuộc đời mình thông qua lựa chọn và hành động",
                    "So sánh hai cách tiếp cận đối lập về bản chất con người, tự do, trách nhiệm và ý nghĩa sống",
                    "Học cách đọc và đánh giá lập luận triết học: nhận diện giả định, tính logic và sức thuyết phục của quan điểm",
                ]
            },
            {
                num: 8,
                title: "Theories of Justice Responding to Arguments",
                content: [
                    "Tìm hiểu các học thuyết lớn về công lý, cách xã hội định nghĩa công bằng, quyền lợi và nghĩa vụ của cá nhân",
                    "Phân tích cách các lý thuyết công lý được áp dụng vào những vấn đề xã hội đương đại",
                    "Học cách phản hồi một luận điểm học thuật: đồng tình, phản biện hoặc mở rộng quan điểm một cách logic",
                    "Thực hành đối thoại học thuật dựa trên lập luận, dẫn chứng và tư duy phản biện",
                ]
            },
            {
                num: 9,
                title: "Ethics - How to Do Good Informative & Argumentative Synthesis",
                content: [
                    "Tìm hiểu các câu hỏi cốt lõi của “Ethic”: thế nào là hành động đúng, trách nhiệm cá nhân và lựa chọn đạo đức.",
                    "Phân tích các tình huống đạo đức thực tế thông qua nhiều hệ quy chiếu khác nhau.",
                    "Học cách tổng hợp nhiều nguồn và nhiều quan điểm để hình thành lập luận học thuật mạch lạc.",
                    "Thực hành kết nối thông tin, so sánh lập trường và xây dựng lập luận hoàn chỉnh.",
                ]
            },
            {
                num: 10,
                title: "Revision & Practice on Arguments",
                content: [
                    "Ôn tập cấu trúc lập luận học thuật: claim – reasoning – evidence – counterargument",
                    "Thực hành xây dựng, chỉnh sửa và hoàn thiện luận điểm từ các bài viết đã học ở các buổi trước",
                    "Nhận diện lỗi logic, dẫn chứng chưa thuyết phục và cách cải thiện lập luận",
                    "Thảo luận và phản hồi bài viết trong buổi workshop, mô phỏng cách học và viết ở đại học",
                ]
            }
        ]
    }
]

export default function Noidungkhoahoc2() {
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