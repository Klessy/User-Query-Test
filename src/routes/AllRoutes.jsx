import { Routes, Route } from "react-router-dom";
import { HomePage, UserDetail, Search, PageNotFound } from "../pages/index";
import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
         <Route path="" element={<HomePage />}></Route>
         <Route path="user/:id" element={<UserDetail />}></Route>
         <Route path="search" element={<Search />}></Route>
         <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

