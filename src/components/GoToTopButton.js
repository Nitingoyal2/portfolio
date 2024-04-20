import React, { useState, useEffect } from 'react';
import "../styles/gototopbutton.css"
import { Button } from 'react-bootstrap';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className='gototop-wrapper'>


                {isVisible && (
                    <Button className="go-top-button" onClick={scrollToTop}>
                        <ArrowUpwardIcon />
                    </Button>
                )}
            </div>
        </>
    )
}

export default GoToTopButton
