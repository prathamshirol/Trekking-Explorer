import React from "react";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: 2000,
    slidesToShow: 4,

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
      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
         
          <div>
            <h6 className="mb-0 mt-3">Sagar</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Pratham</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Rohit</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Aditya</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>
      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
         
          <div>
            <h6 className="mb-0 mt-3">Sagar</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Pratham</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Rohit</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

      <div className="team py-4 px-3">
        <div className="team_Name d-flex align-items-center gap-4 mt-3">
          <div>
            <h6 className="mb-0 mt-3">Aditya</h6>
            <p>Developer</p>
          </div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione
          saepe! Laboriosam, libero sunt illo quia perferendis hic, illum
          officiis provident quae nihil mollitia delectus maxime eum. Tempora,
          illo veritatis.
        </p>
      </div>

    </Slider>
  );
};

export default Team;
