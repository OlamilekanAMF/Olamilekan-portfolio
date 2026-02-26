import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
// ScrollTrigger is registered once in App.tsx — no per-module registration needed

const skillCategories = [
  {
    name: 'Web Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 78 },
      { name: 'iOS (Swift)', level: 70 },
      { name: 'Android (Kotlin)', level: 72 },
    ],
  },
  {
    name: 'AI & Automation',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow', level: 82 },
      { name: 'OpenAI API', level: 88 },
      { name: 'Zapier', level: 95 },
      { name: 'n8n', level: 85 },
    ],
  },
  {
    name: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 82 },
      { name: 'Kubernetes', level: 75 },
    ],
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'TensorFlow', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
  'Git', 'Figma', 'Tailwind', 'GraphQL', 'Redis',
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.fromTo(
        '.skill-category',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Animate progress bars
      progressRefs.current.forEach((ref) => {
        if (ref) {
          const level = parseInt(ref.dataset.level || '0')
          gsap.fromTo(
            ref,
            { width: '0%' },
            {
              width: `${level}%`,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })

      // Animate tech stack pills
      gsap.fromTo(
        '.tech-pill',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-stack-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              that I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="skill-category p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const refIndex = catIndex * 10 + skillIndex
                    return (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white/80 text-sm">{skill.name}</span>
                          <span className="text-lime text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            ref={(el) => { progressRefs.current[refIndex] = el }}
                            data-level={skill.level}
                            className="h-full bg-gradient-to-r from-lime to-lime/70 rounded-full"
                            style={{ width: '0%' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Tech Stack
            </h3>
            <div className="tech-stack-grid flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="tech-pill px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-lime/10 hover:border-lime/30 hover:text-lime transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
