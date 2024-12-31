import { Github, Send, Code, Globe } from 'lucide-react';
import { LanguageSkill } from '../components/LanguageSkill';

export function Creator() {
  const languages = [
    { language: "German", proficiency: 100, color: "bg-primary" },
    { language: "English", proficiency: 99, color: "bg-secondary" },
    { language: "Spanish", proficiency: 70, color: "bg-accent" },
    { language: "Russian", proficiency: 10, color: "bg-highlight" }
  ];

  const codingSkills = [
    { language: "HTML/CSS", proficiency: 80, color: "bg-secondary" },
    { language: "Lua", proficiency: 70, color: "bg-primary" },
    { language: "Python", proficiency: 40, color: "bg-accent" },
    { language: "JavaScript", proficiency: 20, color: "bg-highlight" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-16">
            <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
              <img 
                src="https://s7.gifyu.com/images/SXpxx.gif"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">@41asus</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Hi, I'm @41asus, the creator of $PBP and $TWH. A tech enthusiast from Germany, I'm combining my love for finance and decentralized systems to build something extraordinary. When I'm not developing innovative projects, I'm exploring new ideas, gaming, or working on creative digital solutions.
              <br /><br />
              With $PBP, my goal is to empower people through financial freedom and bring fresh energy to the crypto space. Let's make decentralization fun and impactful! 🚀
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://t.me/41asus" className="nav-button bg-highlight text-white">
                <Send className="w-5 h-5 inline mr-2" />
                telegram
              </a>
              <a href="https://github.com/41asus" className="nav-button bg-gray-800 text-white">
                <Github className="w-5 h-5 inline mr-2" />
                github
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-primary">Languages</h2>
              </div>
              {languages.map((lang, index) => (
                <LanguageSkill key={index} {...lang} />
              ))}
            </div>

            {/* Coding Skills */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-primary">Coding Skills</h2>
              </div>
              {codingSkills.map((skill, index) => (
                <LanguageSkill key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
