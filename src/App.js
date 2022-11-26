import Nav from './components/Nav'
import Sidebar from './components/sidebar'
import CardComponent from './components/cards'


const App = () =>
{
  return (
    <div className="flex flex-col">
      <div>
        <Nav />
      </div>
      <div className="flex flex-row bg-[#F4F4F4]">
      <Sidebar />
      <CardComponent />
      </div>
    </div>
    
  )
}

export default App