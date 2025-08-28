"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-gray-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-sans">j6n</span>
            </div>
            <span className="text-xl font-light text-foreground">jae6s notes</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Research", id: "research" },
              { name: "Projects", id: "projects" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => alert("AI Assistant powered by RAG coming soon!")}
              className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 font-sans"
            >
              Ask My AI
            </button>
          </nav>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <section className="pt-24 pb-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
              Engineering Intelligence for Tomorrow's Infrastructure
            </h1>
            <p className="text-xl text-blue-600 italic mb-8 font-serif">
              From Civil Engineering to Computer Vision, Mobility & Weather Prediction
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-lg font-sans">
              I'm Jae-Sik Jeong, bridging traditional civil engineering with cutting-edge AI technologies. My research
              spans computer vision for infrastructure, autonomous mobility systems, and predictive weather modeling.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-sans"
              >
                Download CV
              </a>
              <a
                href="https://github.com/jaesik"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 font-sans"
              >
                View GitHub
              </a>
              <a
                href="#research"
                className="border-2 border-slate-600 text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300 font-sans"
              >
                Research Papers
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-10 rounded-lg shadow-sm">
            <blockquote className="text-2xl lg:text-3xl leading-relaxed text-slate-800 italic mb-6">
              "The future of infrastructure lies at the intersection of traditional engineering wisdom and AI
              innovation."
            </blockquote>
            <cite className="text-sm text-slate-600 text-right block font-sans">— Research Philosophy</cite>
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-4xl font-light text-slate-800">Research & Innovation</h2>
            <a href="#" className="text-blue-600 font-semibold hover:underline font-sans">
              View all research →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-10 border-l-4 border-l-blue-600 shadow-sm rounded-r-lg">
              <h3 className="text-2xl font-light mb-4 text-slate-800">Computer Vision for Smart Cities</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                Developing real-time infrastructure monitoring systems using satellite imagery and drone data. My work
                combines traditional structural analysis with deep learning to predict maintenance needs before failures
                occur.
              </p>
              <div className="flex gap-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-600">85%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-600">50+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Bridges Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-600">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Real-time Analysis</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border-l-4 border-l-emerald-600 shadow-sm rounded-r-lg">
              <h3 className="text-2xl font-light mb-4 text-slate-800">Autonomous Mobility & Weather Prediction</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                Integrating weather forecasting models with autonomous vehicle navigation systems. My research focuses
                on how environmental conditions affect infrastructure and mobility patterns in urban environments.
              </p>
              <div className="flex gap-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-600">92%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Weather Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-600">15min</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Prediction Window</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-600">3D</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-sans">Spatial Modeling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-4xl font-light text-foreground">Featured Projects</h2>
            <a href="#" className="text-blue-600 font-semibold hover:underline font-sans">
              View all projects →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-6xl text-white">
                🏗️
              </div>
              <div className="p-7">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-3 font-sans">
                  Infrastructure AI
                </div>
                <h3 className="text-xl font-light mb-3 text-slate-800">Smart Bridge Monitoring System</h3>
                <p className="text-slate-600 leading-relaxed mb-4 font-sans">
                  Computer vision system for real-time structural health monitoring using drone imagery and IoT sensors.
                  Predicts maintenance needs with 85% accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">OpenCV</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">PyTorch</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">
                    IoT Sensors
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-500 font-sans">Real-time monitoring</span>
                  <span className="text-xl text-blue-600">→</span>
                </div>
              </div>
            </article>

            <article className="bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg">
              <div className="h-56 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-6xl text-white">
                🚗
              </div>
              <div className="p-7">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3 font-sans">
                  Mobility Tech
                </div>
                <h3 className="text-xl font-light mb-3 text-slate-800">Weather-Aware Navigation</h3>
                <p className="text-slate-600 leading-relaxed mb-4 font-sans">
                  ML model that integrates real-time weather data with traffic patterns to optimize autonomous vehicle
                  routing in challenging weather conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">
                    TensorFlow
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">
                    Weather API
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">LSTM</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-500 font-sans">15min predictions</span>
                  <span className="text-xl text-emerald-600">→</span>
                </div>
              </div>
            </article>

            <article className="bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-6xl text-white">
                🌦️
              </div>
              <div className="p-7">
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-3 font-sans">
                  Weather AI
                </div>
                <h3 className="text-xl font-light mb-3 text-slate-800">Micro-Climate Prediction</h3>
                <p className="text-slate-600 leading-relaxed mb-4 font-sans">
                  High-resolution weather forecasting for urban environments using satellite data and ground sensors.
                  Focuses on construction and infrastructure impact assessment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">
                    Satellite Data
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">
                    Time Series
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-sans">GIS</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-500 font-sans">92% accuracy</span>
                  <span className="text-xl text-purple-600">→</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-foreground">My Journey</h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl leading-relaxed text-muted-foreground font-sans">
              My path to AI wasn't traditional. Starting with a degree in Civil Engineering from Dong-A University, I
              discovered the transformative potential of machine learning while working on infrastructure projects at
              Sambo Engineering.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground font-sans">
              What started as automating CAD drawing classification grew into a passion for applying AI to real-world
              engineering challenges. Currently enrolled in the Wanted Potenup Data/AI Bootcamp, I'm building the
              technical depth to match my domain expertise.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-8 py-8 border-b border-border">
              <span className="text-sm font-semibold text-muted-foreground min-w-[100px] font-sans">2022</span>
              <div>
                <h3 className="text-xl font-light mb-2 text-foreground">B.S. Civil Engineering</h3>
                <p className="text-muted-foreground font-sans">
                  Graduated from Dong-A University with focus on structural analysis and geotechnical engineering.
                </p>
              </div>
            </div>
            <div className="flex gap-8 py-8 border-b border-border">
              <span className="text-sm font-semibold text-muted-foreground min-w-[100px] font-sans">2023-2024</span>
              <div>
                <h3 className="text-xl font-light mb-2 text-foreground">Sambo Engineering & Construction</h3>
                <p className="text-muted-foreground font-sans">
                  Applied data science to engineering projects, discovering the potential of AI in infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-8 py-8">
              <span className="text-sm font-semibold text-muted-foreground min-w-[100px] font-sans">2024-Present</span>
              <div>
                <h3 className="text-xl font-light mb-2 text-foreground">Wanted Potenup Data/AI Bootcamp</h3>
                <p className="text-muted-foreground font-sans">
                  Intensive training in ML, deep learning, and LLM applications for real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-800 text-white py-16 px-6 mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-light mb-5">About This Portfolio</h3>
            <p className="text-slate-300 leading-relaxed font-sans">
              Showcasing the intersection of traditional civil engineering and modern AI technologies. My work focuses
              on practical applications that make infrastructure smarter and more resilient.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-5">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/jaesik"
                  className="text-slate-300 hover:text-white transition-colors font-sans"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/jaesik"
                  className="text-slate-300 hover:text-white transition-colors font-sans"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors font-sans">
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="mailto:your.email@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors font-sans"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-light mb-5">Research Areas</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors font-sans">
                  Computer Vision for Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors font-sans">
                  Autonomous Mobility Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors font-sans">
                  Weather Prediction Models
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors font-sans">
                  Smart City Technologies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <button
        onClick={() =>
          alert(
            "AI Assistant for engineering research coming soon! Ask about infrastructure AI, mobility tech, and weather prediction.",
          )
        }
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Open AI Assistant"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </button>
    </div>
  )
}
