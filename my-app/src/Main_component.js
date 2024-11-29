import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function App() {
  const categories = [
    { id: "popular", title: "Popular on Netflix", images: Array.from({ length: 12 }, (_, i) => `p${i + 1}`) },
    { id: "trending", title: "Trending Now", images: Array.from({ length: 6 }, (_, i) => `t${i + 1}`) },
    { id: "tvShows", title: "TV Shows", images: Array.from({ length: 12 }, (_, i) => `tv${i + 1}`) },
    { id: "movies", title: "Blockbuster Action & Adventure", images: Array.from({ length: 6 }, (_, i) => `m${i + 1}`) },
    { id: "originals", title: "Netflix Originals", images: Array.from({ length: 6 }, (_, i) => `o${i + 1}`) },
  ];

  return (
    <div className="wrapper">
      {/* HEADER */}
      <header>
        <div className="netflixLogo">
          <a id="logo" href="#home">
            <div>BLESSHING 4 U</div>
            {/* <img
              src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
              alt="Logo Image"
            /> */}
          </a>
        </div>
        <nav className="main-nav">
          <a href="#home">Seach</a>
          <a href="#tvShows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#originals">Originals</a>
        </nav>
        <nav className="sub-nav">
          <a href="#">
            <FontAwesomeIcon icon={faSearch} className="sub-nav-logo" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBell} className="sub-nav-logo" />
          </a>
          <a href="#">Account</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">
        {categories.map((category) => (
          <section key={category.id} className="location" id={category.id}>
            <h1>{category.title}</h1>
            <div className="box">
              {category.images.map((img) => (
                <a key={img} href="#">
                  <img
                    src={`https://github.com/carlosavilae/Netflix-Clone/blob/master/img/${img}.PNG?raw=true`}
                    alt={img}
                  />
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* LINKS */}
      <section className="link">
        <div className="logos">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} className="logo" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="logo" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="logo" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} className="logo" />
          </a>
        </div>
        <div className="sub-links">
          <ul>
            <li><a href="#">Audio and Subtitles</a></li>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 1997-2018 Netflix, Inc.</p>
        <p>Carlos Avila &copy; 2018</p>
      </footer>
    </div>
  );
}

export default App;
