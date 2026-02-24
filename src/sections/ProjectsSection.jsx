"use client"

// src/sections/ProjectsSection.jsx

import { useState, useEffect, useRef } from "react"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "./ProjectsSection.css"

import barbottoMini from "../assets/images/Barbotto_mini.png"
import colomboMini from "../assets/images/Colombo_mini.png"
import gutierrezMini from "../assets/images/Gutierrez_mini.png"
import trafoMini from "../assets/images/Trafo_mini.png"
import foroPaneles1Mini from "../assets/images/ForoPaneles1.png"
import foroPaneles2Mini from "../assets/images/ForoPaneles2.png"
import foroPaneles3Mini from "../assets/images/ForoPaneles3.png"

import barbottoFull from "../assets/images/Barbotto_Full.png"
import colomboFull from "../assets/images/Colombo_Full.png"
import gutierrezFull from "../assets/images/Gutierrez_Full.png"
import trafoFull from "../assets/images/Trafo_Full.png"

import lupaImg from "../assets/images/Lupa.png"

// Slide personalizado para YouTube
const YoutubeSlide = ({ slide, offset }) => {
  const isActive = offset === 0

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {isActive ? (
        <iframe
          width="90%"
          height="80%"
          src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px", maxWidth: "900px", maxHeight: "520px" }}
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${slide.videoId}/mqdefault.jpg`}
          alt="Video"
          style={{ borderRadius: "8px", maxWidth: "900px", maxHeight: "520px", objectFit: "cover" }}
        />
      )}
    </div>
  )
}

// Thumbnail personalizado para YouTube
const YoutubeThumbnail = ({ slide }) => (
  <img
    src={`https://img.youtube.com/vi/${slide.videoId}/mqdefault.jpg`}
    alt="Video thumbnail"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
)

const isYoutubeSlide = (slide) => slide.type === "youtube"

const projectsData = [
  {
    imageMini: foroPaneles3Mini,
    images: [foroPaneles3Mini, foroPaneles2Mini, foroPaneles1Mini],
    slides: [
      { src: foroPaneles3Mini },
      { src: foroPaneles2Mini },
      { src: foroPaneles1Mini },
      { type: "youtube", videoId: "7gwd_xy8p-s" },
    ],
    location: "San Justo, Provincia de Buenos Aires.",
    description: "Instalación fotovoltaica residencial de 6,35 kWp.",
    details: "Enero de 2026.",
    title: "Instalación Fotovoltaica",
  },
  {
    imageMini: barbottoMini,
    images: [barbottoFull],
    location: "Edificio Barbotto, Buenos Aires, Argentina.",
    description: "Cálculo de la estructura de hormigón armado y sus fundaciones.",
    details: "10 niveles.",
    title: "Edificio Barbotto",
  },
  {
    imageMini: colomboMini,
    images: [colomboFull],
    location: "Edificio Colombo, Buenos Aires, Argentina.",
    description: "Cálculo de la estructura de hormigón armado y sus fundaciones.",
    details: "3 niveles.",
    title: "Edificio Colombo",
  },
  {
    imageMini: gutierrezMini,
    images: [gutierrezFull],
    location: "Edificio Gutierrez, Buenos Aires, Argentina.",
    description: "Cálculo de la estructura de hormigón armado y sus fundaciones.",
    details: "4 niveles.",
    title: "Edificio Gutierrez",
  },
  {
    imageMini: trafoMini,
    images: [trafoFull],
    location: "Base para transformador de media tensión, Buenos Aires, Argentina.",
    locationMobile: {
      line1: "Base para transformador de media tensión,",
      line2: "Buenos Aires, Argentina.",
    },
    description: "Cálculo estructural, planos de encofrados y armaduras.",
    descriptionMobile: {
      line1: "Cálculo estructural, planos",
      line2: "de encofrados y armaduras.",
    },
    details: "",
    title: "Base Transformador",
  },
]

const ProjectsSection = ({ id }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSlides, setLightboxSlides] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const itemWidth = carouselRef.current.querySelector(".project-slide")?.offsetWidth || 0
      if (itemWidth > 0) {
        const newIndex = Math.round(scrollLeft / itemWidth)
        setActiveIndex(newIndex)
      }
    }
  }

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector(".project-slide")?.offsetWidth || 0
      if (itemWidth > 0) {
        carouselRef.current.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        })
      }
    }
  }

  const goToPrevious = () => {
    const newIndex = Math.max(0, activeIndex - 1)
    scrollToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = Math.min(projectsData.length - 1, activeIndex + 1)
    scrollToSlide(newIndex)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      handleScroll()
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const openLightbox = (project) => {
    const slides = project.slides || project.images.map((src) => ({ src }))
    setLightboxSlides(slides)
    setLightboxIndex(0)
    setLightboxOpen(true)
  }

  const formatDescription = (project) => {
    if (project.descriptionMobile) {
      return {
        firstLine: project.descriptionMobile.line1,
        secondLine: project.descriptionMobile.line2,
      }
    }
    const words = project.description.split(" ")
    const midPoint = Math.ceil(words.length / 2)
    return {
      firstLine: words.slice(0, midPoint).join(" "),
      secondLine: words.slice(midPoint).join(" "),
    }
  }

  const formatLocation = (project) => {
    if (project.locationMobile) {
      return {
        firstLine: project.locationMobile.line1,
        secondLine: project.locationMobile.line2,
      }
    }
    return { firstLine: project.location, secondLine: null }
  }

  return (
    <section id={id} className="projects-section">
      <div className="section-content">
        <h2>Proyectos Realizados</h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-nav-button prev"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            aria-label="Proyecto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="carousel-container" ref={carouselRef}>
            {projectsData.map((project, index) => {
              const { firstLine, secondLine } = formatDescription(project)
              const locationFormatted = formatLocation(project)

              return (
                <div key={index} className="project-slide">
                  <div className="project-card-carousel">
                    <div
                      className="project-image-wrapper"
                      onClick={() => openLightbox(project)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") openLightbox(project)
                      }}
                      aria-label={`Ampliar imagen del proyecto ${project.title}`}
                    >
                      <img
                        src={project.imageMini || "/placeholder.svg"}
                        alt={`Proyecto ${project.location}`}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <img src={lupaImg || "/placeholder.svg"} alt="Ampliar" className="zoom-icon" />
                        <span className="zoom-text">
                          {project.slides
                            ? `Ver ${project.slides.length - 1} fotos + video`
                            : project.images.length > 1
                            ? `Ver ${project.images.length} fotos`
                            : "Click para ampliar"}
                        </span>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p className="project-location">
                        <strong className="location-full">{project.location}</strong>
                        <strong className="location-mobile">
                          {locationFormatted.firstLine}
                          {locationFormatted.secondLine && (
                            <>
                              <br />
                              {locationFormatted.secondLine}
                            </>
                          )}
                        </strong>
                      </p>
                      <p className="project-description">
                        <span className="description-full">{project.description}</span>
                        <span className="description-mobile">
                          {firstLine}
                          <br />
                          {secondLine}
                        </span>
                      </p>
                      {project.details && <p>{project.details}</p>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            className="carousel-nav-button next"
            onClick={goToNext}
            disabled={activeIndex === projectsData.length - 1}
            aria-label="Proyecto siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="slick-dots-container">
          <ul>
            {projectsData.map((_, index) => (
              <li key={index} className={index === activeIndex ? "slick-active" : ""}>
                <button type="button" onClick={() => scrollToSlide(index)} aria-label={`Ir al proyecto ${index + 1}`}>
                  <span className="sr-only">Proyecto {index + 1}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
          plugins={[Zoom, Thumbnails]}
          closeOnBackdropClick
          zoom={{
            maxZoomPixelRatio: 4,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            scrollToZoom: true,
          }}
          thumbnails={{
            position: "bottom",
            width: 80,
            height: 60,
            gap: 8,
          }}
          render={{
            slide: (props) =>
              isYoutubeSlide(props.slide) ? <YoutubeSlide slide={props.slide} offset={props.offset} /> : undefined,
            thumbnail: (props) =>
              isYoutubeSlide(props.slide) ? <YoutubeThumbnail slide={props.slide} /> : undefined,
          }}
        />
      </div>
    </section>
  )
}

export default ProjectsSection