import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Platform from "./Platform";
import Region from "./Region";
import Tag from "./Tag";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:platform" element={<Platform />} />
        <Route path="/:platform/:region" element={<Region />} />
        <Route path="/:platform/:region/:tag" element={<Tag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
