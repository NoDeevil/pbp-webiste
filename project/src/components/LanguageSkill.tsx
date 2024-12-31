interface LanguageSkillProps {
  language: string;
  proficiency: number;
  color: string;
}

export function LanguageSkill({ language, proficiency, color }: LanguageSkillProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-bold text-gray-700">{language}</span>
        <span className="text-gray-600">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
}
