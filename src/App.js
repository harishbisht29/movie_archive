import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search_parameter: "",
    
    }
  }

  getMovieDetails(){
    console.log("hi")
  }
  componentDidMount() {
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=10e9e0a1fe452c0635e71c72e8f77d92&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          search_parameter: "popular"
        })
      })
  }
  render() {

    var { data, search_parameter } = this.state

    

    if(search_parameter !== ""){
      data = data.results
      console.log(data)
    }
    else{
      data = []
    }

    return (
      <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Trendy Movies</h1>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
          
          {data.map((movie) => (
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

export default App;