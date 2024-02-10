import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const ApContext=createContext();

export function AppContextProvider({children}){

    const [loadingState,setLoadingState]=useState(true);
    const [currentPageNo,setCurrentPageNo]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const [blogsData,setBlogsData]=useState([]);


    async function fetchBlogsData(pageNo=1){
        const url=`${baseUrl}?page=${pageNo}`;
        try{
            setLoadingState(true);
            const responce=await fetch(url);
            const data=await responce.json();
            console.log(data);
            setCurrentPageNo(data.page);
            setTotalPages(data.totalPages);
            setBlogsData(data.posts);
        }
        catch(error){
            console.log(error);
        }
        setLoadingState(false);
    }

    function pageChangeHandler(pageNo){
        fetchBlogsData(pageNo);
    }

    const contextData={
        loadingState,
        setLoadingState,
        currentPageNo,
        setCurrentPageNo,
        totalPages,
        setTotalPages,
        blogsData,
        setBlogsData,
        fetchBlogsData,
        pageChangeHandler
    }


    return <ApContext.Provider value={contextData}>
        {children}
    </ApContext.Provider>
}