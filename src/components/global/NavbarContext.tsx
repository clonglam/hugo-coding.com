"use client"
import React, { createContext, useState, useContext, ReactNode } from "react"

interface NavbarContextType {
  isOpen: boolean
  toggleNavbar: () => void
}

const defaultContextValue: NavbarContextType = {
  isOpen: false, // Default value for isOpen
  toggleNavbar: () => {}, // Stub function as a placeholder
}

const NavbarContext = createContext<NavbarContextType>(defaultContextValue)

export const useNavbarContext = () => useContext(NavbarContext)

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  )
}
