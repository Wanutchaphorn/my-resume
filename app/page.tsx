import { Phone, Mail, Globe, MapPin, Star } from 'lucide-react';

export default function Resume() {
  const skills = ['HTML/CSS', 'PHP', 'JAVA', 'Python', 'SQl'];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center font-sans">
      <div className="bg-white w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
        
        {/* LEFT COLUMN: SIDEBAR */}
        <aside className="w-full md:w-[35%] bg-[#8b97b0] flex flex-col">
          {/* Profile Section with Darker Background Top */}
          <div className="bg-[#465166] pt-12 pb-10 px-8 text-center rounded-b-[40px]">
            <div className="relative w-40 h-40 mx-auto mb-8 border-[6px] border-[#6e7b96] rounded-full overflow-hidden shadow-lg">
              <img
                src="me.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-white text-3xl font-extrabold tracking-tighter leading-tight uppercase">
              Wanutchaphorn <br /> Thongkham
            </h1>
            <div className="h-[2px] w-12 bg-white/30 mx-auto my-4"></div>
            <p className="text-gray-300 text-xs tracking-[0.3em] uppercase font-bold">Software Developer</p>
          </div>

          {/* Contact Details */}
          <div className="p-10 space-y-7 text-white">
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-white/80" />
              <span className="text-sm font-medium">+66 91 871 6674</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-white/80" />
              <span className="text-sm font-medium break-all">fah.thongkham@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe size={18} className="text-white/80" />
              <span className="text-sm font-medium">fb.com/Wanutchaphorn</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-white/80" />
              <span className="text-sm font-medium">Samutsongkharm, Thailand</span>
            </div>

            
          </div>
        </aside>

        {/* RIGHT COLUMN: MAIN CONTENT */}
        <main className="flex-1 p-12 bg-white flex flex-col gap-12">
          
          {/* ABOUT ME */}
          <section>
            <h2 className="text-2xl font-black text-[#2d3748] mb-6 inline-block bg-[#cbd5e0] px-8 py-1 rounded-full tracking-widest uppercase italic">
              About Me
            </h2>
            <p className="text-[#4a5568] text-sm leading-relaxed text-justify pl-2">
              I enjoy technology and using digital tools to make work easier and more efficient. 
              I like communicating and working with people, and I enjoy supporting executives in daily tasks. 
              I am a fast learner, well organized, and always open to learning new technologies.
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-2xl font-black text-[#2d3748] mb-6 inline-block bg-[#cbd5e0] px-8 py-1 rounded-full tracking-widest uppercase italic">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-4 pl-2">
              {skills.map((skill) => (
                <div key={skill} className="flex justify-between items-center border-b border-gray-100 pb-2 transition-all hover:pl-2">
                  <span className="text-[#4a5568] font-bold text-sm uppercase tracking-wider">{skill}</span>
                  <span className="text-[10px] font-black text-[#465166] uppercase tracking-[0.2em]">Junior</span>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCES (Timeline Style) */}
          <section>
            <h2 className="text-2xl font-black text-[#2d3748] mb-8 inline-block bg-[#cbd5e0] px-8 py-1 rounded-full tracking-widest uppercase italic">
              Internship
            </h2>
            <div className="space-y-10 pl-2">
              {[
                { company: "Bangkok Web Solution", role: "Frontend Developer", },
                { company: "Somdetphraphutthaloetla Hospital", role: "IT Support", },
                { company: "Community Development Office", role: "Communication and Coordination",},
              ].map((item, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-[#2d3748]">
                  <div className="absolute -left-[11px] top-0 bg-[#2d3748] w-5 h-5 flex items-center justify-center transform rotate-45">
                     <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <h3 className="font-black text-lg text-[#2d3748] uppercase leading-none">{item.company} <span className="text-sm font-normal ml-2 tracking-normal capitalize text-gray-500"></span></h3>
                  <p className="text-blue-600 text-xs font-bold mt-1 uppercase tracking-widest">{item.role}</p>
                  
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION (แบ่งระดับแบบโค้ดก่อนแก้ไข + ดีไซน์ใหม่) */}
  <section>
    <h2 className="text-2xl font-black text-[#2d3748] mb-8 inline-block bg-[#cbd5e0] px-8 py-1 rounded-full tracking-widest uppercase italic">
      Education
    </h2>
    <div className="space-y-8 pl-2">
      {/* University */}
      <div className="relative pl-8 border-l-2 border-indigo-200">
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"></div>
        <div className="flex justify-between items-start">
          <h3 className="font-black text-[#2d3748] text-lg uppercase leading-tight">University (Present)</h3>
          
        </div>
        <p className="text-indigo-700 font-bold text-sm">Rajamangala University of Technology Thanyaburi</p>
        <p className="text-xs text-gray-500 font-medium italic">Major in Computer Engineering</p>
      </div>

      {/* High Vocational */}
      <div className="relative pl-8 border-l-2 border-indigo-200">
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"></div>
        <div className="flex justify-between items-start">
          <h3 className="font-black text-[#2d3748] text-lg uppercase leading-tight">High Vocational Certificate</h3>
          
        </div>
        <p className="text-indigo-700 font-bold text-sm">Samutsongkharm Technical College</p>
        <p className="text-xs text-gray-500 font-medium italic">Major in Software Developers</p>
      </div>

      {/* Vocational */}
      <div className="relative pl-8 border-l-2 border-indigo-200">
        <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"></div>
        <div className="flex justify-between items-start">
          <h3 className="font-black text-[#2d3748] text-lg uppercase leading-tight">Vocational Certificate</h3>
         
        </div>
        <p className="text-indigo-700 font-bold text-sm">Samutsongkharm Technical College</p>
        <p className="text-xs text-gray-500 font-medium italic">Major in Information Technology</p>
      </div>
    </div>
  </section>

        </main>
      </div>
    </div>
  );
}