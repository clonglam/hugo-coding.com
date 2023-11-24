"use client"

import Image from "next/image"
import React, { useState, useRef, FunctionComponent, useEffect } from "react"

interface Client {
  label: string
  logoUrl: string
}

interface CarouselProps {
  clients: Client[]
}

const Carousel: FunctionComponent<CarouselProps> = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const extendedClients = [...clients, ...clients.slice(0, 4)] // Extend clients array with the first 4 clients

  useEffect(() => {
    const goToNext = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
    const interval = setInterval(() => {
      if (currentIndex >= clients.length) {
        setCurrentIndex(0)
      } else {
        goToNext()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [clients.length, currentIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 25}%  )` }}
        >
          {extendedClients.map((client, index) => (
            <div key={index} className="flex-none w-1/4">
              <Image
                src={client.logoUrl}
                alt={client.label}
                className="fill-white"
                width={320}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
