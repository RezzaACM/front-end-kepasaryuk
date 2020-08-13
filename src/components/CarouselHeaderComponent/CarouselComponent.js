import React from 'react';
import './CarouselComponent.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselComponent = () => {
    return (
        <div>
            <OwlCarousel
                className="owl-theme"
                items={2} margin={20} autoplay={true} loop={true} center autoplayTimeout={3000}
            >
                <div className="item">
                    <img alt="image1" src="https://images.unsplash.com/photo-1591880856710-a812170a5795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
                </div>
                <div className="item">
                    <img alt="image2" src="https://images.unsplash.com/photo-1597136493814-54b433e8a995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="item">
                    <img alt="image2" src="https://images.unsplash.com/photo-1597136493814-54b433e8a995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="item">
                    <img alt="image2" src="https://images.unsplash.com/photo-1597136493814-54b433e8a995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                </div>
            </OwlCarousel>
        </div>
    );
};

export default CarouselComponent;