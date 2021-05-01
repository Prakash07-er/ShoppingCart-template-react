import React  from 'react';
export default function Cards(props) {
let localButton = () => {
}
    return(
        <>
        
        <div className="col-lg-4 col-md-6 mb-4">

            <div class="card h-100">
                    <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..."></img></a>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#!">{props.data.name}</a></h4>
                        <h5>{props.data.price}</h5>
                        <p class="card-text">{props.data.description}</p>
                    </div>
                    <div class="card-footer"><small class="text-muted">★ ★ ★ ★ ☆
                    <button type="button"  className="btn btn-outline-primary btn-sm ml-4"  onClick={() => {
                        props.handleCart(props.data)
                    }} >Add to cart <i class="fa fa-shopping-cart ml-3"></i></button>
                    </small></div>

            </div>
        </div>
       
          

        </>
    )
}