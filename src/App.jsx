import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import OfflineBackdrop from "./components/OfflineBackdrop"
import useOnline from "./utils/useOnline"

function App() {
  let onlineStatus = useOnline()
  return (
    <>
      {!onlineStatus && <OfflineBackdrop />} 
      {/* 
        When the user is offline (onlineStatus is false), the OfflineBackdrop component is rendered.
        When the user is online (onlineStatus is true), nothing is rendered.
      */}
      
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
