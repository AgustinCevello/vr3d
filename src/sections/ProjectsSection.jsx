"use client"

// src/sections/ProjectsSection.jsx

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "./ProjectsSection.css"

import barbottoMini from "../assets/images/Barbotto_mini.webp"
import colomboMini from "../assets/images/Colombo_mini.webp"
import gutierrezMini from "../assets/images/Gutierrez_mini.webp"
import trafoMini from "../assets/images/Trafo_mini.webp"
import foroPaneles1Mini from "../assets/images/ForoPaneles1.webp"
import foroPaneles2Mini from "../assets/images/ForoPaneles2.webp"
import foroPaneles3Mini from "../assets/images/ForoPaneles3.webp"

import barbottoFull from "../assets/images/Barbotto_Full.webp"
import colomboFull from "../assets/images/Colombo_Full.webp"
import gutierrezFull from "../assets/images/Gutierrez_Full.webp"
import trafoFull from "../assets/images/Trafo_Full.webp"

import lupaImg from "../assets/images/Lupa.webp"

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

const ProjectsSection = ({ id }) => {
  const { t } = useTranslation()

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
      location: t('projects.items.fotovoltaica.location'),
      description: t('projects.items.fotovoltaica.description'),
      details: t('projects.items.fotovoltaica.details'),
      title: t('projects.items.fotovoltaica.title'),
    },
    {
      imageMini: barbottoMini,
      images: [barbottoFull],
      location: t('projects.items.barbotto.location'),
      description: t('projects.items.barbotto.description'),
      details: t('projects.items.barbotto.details'),
      title: t('projects.items.barbotto.title'),
    },
    {
      imageMini: colomboMini,
      images: [colomboFull],
      location: t('projects.items.colombo.location'),
      description: t('projects.items.colombo.description'),
      details: t('projects.items.colombo.details'),
      title: t('projects.items.colombo.title'),
    },
    {
      imageMini: gutierrezMini,
      images: [gutierrezFull],
      location: t('projects.items.gutierrez.location'),
      description: t('projects.items.gutierrez.description'),
      details: t('projects.items.gutierrez.details'),
      title: t('projects.items.gutierrez.title'),
    },
    {
      imageMini: trafoMini,
      images: [trafoFull],
      location: t('projects.items.trafo.location'),
      locationMobile: {
        line1: t('projects.items.trafo.locationMobile1'),
        line2: t('projects.items.trafo.locationMobile2'),
      },
      description: t('projects.items.trafo.description'),
      descriptionMobile: {
        line1: t('projects.items.trafo.descriptionMobile1'),
        line2: t('projects.items.trafo.descriptionMobile2'),
      },
      details: "",
      title: t('projects.items.trafo.title'),
    },
  ]

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
        <h2>{t('projects.heading')}</h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-nav-button prev"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            aria-label={t('projects.nav.prev')}
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
                      aria-label={t('projects.lightbox.expandImage', { title: project.title })}
                    >
                      <img
                        src={project.imageMini || "/placeholder.svg"}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <img src={lupaImg || "/placeholder.svg"} alt="Ampliar" className="zoom-icon" />
                        <span className="zoom-text">
                          {project.slides
                            ? t('projects.lightbox.viewPhotosVideo', { count: project.slides.length - 1 })
                            : project.images.length > 1
                            ? t('projects.lightbox.viewPhotos', { count: project.images.length })
                            : t('projects.lightbox.clickToZoom')}
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
            aria-label={t('projects.nav.next')}
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
                <button type="button" onClick={() => scrollToSlide(index)} aria-label={t('projects.nav.goTo', { index: index + 1 })}>
                  <span className="sr-only">{t('projects.nav.goTo', { index: index + 1 })}</span>
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