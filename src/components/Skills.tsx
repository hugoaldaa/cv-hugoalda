import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Server, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const skillIcons = [Code2, Server, User, User];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillIcons.map((Icon, index) => {
            const category = t.skills.categories[index];
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-slate-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
