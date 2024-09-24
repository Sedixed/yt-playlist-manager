import { useState } from "react"
import { Theme } from "../types"

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark")

  return {
    theme,
    setTheme,
  }
}