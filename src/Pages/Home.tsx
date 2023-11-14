import { useState } from "react";
import { toursList } from "../data/toursList";
import { paginate } from "../utils/paginate.jsx";
import HeroSection from "../component/HeroSection/HeroSection";
import Pagination from "../component/Pagination/Pagination";
import Services from "../component/Services/Services.js";
import SortInput from '../component/SortInput/SortInput.js';
import TourList from '../component/Tours/Tours.js';


const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended");

  // Sort Tour
  const sortedTourList = 
    sortItem === "low" 
    ? toursList.sort((a,b) => a.priceFrom - b.priceFrom)
    : sortItem === "high" ? toursList.sort((a,b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a,b) => b.rating - a.rating);

    const { pages, orderedTourList } = paginate(
      sortedTourList.length,
      sortedTourList,
      currentPage
    );
    
  return (
    <div>
      <HeroSection />
      <Services />
      <SortInput
        setSortItem={setSortItem}
        sortItem={sortItem}
        toursLength={toursList.length}
      />
      <TourList toursList={orderedTourList} />
      {/* <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
     */}
    </div>
  );
};

export default Home;