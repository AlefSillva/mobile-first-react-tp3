import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


const cardData = [
  {
    id: 1,
    title: "Tópico 1",
    description: "Uma vista emocionante para se guardar na memória.",
    imageUrl: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 2,
    title: "Tópico 2",
    description: "Descubra belas imagens para se apreciar.",
    imageUrl: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    title: "Tópico 3",
    description: "Aproveite uma tarde tranquila para ver a beleza da natureza.",
    imageUrl: "https://picsum.photos/400/250?random=3"
  },
  {
    id: 4,
    title: "Tópico 4",
    description: "Observe de perto a beleza natural desta imagem.",
    imageUrl: "https://picsum.photos/400/250?random=4"
  },
  {
    id: 5,
    title: "Tópico 5",
    description: "Uma jornada para apreciar uma verdadeira obra de arte.",
    imageUrl: "https://picsum.photos/400/250?random=5"
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <main className="main">

          <div className="card-item">
            {cardData.map(({imageUrl, title, description}, i) => (
              <>
              <Card key={i} imgUrl={imageUrl} title={title} description={description} />
              <Button/>
              </>
            ))}
          </div>
        </main>

        <aside>
          <Sidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default App;
