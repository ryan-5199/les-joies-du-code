import React from 'react';
import './App.css';

function App() {
  return (
    <div class="page">
      <nav class="navbar navbar-expand-lg navi">
        <div class="navbar-item tittle">Les joies du code</div> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <div class="nav-link random">random</div>
            </li>
            <li class="nav-item">
              <div class="nav-link jobs">jobs</div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
          <button type="button" class="btn btn-primary post">+ Propose un post</button>
        </div>
      </nav>

      <div class="container">
        <div class="col-7 right">
          <h1>Quand j'essaie de contourner un bug</h1>
          <div class="sous">NullPointerException, commit du 12 Oct 2020</div>
          <div class="blog-post-content">
            <p>
              <video autoplay="" loop="" muted="" playsinline="">
                <source src="https://lesjoiesducode.fr/content/042/d5bcgI0.webm" type="video/webm"></source>
                <source src="https://lesjoiesducode.fr/content/042/d5bcgI0.mp4" type="video/mp4"></source>
                <object data="https://lesjoiesducode.fr/content/042/d5bcgI0.gif" type="image/gif">
                </object>
              </video>
            </p>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col facebook">
                Facebook
              </div>
              <div class="col twitter">
                Twitter
              </div>
              <div class="col email">
                Email
              </div>
              <div class="col lien">
                lien
              </div>
              <div class="col-5">
              </div>
            </div>
          </div>
          <div class="droite">
          <button type="button" class="btn btn-dark">Suivant {'>'}</button>
          </div>
          <div class="container-fluid sepa">
            <div class="row justify-content-md-center">
              <div class="col-4 sep"></div>
              <div class="col-3 posts">Plus de posts</div>
              <div class="col-4 sep"></div>
            </div>
          </div>
        </div>
        <div class="col-3">
        </div>      
      </div>
    </div>
  );
}

export default App;
