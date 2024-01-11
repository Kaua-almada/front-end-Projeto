import './HomeSite.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ProdutoHome from '../produtosHome/ProdutosHome';
import coxinha from '../../assets/imgs/shutterstock_1131390731.jpg';
import mistos from '../../assets/imgs/testes-removebg-preview.png';
import mistos2 from '../../assets/imgs/R.png'


function Home() {
  return (
    <div className="content">
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="carousel-image"
            src={coxinha}
            alt="Image 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={mistos2}
            alt="Image 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={mistos}
            alt="Image 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://img77.uenicdn.com/image/upload/v1570205026/service_images/shutterstock_374443780.jpg"
            alt="Image 4"
          />
        </Carousel.Item>
      </Carousel>
      <div>
      <ProdutoHome/>
      </div>
    </div>
  );
}

export default Home;
