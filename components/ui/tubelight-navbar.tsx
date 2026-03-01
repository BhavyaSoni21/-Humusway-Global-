"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, Phone, Package, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  url: string
  icon: typeof Home
  children?: { name: string; url: string }[]
}

const navItems: NavItem[] = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: Info },
  {
    name: 'Products',
    url: '/products',
    icon: Package,
  },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: Phone },
]

export function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-sm">
      <div className="block md:hidden w-full bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-3 py-2">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <img src="/images/logo.png" alt="Logo" className="w-9 h-9 flex-shrink-0 object-contain" />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-base leading-tight">
                <span className="bg-gradient-to-b from-[#A0BF2D] to-[#20523B] bg-clip-text text-transparent">Humus</span><span className="bg-gradient-to-b from-[#287AB8] to-[#122343] bg-clip-text text-transparent">Way</span>
              </span>
              <span className="text-[10px] text-gray-500 leading-tight whitespace-nowrap">Global Export Pvt. Ltd.</span>
            </div>
          </Link>
          <button
            className="p-2 rounded-md border border-gray-300 bg-white shadow-md"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-2 px-4 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = item.url === '/' ? pathname === '/' : pathname === item.url || pathname.startsWith(item.url + '/')
              return (
                <Link
                  key={item.name}
                  href={item.url}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-base font-semibold transition-all duration-200",
                    "text-gray-700 hover:text-[#0477d1]",
                    isActive && "bg-[#edf6fc] text-[#0477d1]"
                  )}
                >
                  <Icon size={20} strokeWidth={2.5} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        )}
      </div>
      <div className="hidden md:block">
        {pathname === '/' ? (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-4 gap-4">
                {/* Logo and Company Name Section (no background card) */}
                <div className="flex items-center gap-4">
                  <Link href="/" className="group">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-28 h-28 md:w-32 md:h-32 relative flex-shrink-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/images/logo.png" 
                        alt="Humusway Global Logo" 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </Link>
                  <div className="flex flex-col gap-1">
                    <Link href="/" className="group">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight group-hover:opacity-90 transition-opacity">
                          <span className="bg-gradient-to-b from-[#A0BF2D] to-[#20523B] bg-clip-text text-transparent">Humus</span>
                          <span className="bg-gradient-to-b from-[#287AB8] to-[#122343] bg-clip-text text-transparent">Way</span>
                        </h1>
                      </motion.div>
                    </Link>
                    <p className="text-base md:text-lg text-gray-600 font-medium">Global Export Private Limited</p>
                  </div>
                </div>
                {/* Navigation Pills - aligned to right on Home, next to name */}
                <nav className="flex items-center gap-2 bg-white/60 border border-gray-200 rounded-full px-2 py-2 shadow-md">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = item.url === '/' 
                      ? pathname === '/' 
                      : pathname === item.url || pathname.startsWith(item.url + '/')
                    return (
                      <div key={item.name} className="relative group">
                        <Link
                          href={item.url}
                          className={cn(
                            "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200",
                            "text-gray-700 hover:text-[#0477d1]",
                            isActive && "bg-[#edf6fc] text-[#0477d1]",
                          )}
                        >
                          <span className="hidden md:inline">{item.name}</span>
                          <span className="md:hidden">
                            <Icon size={18} strokeWidth={2.5} />
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="lamp"
                              className="absolute inset-0 w-full bg-[#0477d1]/10 rounded-full -z-10"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 35,
                              }}
                            >
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0477d1] rounded-t-full">
                                <div className="absolute w-10 h-6 bg-[#0477d1]/15 rounded-full blur-sm -top-2 -left-1" />
                              </div>
                            </motion.div>
                          )}
                        </Link>
                        {item.children && (
                          <div className="absolute left-0 mt-2 hidden min-w-[220px] rounded-xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm group-hover:block">
                            <ul className="py-2">
                              {item.children.map((child) => (
                                <li key={child.name}>
                                  <Link
                                    href={child.url}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#edf6fc] hover:text-[#0477d1]"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="flex items-center justify-between h-20">
                {/* Logo and Company Name */}
                <Link href="/" className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 relative flex-shrink-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/images/logo.png" 
                      alt="Humusway Global Logo" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <div className="hidden sm:block">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h1 className="text-xl font-bold leading-tight">
                        <span className="bg-gradient-to-b from-[#A0BF2D] to-[#20523B] bg-clip-text text-transparent">Humus</span><span className="bg-gradient-to-b from-[#287AB8] to-[#122343] bg-clip-text text-transparent">way</span> <span className="text-gray-900">Global</span>
                      </h1>
                      <p className="text-sm text-gray-600">Export Private Limited</p>
                    </motion.div>
                  </div>
                </Link>
                {/* Navigation Items */}
                <nav className="flex items-center gap-2 bg-white/60 border border-gray-200 rounded-full px-2 py-2 shadow-md">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = item.url === '/' 
                      ? pathname === '/' 
                      : pathname === item.url || pathname.startsWith(item.url + '/')
                    return (
                      <div key={item.name} className="relative group">
                        <Link
                          href={item.url}
                          className={cn(
                            "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200",
                            "text-gray-700 hover:text-[#0477d1]",
                            isActive && "bg-[#edf6fc] text-[#0477d1]",
                          )}
                        >
                          <span className="hidden md:inline">{item.name}</span>
                          <span className="md:hidden">
                            <Icon size={18} strokeWidth={2.5} />
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="lamp"
                              className="absolute inset-0 w-full bg-[#0477d1]/10 rounded-full -z-10"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 35,
                              }}
                            >
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0477d1] rounded-t-full">
                                <div className="absolute w-10 h-6 bg-[#0477d1]/15 rounded-full blur-sm -top-2 -left-1" />
                              </div>
                            </motion.div>
                          )}
                        </Link>
                        {item.children && (
                          <div className="absolute left-0 mt-2 hidden min-w-[220px] rounded-xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm group-hover:block">
                            <ul className="py-2">
                              {item.children.map((child) => (
                                <li key={child.name}>
                                  <Link
                                    href={child.url}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#edf6fc] hover:text-[#0477d1]"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </header>
  )
}
