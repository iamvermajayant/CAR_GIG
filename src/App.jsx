import Footer from "./compoents/ui/Footer"
import Navbar from "./compoents/ui/Navbar"
import Services from "./pages/Services"

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0c1014] to-[#082134]">
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
