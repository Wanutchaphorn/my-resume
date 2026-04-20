import {
  ArrowRight,
  FacebookIcon,
  Globe,
  GithubIcon,
  InstagramIcon,
  GraduationCap,
  ZoomIn,
  Building2,
  Sparkles,
  Users,
  Settings2,
  Code2,
  BookOpen,
  School,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

const navItems = ['Home', 'Skills', 'Projects', 'Diagrams'];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fcff] text-slate-950">
      <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <a href="#" className="text-xl font-black tracking-tight transition hover:opacity-70">Wanutchaphorn</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="transition hover:text-slate-950"
              >
                {item}
              </a>
            ))}
            <a
              href="#contactme"
              className="rounded-full bg-slate-950 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-slate-800"
            >
              Contact
            </a>
          </nav>
        </header>
      </div>

      <div className="relative overflow-hidden">
        <main className="mx-auto flex max-w-7xl flex-col-reverse gap-16 px-6 pb-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#e7f8ff] px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
              Software Developer
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#e7f8ff] px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
              SA
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#e7f8ff] px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
              SE
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Write websites and design diagrams
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              I enjoy technology and using digital tools to make work easier and more efficient. I like communicating and working with people, and I enjoy supporting executives in daily tasks.
              I am a fast learner, well organized, and always open to learning new technologies.          </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contactme"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Hire Me
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-[40px] border border-transparent md:border-slate-200 bg-transparent md:bg-white shadow-none md:shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
              <picture>
                <source media="(max-width: 768px)" srcSet="/myremove.png" />
                <img
                  src="/my.jpg"
                  alt="Profile"
                  className="h-[28rem] w-full object-cover"
                />
              </picture>
            </div>
            <div className="absolute z-20 -left-2 top-12 rounded-full bg-[#2f8bf3] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-xl md:hidden">
              Website Developer
            </div>
            <div className="absolute z-20 -right-2 top-40 rounded-full bg-[#2bc4a4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-xl md:hidden">
              Draw a diagram
            </div>
            <div className="absolute z-20 bottom-8 left-4 rounded-full bg-[#f8ec58] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-xl md:hidden">
              Event Planner
            </div>
          </div>
        </main>
      </div>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-24 sm:px-8">
        <div id="skills" className="scroll-mt-24 pt-1">
          {/* My Skills Section */}
          <div className="relative -mx-6 mb-16 overflow-hidden py-2 sm:-mx-8">
            {/* Cyan Glow Background Bar */}
            <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 -rotate-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-60 blur-2xl" />

            {/* My Skills Black Bar */}
            <div className="relative flex -rotate-1 items-center justify-center bg-slate-950 py-2 shadow-2xl">
              <div className="flex shrink-0 gap-6 whitespace-nowrap text-lg font-black uppercase tracking-[0.2em] text-white sm:text-xl">
                <span>✨ My Skills</span>
                <span>✨ My Skills</span>
                <span>✨ My Skills</span>
                <span>✨ My Skills</span>
                <span>✨ My Skills</span>
                <span>✨ My Skills</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                category: 'Backend',
                skills: [
                  { name: 'JAVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'PYTHON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                ]
              },
              {
                category: 'Frontend',
                skills: [
                  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                ]
              },
              {
                category: 'Database',
                skills: [
                  { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                ]
              },
              {
                category: 'Tools',
                skills: [
                  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                  { name: 'draw.io', icon: 'https://upload.vectorlogo.zone/logos/drawio/images/6fe38e50-405d-4a17-aae8-bce2e377bca8.svg' },
                  { name: 'miro', icon: '/miro-2.svg' },
                  { name: 'Microsoft Office', icon: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
                  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                  { name: 'Antigravity', icon: '/antigravity.png' },
                ]
              }
            ].map((group) => (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-black uppercase tracking-widest text-[#2f8bf3]">{group.category}</h3>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group relative flex flex-col items-center justify-center space-y-4 rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                      <div className="flex h-16 w-16 items-center justify-center">
                        <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain transition duration-300 hover:scale-110" />
                      </div>
                      <span className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 transition group-hover:text-slate-950">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="projects" className="scroll-mt-24 pt-1"></div>
        <div className="relative -mx-6 mb-16 overflow-hidden py-2 sm:-mx-8">
          {/* Rainbow Background Bar */}
          <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 -rotate-2 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] opacity-60 blur-2xl" />

          {/* Main Black Bar */}
          <div className="relative flex -rotate-1 items-center justify-center bg-slate-950 py-2 shadow-2xl">
            <div className="flex shrink-0 gap-6 whitespace-nowrap text-lg font-black uppercase tracking-[0.2em] text-white sm:text-xl">
              <span>✨ My Projects</span>
              <span>✨ My Projects</span>
              <span>✨ My Projects</span>
              <span>✨ My Projects</span>
              <span>✨ My Projects</span>
              <span>✨ My Projects</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'COMPUTER MATHEMATIC LEARNING WEBSITE',
                tags: ['WIX'],
                description: [
                  'The computer mathematics content is organized in a step-by-step manner and is easy to understand.',
                  'Pre- and post-test exercises to assess learning.',
                  'Video media is used to make the content easier to understand.'
                ],
                link: 'https://papawadeehong.wixsite.com/projectsstc',
                image: '/bannerweb.jpg'
              },
              {
                title: 'Massage course and spa product management system (Excellent Project Award)',
                tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
                description: [
                  'Developed a Full-stack Spa System (PHP/MySQL) integrating booking, inventory, and POS.',
                  'Automated Email Notifications to streamline booking confirmations and user communication.'
                ],
                link: '/massage-course',
                image: '/bannerspa.jpg'
              },
            ].map((project) => (
              <div key={project.title} className="flex flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 w-full shrink-0 bg-slate-100">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-slate-100" />
                  )}
                </div>
                <div className="flex flex-1 flex-col space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{project.title}</h3>
                  <ul className="mb-2 flex-1 list-inside list-disc space-y-1 text-sm leading-6 text-slate-600">
                    {project.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <div className="mt-auto pt-2">
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex w-max items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                        View Project
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div id="diagrams" className="scroll-mt-24 pt-1">
            {/* Diagrams Section */}
            <div className="relative -mx-6 mb-16 overflow-hidden py-2 sm:-mx-8">
              {/* Sunset Glow Background Bar */}
              <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 -rotate-2 bg-gradient-to-r from-orange-400 via-amber-500 to-rose-500 opacity-60 blur-2xl" />

              {/* Diagrams Black Bar */}
              <div className="relative flex -rotate-1 items-center justify-center bg-slate-950 py-2 shadow-2xl">
                <div className="flex shrink-0 gap-6 whitespace-nowrap text-lg font-black uppercase tracking-[0.2em] text-white sm:text-xl">
                  <span>✨ My Diagrams</span>
                  <span>✨ My Diagrams</span>
                  <span>✨ My Diagrams</span>
                  <span>✨ My Diagrams</span>
                  <span>✨ My Diagrams</span>
                  <span>✨ My Diagrams</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              {[
                {
                  title: 'SYSTEM ARCHITECTURE & DESIGN DIAGRAMS',
                  tags: ['Activity Diagram', 'Use Case Diagram', 'ER Diagram'],
                  description: [
                    'ER Diagram',
                    'Activity Diagram',
                    'Use Case Diagram'
                  ],
                  link: '/diagrams',
                  image: '/ER.jpg'
                }
              ].map((diag) => (
                <div key={diag.title} className="flex max-w-2xl flex-col overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-48 w-full shrink-0 bg-slate-100 flex items-center justify-center text-slate-400">
                    {diag.image ? (
                      <img src={diag.image} alt={diag.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <ZoomIn size={32} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Preview Diagrams</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col space-y-4 p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      {diag.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-950 leading-tight">{diag.title}</h3>
                    <ul className="mb-2 flex-1 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                      {diag.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2">
                      <Link href={diag.link} className="inline-flex w-max items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-lg group">
                        View More Diagrams
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm col-span-full">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 uppercase border-b-2 border-slate-900 pb-2 inline-block mb-8">
              Internship
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { name: 'Community Development Office', detail: 'Communication and Coordination', icon: Users },
                { name: 'Somdetphraphutthaloetla Hospital', detail: 'IT Support', icon: Settings2 },
                { name: 'Bangkok Web Solution', detail: 'Frontend Developer', icon: Code2 }
              ].map((intern) => (
                <div key={intern.name} className="group relative flex items-start gap-5 rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-900/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition-transform group-hover:rotate-12">
                    <intern.icon size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-base font-black leading-tight text-slate-950">{intern.name}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">{intern.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="scroll-mt-24" id="education">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 uppercase">
              Education
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  degree: 'Bachelor of Engineering (Computer Engineering)',
                  school: 'Rajamangala University of Technology Thanyaburi',
                  years: '2023 - 2026',
                  icon: GraduationCap,
                  color: 'bg-[#eff6ff] text-[#2563eb]',
                  span: 'md:col-span-2'
                },
                {
                  degree: 'High Vocational Certificate (Software Developers)',
                  school: 'Samutsongkharm Technical College',
                  years: '2021 - 2023',
                  icon: BookOpen,
                  color: 'bg-[#f0fdfa] text-[#0d9488]',
                  span: ''
                },
                {
                  degree: 'Vocational Certificate (Information Technology)',
                  school: 'Samutsongkharm Technical College',
                  years: '2018 - 2021',
                  icon: School,
                  color: 'bg-[#f8fafc] text-[#475569]',
                  span: ''
                }
              ].map((edu, index) => (
                <div key={index} className={`flex items-center gap-6 rounded-[32px] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${edu.span}`}>
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${edu.color}`}>
                    <edu.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 leading-tight">{edu.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">{edu.school}</p>
                    <p className="mt-1 text-xs font-semibold tracking-wider text-slate-400">{edu.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div id="contactme" className="scroll-mt-24 relative overflow-hidden rounded-[48px] border border-slate-200 bg-white p-8 sm:p-12 shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-50 opacity-50 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-50 opacity-50 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* Left: Profile Image */}
              <div className="relative shrink-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-[40px] border-4 border-white shadow-xl rotate-3 transition-transform hover:rotate-0">
                  <img src="/my.jpg" alt="Wanutchaphorn" className="h-full w-full object-cover" />
                </div>
                <Sparkles className="absolute -top-4 -right-4 text-amber-400" size={32} />
                <Sparkles className="absolute -bottom-4 -left-4 text-blue-400" size={24} />
              </div>

              {/* Center: Name & Socials */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-black text-slate-950 sm:text-5xl">Wanutchaphorn</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
                  {[
                    { icon: Globe, link: '#' },
                    { icon: InstagramIcon, link: 'https://www.instagram.com/wncp.fah/' },
                    { icon: FacebookIcon, link: 'https://www.facebook.com/wanutchaporn.thongkham' },
                    { icon: GithubIcon, link: 'https://github.com/Wanutchaphorn' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target={social.link !== '#' ? "_blank" : undefined}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 transition hover:bg-slate-950 hover:text-white shadow-sm"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Contact Details */}
              <div className="w-full space-y-4 rounded-[32px] bg-slate-50 p-8 lg:max-w-md">
                {[
                  { icon: Mail, label: 'Email', value: 'fah.thongkham@gmail.com', link: 'mailto:fah.thongkham@gmail.com' },
                  { icon: Phone, label: 'Tel', value: '0918716674', link: 'tel:0918716674' },
                  { icon: MessageSquare, label: 'Line ID', value: 'fah0918716674', link: 'https://line.me/ti/p/w74kaLMFO' }
                ].map((item, i) => (
                  <a key={i} href={item.link} className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition group-hover:bg-slate-950 group-hover:text-white">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-sm font-black text-slate-900">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

