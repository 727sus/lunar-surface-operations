import { extendTheme } from "@chakra-ui/react"

// Color mode config
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
}

// Theme settings
const theme = extendTheme({ 
    config,
    colors: {
        brand: {
            highlight: "#A6FFF2",
            accent1:"#FFB3B3",
            accent2: "#6BB3A8",
            tertiary: "#A0AEC0",
            secondary: "#2D3748",
            primary: "#1A202C"
        },
    },
    sizes: {
        maxWidth: "150ch"
    }
})

export default theme