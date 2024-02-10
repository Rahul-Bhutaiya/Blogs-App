import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { ApContext } from "./context/AppContext";
import './App.css';

export default function App() {

  const {fetchBlogsData,blogsData}=useContext(ApContext);

  useEffect(()=>{
    fetchBlogsData();
  },[]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blogs/>
      {
        blogsData.length !==0 ? (<Footer/>):(null)
      }
      
    </div>
  );
}
