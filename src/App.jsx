import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
