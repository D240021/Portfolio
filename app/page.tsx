"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Download, ExternalLink, Mail, MapPin, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { translations } from "@/lib/utils"
import { projectsData } from "@/lib/utils"
import { technologies } from "@/lib/utils"
import { media } from "@/lib/utils"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState<"es" | "en">("es")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const downloadCV = () => {
    alert(translations[language].downloadAlert)
  }

  const t = translations[language]
  const projects = projectsData[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-purple-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.portfolio}
          </h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:scale-110 transition-transform duration-200 bg-transparent"
              aria-label={`Switch to ${language === "es" ? "English" : "Español"}`}
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full hover:scale-110 transition-transform duration-200 bg-transparent"
              aria-label={darkMode ? t.lightMode : t.darkMode}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">
                  {language === "es" ? "DB" : "DB"}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-fade-in">
              {t.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.title}</p>
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{t.location}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
              onClick={() => window.open(media[0].url, "_blank")}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
              onClick={() => window.open(media[1].url, "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200"
              onClick={downloadCV}
            >
              <Download className="h-4 w-4 mr-2" />
              {t.downloadCV}
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.aboutTitle}
          </h3>
          <Card className="max-w-4xl mx-auto border-purple-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText1}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">{t.aboutText2}</p>
            </CardContent>
          </Card>
        </section>

        {/* Technologies Section */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.technologiesTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech : any, index : number) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className={`${tech.color} text-white hover:scale-110 transition-transform duration-200 cursor-pointer text-sm py-2 px-4`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.projectsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border-purple-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.repositoryUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
                        onClick={() => window.open(project.repositoryUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t.repository}
                      </Button>
                    )}
                    {project.websiteUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-pink-50 dark:hover:bg-pink-900/20 bg-transparent"
                        onClick={() => window.open(project.websiteUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.viewSite}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6 pb-12">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.contactTitle}
          </h3>
          <Card className="max-w-2xl mx-auto border-purple-200 dark:border-gray-700">
            <CardContent className="p-8 text-center space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">{t.contactText}</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200 bg-transparent"
                  onClick={() => window.open(`mailto:${media[2].url}`)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {t.sendEmail}
                </Button>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200"
                  onClick={() => window.open(media[0].url, "_blank")}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  {t.connectLinkedIn}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-purple-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; 2024 {t.name}. {t.footerText}.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  )
}
