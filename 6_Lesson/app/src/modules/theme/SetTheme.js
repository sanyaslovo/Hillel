import React, { useContext } from 'react';
import { themeContext } from '../../contexts/themeContext';

export default function SetTheme() {
    const setTheme = useContext(themeContext);

    function changeTheme(e) {
        setTheme(e.target.checked ? 'dark' : 'lite')
    }
    return (
        <div className='toggle_theme'>
            <label htmlFor="theme" >
                <input name='theme' type="checkbox" onChange={(e) => changeTheme(e)}/>
                    <span className="switcher"></span>
            </label>
        </div>
    )
}