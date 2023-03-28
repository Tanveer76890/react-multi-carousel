import React, { useEffect, useState } from "react";
import NetflixCard from "./NetflixCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const [myData, setMyData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "183318373fmsh4e1fc85b07110acp1d0f5ejsneab557b2a36e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  // api call method define here
  const fetchData = async () => {
    const res = await fetch(
      "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
      options
    );
    const data = await res.json();
    console.log(data);
    setMyData(data.titles);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  //   react-multi-carouser responise code here paste
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
        {myData.map((curData) => (
          <NetflixCard key={curData.summary.id} actualData={curData} />
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
