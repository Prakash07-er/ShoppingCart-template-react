import React  from 'react';
export default function Slidebar() {

    return(
        <>
        <div class="col-lg-9">
                <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://place-hold.it/900x350" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://place-hold.it/900x350" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://place-hold.it/900x350" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

               
                  
            </div>

        </>
    )
}