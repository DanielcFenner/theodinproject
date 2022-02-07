import React from "react";

export default function Card(props) {
  return (
    <div class="cardWrapper">
      <img src={props.imageUrl}></img>
      <div class="cardTextWrapper">
        <div class="cardTextTitleWrapper">
          <i class="bi bi-geo-alt-fill"></i>
          <h5>{props.location}</h5>
          <a href={props.googleMapsUrl}>view on google maps</a>
        </div>
        <h3>{props.title}</h3>
        <strong>
          {props.startDate} - {props.endDate}
        </strong>
        <p class="cardDescription">{props.description}</p>
      </div>
    </div>
  );
}

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://unsplash.com/photos/WLxQvbMyfas",
