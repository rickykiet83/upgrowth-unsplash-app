import React, { useEffect, useState } from 'react';

import ChevronUp from '../Icons/ChevronUp';
import classes from './ScrollToTop.module.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={classes.scroll_to_top}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <ChevronUp />
        </div>
      )}
    </div>
  );
}
