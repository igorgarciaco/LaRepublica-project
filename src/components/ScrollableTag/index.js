import React, { useState, useEffect } from "react"

import dot from "../../images/icons/polygon-dot.png"

import "./style.css"

const ScrollableTag = () => {
    const [theme, setTheme] = useState(null)

    const isLightMode = theme === 'light'

    useEffect(() =>{
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])
    let clicks = 1
    return (
        <>
            <div className="scroll" onClick={() => {
                window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
            }}>
                <span>Scroll</span>
                <img src={dot} className="dot" />
            </div>
            <div className="line"></div>
        </>
    )
}

export default ScrollableTag