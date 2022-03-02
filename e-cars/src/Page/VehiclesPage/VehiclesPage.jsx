import Header from "../../Components/Header/Header";
import SearchAudio from "../../Components/SearchAudio/SearchAudio";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./VehiclesPage.css"
import Menu2  from "../../Assets/Img/Menu2.png"
import Menu3  from "../../Assets/Img/Menu3.png"
import CarList from "../../Components/CarList/CarList";
const VehiclesPage = () =>{
  return (
    <div className="vehicles-page">
    <div className="vh-header">
    <Header />
      </div>         
         <div className="vehicles-main">
            <div className="container-fluid">
         <Sidebar />
          <div className="vehicles-box">
          <SearchAudio />
          <div className="">
              <div className="results-top">
                <h2 className="results-title">
                  Results Found:
                </h2>
                <ul className="results-list">
                  <li className="results-item">
                    <span className="results-span">
                      <a href="#" className="results-link">
                        <img className="results-icon" src={Menu2} alt="Menu2" />
                      </a>
                      <a href="#" className="results-link">
                        <img className="results-icon" src={Menu3} alt="Menu3" />
                      </a>
                      
                    </span>
                  </li>
                  <li className="results-item">
                    <p>
                      Sort by: <span className="sort-span">
                        Recommended
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <CarList />
         </div>
           </div>
          </div>
   
    </div>

    </div>
  )
}

export default VehiclesPage;