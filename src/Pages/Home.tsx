
import HeroSection from '../component/HeroSection/HeroSection'
import Services from '../component/Services/Services'
import Tours from '../component/Tours/Tours'
import { useState } from "react";
import { toursList } from "../data/toursList";
import SortInput from "../component/SortInput/SortInput";


const Home = () => {
  const [sortItem, setSortItem] = useState("recomended");

  return (
    <div>
    <HeroSection/>
    <Services/>
    <SortInput
        setSortItem={setSortItem}
        sortItem={sortItem}
        toursLength={toursList.length}
      />
     <Tours/>
    </div>
  )
}

export default Home
