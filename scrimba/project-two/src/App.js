import React from "react";
import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const cards = data.map((data) => {
    return (
      <Card
        title={data.title}
        location={data.location}
        googleMapsUrl={data.googleMapsUrl}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
        imageUrl={data.imageUrl}
      />
    );
  });
  return (
    <div className="pageWrapper">
      <Header />
      <div class="cardsWrapper">{cards}</div>
    </div>
  );
}

export default App;

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://unsplash.com/photos/WLxQvbMyfas",
