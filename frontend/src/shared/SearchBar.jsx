import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    if (location === "") {
      return alert("Location should be filled!");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}`
    );
    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="search">
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going"
                required
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
