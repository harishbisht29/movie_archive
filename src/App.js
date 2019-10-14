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
      {data.map((movie) => (
          <div className="card" key={movie.id}>
            <div className="card-header">
              #{movie.id} {movie.title}
            </div>
            <div className="card-body">
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        ))}
      
    </div>
    );
  }
}

export default App;