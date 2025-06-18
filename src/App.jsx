// import { useEffect, useState } from 'react'
// import {FetchId} from './FetchId.jsx'


// function App() {
//   const[data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const Apiurl = "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/auth/get-website-by-uid/PRJ00003";

//   useEffect(() => {
//     const fetchData = async () =>{
//       setLoading(true);
//       try{
//         const response = await fetch(Apiurl);
//         if(!response.ok){
//           throw new Error("failed to fetch data");
//         }
//         const result = await response.json();
        
//         setData(result?.data || {});
//         console.log(result?.data || {});
        
//       }catch (error){
//         setError(error);
//     }finally{
//         setLoading(false);
//       }
//     };

//     fetchData();
//   },[])
//   if(loading){
//     return <div>Loading...</div>
//   }
//   if(error){
//     return <div>Error: {error.message}</div>
//   }
//   return (
//     <>
//       <h2>data</h2>
//       <ul>
//   <li key={data._id}>{data.basicDetails.name}</li>
// </ul>


//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from './pages/BlogPage.jsx';
import Gallery from "./pages/Gallery.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Bookseat from "./pages/Bookseat.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import LocationDetails from "./pages/LocationDetails.jsx";
function App() {
  return (
    <Router>
      
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path = "/gallery" element = {<Gallery/>}/>
        <Route path="/gallery/:title?" element={<Gallery />} />
        <Route path = "/bookseat" element = {<Bookseat/>}/>
        <Route path = "/services" element = {<ServicesPage/>}/>
         <Route path = "/contact" element = {<ContactPage/>}/>
         <Route path = "/locations" element = {<LocationPage/>}/>
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/location/:slug" element={<LocationDetails />} />

      </Routes>
    </Router>
  );
}

export default App;