import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Theme } from "@/lib/contentTypes"

export function ModeToggle() {
  const [theme, setThemeState] = useState<
    Theme
  >("default")

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>Standard</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setThemeState("default")}>
          Charcoal
        </DropdownMenuItem>
        <DropdownMenuLabel>Dyed</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setThemeState("gold")}>
          Gold
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("black")}>
          Black
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("red")}>
          Red
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("orange")}>
          Orange
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("blue")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("purple")}>
          Purple
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("sand")}>
          Sand
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("yellow")}>
          Yellow
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("silver")}>
          Silver
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
