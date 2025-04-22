import Header from "./layout/Header"
import TopNavbar from "./layout/TopNavbar"
 import Home from "./pages/Home"


export default function App() {


  console.log('App Rendered')
  
  
  return (
    <div className="h-screen bg-orange-100 text-sky-900 font">
      <Header />
      
      <TopNavbar />

      <Home />
    </div>
  )
}
