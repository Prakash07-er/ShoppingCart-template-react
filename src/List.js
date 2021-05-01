import React  from 'react';
export default function Category(props) {

    return(
        <>
         <div class="col-lg-3">
                <h1 class="my-4">
                    Shop Name
                </h1>

                <div class="list-group">
                    
                    <div class="list-group-item"><a href=""> Category 1</a> < i class="fa fa-times-circle inline-block  ml-5"></i></div>
                    <div class="list-group-item"><a href=""> Category 2</a> < i class="fa fa-times-circle inline-block  ml-5"></i></div>
                    <div class="list-group-item"><a href=""> Category 3</a> < i class="fa fa-times-circle inline-block  ml-5"></i></div>
                </div>
            </div>
        </>
    )
}