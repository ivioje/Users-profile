import React, { useState } from 'react';
import { ThemeProvider } from "styled-components"

const ToggleTheme = () => {
    const [theme, setTheme] = useState["light"];
    const toggle =() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return ( 
        <div></div>
     );
}
 
export default ToggleTheme;