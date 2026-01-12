import * as React from "react"

/**
 * Hook to detect if the user prefers reduced motion.
 * Returns true if:
 * - User has enabled "prefers-reduced-motion: reduce" in system settings
 * - This respects accessibility preferences for users with vestibular disorders
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to detect if animations should be simplified for performance.
 * Returns true if user prefers reduced motion OR device is mobile.
 * Use this for heavy animations like infinite floats, 3D transforms, etc.
 */
export function useShouldReduceAnimations() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      // Check for mobile via viewport width and touch capability
      const isMobileViewport = window.innerWidth < 768
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsMobile(isMobileViewport && hasTouchScreen)
    }

    checkMobile()

    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const onChange = () => checkMobile()

    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [])

  return prefersReducedMotion || isMobile
}
