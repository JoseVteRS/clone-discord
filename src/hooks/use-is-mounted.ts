import { useEffect, useRef, useState } from "react"



export const useIsMounted = () => {
  const [isMounted, setisMounted] = useState(false)

  useEffect(() => {
    setisMounted(true)
  }, [])

  return isMounted
}