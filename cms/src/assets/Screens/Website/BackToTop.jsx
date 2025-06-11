import React, { useEffect } from 'react';
import $ from 'jquery';
 // Import jQuery easing for smooth scrolling

const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      if ($(window).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    };

    const handleClick = () => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    };

    $(window).on('scroll', handleScroll);
    $('.back-to-top').on('click', handleClick);

    // Cleanup function to remove event listeners
    return () => {
      $(window).off('scroll', handleScroll);
      $('.back-to-top').off('click', handleClick);
    };
  }, []);

  return (
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top" style={{ display: 'none', position: 'fixed', bottom: '25px', right: '25px', zIndex: 99 }}>
      <i className="fas fa-arrow-up"></i> {/* Replace with your icon */}
    </a>
  );
};

export default BackToTop;