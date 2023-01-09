import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        {/* second router of the app. We only want the navbar in the section where we dont have the user loged in */}
        <Navbar/>

        <div className="container">

        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            {/* Navigate to Marvel if the path doesnt exist or its any other of the above */}
            <Route path="/" element={<Navigate to="/Marvel" />} />

        </Routes>

        </div>


    </>
  )
}
