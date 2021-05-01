import React from 'react';


export default function Navigation() {

    return (
        <>
                
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="index.html">Let's Shop</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                        aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">about</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="index.html">service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="index.html">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav>
        </>
    )
}