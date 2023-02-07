const media = {
    phone: {
        landscape: `@media (min-width: 480px) and (max-width: 767px)`,
        portrait: `@media (min-width: 5px) and (max-width: 479px)`,
    },
    tablet: {
        landscape: `@media (min-width: 768px) and (max-width: 991px)`,
        portrait: `@media (min-width: 480px) and (max-width: 767px)`,
    },
    desktop: {
        landscape: `@media (min-width: 992px) and (max-width: 1199px)`,
        portrait: `@media (min-width: 768px) and (max-width: 991px)`,
    },
    largeDesktop: {
        landscape: `@media (min-width: 1200px)`,
        portrait: `@media (min-width: 992px) and (max-width: 1199px)`,
    },
    isMobile: (width: number) => (width <= 860),
    scrollHighlight: {
        horizontal: `
          background-image: linear-gradient(to right, white, white),
          linear-gradient(to right, white, white),
          linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
          linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
          background-position: left center, right center, left center, right center;
          background-repeat: no-repeat;
          background-color: white;
          background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
          background-attachment: local, local, scroll, scroll;
        `,
        vertical: `
          background-image: linear-gradient(to top, white, white),
          linear-gradient(to top, white, white),
          linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
          background-position: bottom center, top center, bottom center, top center;
          background-color: white;
          background-repeat: no-repeat;
          background-size: 100% 20px, 100% 20px, 100% 10px, 100% 10px;
          background-attachment: local, local, scroll, scroll;
        `
    }
};

export default media;