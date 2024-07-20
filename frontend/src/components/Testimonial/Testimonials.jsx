import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesTOShow: 1,
          SlidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Testimonial 1 */}
      <div className="testimonial py-4 px-3">
        <p>
          "The trekking experience with this website was absolutely amazing.
          Breath-taking views, knowledgeable guides, and seamless organization
          made it an unforgettable journey."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Adventurer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial py-4 px-3">
        <p>
          "I've trekked with many companies, but this one stands out. The
          attention to detail, safety measures, and friendly staff make it the
          best trekking platform out there."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Alice Smith</h6>
            <p>Nature Enthusiast</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial py-4 px-3">
        <p>
          "From the lush green landscapes to the challenging trails, every trek
          is a unique adventure. I highly recommend this platform for all
          nature lovers and thrill-seekers."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Robert Johnson</h6>
            <p>Outdoor Explorer</p>
          </div>
        </div>
      </div>

      {/* Add more testimonials as needed */}
    </Slider>
  );
};

export default Testimonials;
