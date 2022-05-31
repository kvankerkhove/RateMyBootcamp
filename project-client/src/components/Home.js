
import BootcampItem from './BootcampItem'

function Home({bootcamps}) {

    const renderBootcamps = bootcamps.map(bootcamp => {
      return <BootcampItem key={bootcamp.id} bootcamp={bootcamp}/>
    })
  return (
    <div className="home">
      {renderBootcamps}
    </div>
  )
}

export default Home