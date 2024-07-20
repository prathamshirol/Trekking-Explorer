import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext";
import Weathercard from "./weathercard";
import "../styles/weather.css";

export default function TourDetails() {
  const { id } = useParams();
  const reviewMsgRef = useRef("");

  const [tourRating, setTourRating] = useState(5);
  const { user } = useContext(AuthContext);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [destinationLocation, setDestinationLocation] = useState({ lat: 0, lng: 0 });
  const [tempInfo, setTempInfo] = useState({});
  
  //fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    maxGroupSize,
  } = tour || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  //added the review to the backend
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert('please sign in ');
        return;
      }

      const reviewobj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewobj),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        return;
      }
      // alert("Review submitted");\
      window.location.reload();

    } catch (err) {
      alert(err.message);
    }
  };

  // Function to get current location
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
       
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  };

  // Function to get destination location using OpenWeatherMap API
  const getDestinationLocation = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_api_key`;
      const response = await fetch(url);
      const data = await response.json();

      setDestinationLocation({
        lat: data.coord.lat,
        lng: data.coord.lon,
      });
    } catch (error) {
      console.error("Error getting destination location:", error);
    }
  };

  // Fetch weather information using OpenWeatherMap API
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=your_api_key`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCurrentLocation();
    getDestinationLocation();
    getWeatherInfo();
  }, [tour]);

  const shouldRenderMap = currentLocation.lat !== 0 && currentLocation.lng !== 0 && destinationLocation.lat !== 0 && destinationLocation.lng !== 0;

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={photo} alt="" />

                  <div className="tour_info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className="tour_rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-fill"
                          style={{ color: "var(--primary-color)" }}
                        ></i>{" "}
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>

                    <div className="tour_extra-details">
                      <span>
                        <i className="ri-map-pin-fill"></i> {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-fill"></i> ${" "}
                        {price} / per person
                      </span>
                      {/* <span>
                        <i className="ri-pin-distance-fill"></i> {distance} km
                      </span> */}
                      <span>
                        <i className="ri-group-2-fill"></i> {maxGroupSize}{" "}
                        people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* weather section */}
                  <div><Weathercard {...tempInfo} /></div> 
                  {shouldRenderMap && (
                    
     <div className="Bingmap">
      {shouldRenderMap && (
        <div style={{ height: '400px', width: '100%' }}>
          <MapContainer
            center={[currentLocation.lat, currentLocation.lng]}
            zoom={100}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy;'
            />
            <Marker position={[currentLocation.lat, currentLocation.lng]}/>
            <Marker position={[destinationLocation.lat, destinationLocation.lng]} />
          </MapContainer>
        </div>
      )}

   
      </div> 
        )}
                 
                 

<div className="tour_reviews mt-4">
  <h4>Reviews ({reviews?.length})</h4>

  <Form onSubmit={submitHandler}>
    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setTourRating(star)}
          className={tourRating >= star ? "filled" : ""}
        >
          {star} <i className="ri-star-s-fill"></i>
        </span>
      ))}
    </div>

    <div className="review_input">
      <input
        type="text"
        ref={reviewMsgRef}
        id="review"
        placeholder="Share your thoughts"
        required
      />
      <button
        className="btn primary__btn text-white"
        type="submit"
      >
        Submit
      </button>
    </div>
  </Form>

  <ListGroup className="user_review">
    {reviews?.map((review) => (
      <div className="review_item" key={review._id}>
        <img src={avatar} alt="" />

        <div className="w-100">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5>{review.username}</h5>
              <p>
                {new Date(review.createdAt).toLocaleDateString(
                  "en-US",
                  options
                )}
              </p>
            </div>
            <span className="d-flex align-items-center">
              {review.rating} <i className="ri-star-s-fill"></i>
            </span>
          </div>
          <h6>{review.reviewText}</h6>
        </div>
      </div>
    ))}
  </ListGroup>
</div>


                  {/* tour review section end */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
     
    </>
  );
}
