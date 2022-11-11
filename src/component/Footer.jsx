import React from 'react';

const currYear = new Date().getFullYear();
function Footer(){
    return <footer>
        <p>©️ {currYear}</p>
    </footer>
}

export default Footer;