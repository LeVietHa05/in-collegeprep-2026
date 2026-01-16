import Image from "next/image";
import Nav from "./components/nav";
import Header from "./components/header";
import Noidungkhoahoc from "./components/noidungkhoahoc";
import Noidungkhoahoc2 from "./components/noidungkhoahoc2";
import Noidungkhoahoc3 from "./components/noidungkhoahoc3";
import Noidungkhoahoc4 from "./components/noidungkhoahoc4";
import Seminar from "./components/seminar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" min-h-screen  bg-[#001C83] font-raleway dark:bg-black  pt-50">
      <main className="">
        <Nav />
        <Header></Header>
        {/* hero 1 */}
        <div id="lichkhaigiang" className="scroll-mt-30 bg-[#157EFF] w-[1268px] mx-auto mt-8 p-6 flex gap-3">
          <div className="flex flex-8 border border-[#FFF9C5]">
            <div className="bg-[#FFF9C5] text-[#004AF7] font-bold">
              <div className="border-b uppercase p-3 text-center">
                Lớp <br />College Prep
              </div>
              <div className="text-[160px] text-center leading-[120px] pb-4">
                1
              </div>
            </div>
            <div className="text-[#FFF9C5] font-bold text-[16px] flex items-center justify-center mx-auto">
              <div>
                Khai giảng: 30/01/2026<br />
                Lịch học (16 buổi + 3 seminar): Thứ 4 và Thứ 6 (17:30 - 19:30)<br />
                Địa điểm: Tầng 4, số 4, ngõ 48 Nguyễn Chánh, phường Yên Hoà, Hà Nội
              </div>
            </div>
          </div>

          <div className="flex-4 border border-[#FFF9C5] p-3">
            <div className="bg-[#FFF9C5] h-full px-12 py-8">
              <div className="border border-[#FFC800] p-2 rounded-xl h-full">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeHGVx0m7WBQBXPxPLftIZZD-eHllCb7iBv9dAa3ZhtlFKz2A/viewform" className="block hover:scale-105 duration-300 bg-[#FFC800] h-full rounded-lg flex items-center justify-center font-black text-[36px] uppercase text-[#004AF7]">
                  Đăng Ký Học
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* hero 2 */}
        <div className="bg-[#FDFFD6] w-[1268px] mx-auto mt-8 p-4 flex gap-3 text-center justify-center items-center text-[#004AF7] font-medium text-[24px]">
          <div>
            Nếu bạn gặp lỗi trong quá trình đăng ký vui lòng
          </div>
          <a target="_blank" href="https://www.facebook.com/inceptionplatform" className="block capitalize bg-[#004AF7] text-[#FFC800] p-2 underline">
            liên hệ Inception
          </a>
          <div>
            để được hỗ trợ!
          </div>
        </div>

        {/* noi dung khoa hoc */}
        <Noidungkhoahoc />

        {/* Seminar 1 */}
        <Seminar num="1" content={`<div><b>Academic Survival: Chúng mình là Asian,không phải Bsian và cách cày điểm A+</b> </div>
          <div><b>"High School vs. College" Mindset Shift:</b> Đại học khác THPT ở điểm nào trong cách học và cách đánh giá?</div>
          <div><b>The Art of Syllabus Management & Time Blocking: </b>Chọn môn đại pháp & Xếp lịch thần chưởng</div>
          <div><b>Active Study Skills</b> - Kỹ năng học tập chủ động</div>
          <div><b>Resource Utilization</b> - Cách tập dụng các nguồn lực (mà rất nhiều sinh viên bỏ quên) tại trường đại học</div>
          <div><b>A Secret Sauce</b> - Bật mí bí kíp giúp bạn đỉnh ngang thần thánh trong mắt người Tây</div>`} />

        <Noidungkhoahoc2 />

        <Seminar num="2" content={`<div><b>AI Assistant: Hướng dẫn dùng AI một cách có trách nhiệm và không vi phạm đạo đức học thuật</b> </div>
          <div><b>The Reality of AI:</b> Capabilities and Limitations - AI làm được gì và hạn chế ra sao</div>
          <div><b>Academic Integrity 2.0: </b>The "Gray Area" and Plagiarism - Cách dùng AI để tránh bị coi là đạo văn</div>
          <div><b>Prompt Engineering for Learning (Not Cheating) </b>Nghệ thuật viết câu lệnh AI và các công cụ AI đặc thùcho từng mục đích</div>`} />

        {/* noi dung khoa hoc 3 */}
        <Noidungkhoahoc3 />

        <Seminar num="3" content={`<div><b>Academic & Career Orientation: Thạc sĩ, Tiến sĩ hay Đi làm và cách thức chuẩn bị cho mục tiêu</b> </div>
          <div><b>The "Career Roadmap": </b>It's a Marathon, Not a Sprint - Chặng đường nghề nghiệp</div>
          <div><b>Networking 101  </b> - Hòa nhập để tìm việc/học bổng</div>
          <div><b>Skills vs. Major:</b> What Employers Actually Look For - Ngành học và công việc</div>
          <div><b>Academic Roadmap</b> - Con đường học vấn và nghề nghiệp nghiên cứu</div>
          <div><b>Research skills & Graduate preparation: </b>Các kỹ năng nghiên cứu và chuẩn bị cho cao học</div>`} />


        {/* noi dung khoa hoc 4 */}
        <Noidungkhoahoc4 />

        {/*  */}
        <div className="w-fit py-8  mx-auto font-black text-[24px]">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHGVx0m7WBQBXPxPLftIZZD-eHllCb7iBv9dAa3ZhtlFKz2A/viewform" target="_blank" className="block hover:underline bg-[#E5FFA4] text-[#004AF7] px-20 py-3">
            ĐĂNG KÝ HỌC
          </a>
        </div>

        {/* footer */}

        <Footer />
      </main>
    </div>
  );
}
