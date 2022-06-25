import React from 'react';

function Footer(){
    
    const year = new Date().getFullYear();
    console.log(year);

    return(<footer className="footer"><p>Copyright {year}</p></footer>);
}

export default Footer;