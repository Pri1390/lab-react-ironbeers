import { Link } from "react-router-dom";
import beersPhoto from "../assets/beers.png";
import newBeerPhoto from "../assets/new-beer.png";
import randomBeerPhoto from "../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <img src={beersPhoto} alt="beers" />
      <Link to="/beers">
        <h2> All Beers </h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet. Ut officiis facilis sit error doloremque aut
        voluptatum voluptates.
      </p>

      <img src={newBeerPhoto} alt="newbeers" />
      <Link to="/new-beer">
        <h2> New Beer </h2>
      </Link>
      <p>
        Est natus velit eum quas Quis qui laborum maxime ut suscipit magnam. Aut
        cupiditate quas sed deserunt inventore ut magnam repudiandae.
      </p>

      <img src={randomBeerPhoto} alt="randomBeer" />
      <Link to="/randon-beer">
        <h2> Random Beer </h2>
      </Link>
      <p>
        Est accusantium distinctio nam repellendus exercitationem sit nemo omnis
        a consequatur laboriosam et pariatur internos eos porro tenetur.
      </p>
    </div>
  );
}

export default HomePage;
