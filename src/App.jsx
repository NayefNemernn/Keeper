import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Card from './components/Cards/Card'
import contacts from './components/Cards/contacts'

function App() {
  const contact1 = contacts[0]; // First contact
  const contact2 = contacts[1]; // Second contact
  return (
    <>
      <div className="cards-container">
        <Card
          name={contact1.name}
          imgURL={contact1.imgURL}
          phone={contact1.phone}
          email={contact1.email}
        />
        <Card
          name={contact2.name}
          imgURL={contact2.imgURL}
          phone={contact2.phone}
          email={contact2.email}
        />
        <Card
          name={contacts[2].name}
          imgURL={contacts[2].imgURL}
          phone={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>
    </>
  )
}

export default App
