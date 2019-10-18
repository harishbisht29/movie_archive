import React, { Component } from 'react';

class Movielist extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("rendering Movielist")
    console.log(this.props.movies.results)
    
    return (
      <div className="container">
      
        <h1 className="display-4 text-center">{this.props.header}</h1>
      
      <div className="album py-5 ">
        <div className="container">
          <div className="row">
          
          {this.props.movies.results.map((movie) => (
                  <div className="col-md-4">
                  <div className="card mb-4 box-shadow"  key={movie.id}>
                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                     alt="Thumbnail [100%x225]" styles="{{height: 225px; width: 100%; display: block;}}"
                     src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} data-holder-rendered="true" />
                    <div className="card-body">
                      <p className="card-text">{movie.overview}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{movie.release_date}</small>
                      </div>
                    </div>
                  </div>
                </div>
        ))}
 
 


          </div>
        </div>
      </div>
           
    </div>
      );
  }
}

export default Movielist;