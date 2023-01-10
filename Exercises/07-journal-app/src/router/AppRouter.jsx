import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"


export const AppRouter = () => {
  return (
    <Routes>

        {/* Any route that goes trough /auth, points to AuthRoutes */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Any other route, points to JournalRoutes  */}
        <Route path="/*" element={<JournalRoutes />} />


    </Routes>
  )
}
