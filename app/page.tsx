import experiences from "@/experiences";
import Image from "next/image";
import Link from "next/link";

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
        <div>
          <p className="text-xl font-[500] text-[#1A1A1A] tracking-tight">
            Nikhil
          </p>
          <p className="text-sm text-gray-500">
            Software Engineer | 20 something year old
          </p>
        </div>
      </div>

      <div className="mt-2 h-px bg-gray-100" />
      <div className="mt-4 space-y-2">
        <p className="text-[14px] text-gray-700 leading-relaxed">
          I make things. Web, apps, whatever needs building.
        </p>
        <p className="text-[14px] text-gray-700 leading-relaxed">
          I work remotely, jump into projects I like, and build stuff along the way.
          Outside of work, I run, sometimes cricket, hit the gym, speak here and there, and talk to people who have stories to tell.
        </p>
      </div>
      <div className="mt-4">
        <Link
          href="/about"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          More about me →
        </Link>
      </div>
      <div className="mt-6 h-px bg-gray-100" />

      <div className="mt-6">
        <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">
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
    </div>
  );
}
