import highlights from "@/ad-hoc";
import educations from "@/education";
import experiences from "@/experiences";
import projects from "@/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[38rem] mx-auto mt-12 px-2">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <Image
            src="/profileImage.jpg"
            alt="profile image"
            width={64}
            height={64}
            className="rounded-lg"
          />
        </Link>
        <div className="flex flex-col items-start">
          <p className="text-xl font-[500] text-[#1A1A1A] tracking-tight">
            Nikhil
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Software Engineer | 20 something year old |  </span>
            <Link href="https://github.com/BeNikk" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 hover:text-black" />
            </Link>
            <Link href="https://www.linkedin.com/in/nikhil-bhatt-3b37a0255/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 hover:text-black" />
            </Link>
            <Link href="https://x.com/Be_Nikkk" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 hover:text-black" />
            </Link>
          </div>

        </div>

      </div>

      <div className="mt-2 h-px bg-gray-100" />
      <div className="mt-4 space-y-2">
        <p className="text-[14px] text-gray-700 leading-relaxed">
          I make things. Web, apps, backends, whatever needs building.
        </p>
        <p className="text-[14px] text-gray-700 leading-relaxed">
          I work remotely, jump into projects I like, and build stuff along the way.
          Outside of work, I run, sometimes cricket, hit the gym, speak here and there, and talk to people who have stories to tell.
        </p>
      </div>

      <div className="mt-6 h-px bg-gray-100" />

      <div className="mt-6">
        <h2 className="text-base text-md font-[500] text-[#1A1A1A] mb-4">
          Cool places I’ve worked at
        </h2>

        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    {exp.title}
                  </p>
                  <p className="text-xs text-gray-500">{exp.description}</p>
                </div>
              </div>
              <Link
                href={exp.link}
                className="text-xs mx-1 text-gray-600 hover:text-black"
              >
                Link
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-base text-md font-[500] text-[#1A1A1A] mb-4">
          Education
        </h2>

        <div className="space-y-3">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={edu.image}
                  alt={edu.name}
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{edu.name}</p>
                  <p className="text-xs text-gray-500">
                    {edu.degree} | {edu.duration} | {edu.grade}
                  </p>
                  <p className="text-xs mt-1 text-gray-500">{edu.brief}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">Stuff I've built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
            >
              <Image
                src={proj.image}
                alt={proj.name}
                width={400}
                height={200}
                className="rounded-md mb-3 object-cover"
              />
              <p className="text-sm font-medium text-[#1A1A1A]">{proj.name}</p>
              <p className="text-xs text-gray-500 mb-2">{proj.description}</p>
              <p className="text-xs text-gray-400 mb-2">{proj.tech}</p>
              <Link
                href={proj.link}
                className="text-xs text-gray-600 hover:text-black"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">Ad-hoc</h2>

        <div className="space-y-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
              {item.link && (
                <Link
                  href={item.link}
                  className="text-xs mx-1 text-gray-600 hover:text-black"
                >
                  Link
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Nikhil Bhatt
      </div>
      <br />
      <br />
    </div>
  );
}
