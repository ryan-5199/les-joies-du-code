import React from 'react'

function Navbar() {
    return (
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
    )
}

export default Navbar