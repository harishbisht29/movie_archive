import React, { Component } from 'react';

import './App.css';
import Movielist from './Movielist';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search_parameter: "",
      header:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.setSearchField = this.setSearchField.bind(this);
  }

  handleClick(){
    console.log("Getting Movie Details")
    var api_url = "https://api.themoviedb.org/3/search/multi?api_key=10e9e0a1fe452c0635e71c72e8f77d92&language=en-US&query=" + this.state.search_parameter + "&page=1&include_adult=false"
    fetch(api_url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          search_parameter: this.state.search_parameter,
header:this.state.search_parameter
        })
      })
  }
  componentDidMount() {
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=10e9e0a1fe452c0635e71c72e8f77d92&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          search_parameter: "popular",
          header:"Popular Movies"
        })
      })
  }

  setSearchField(value){
    console.log(value)
    this.setState({search_parameter: value })
  }
  render() {

    var { data, search_parameter, header } = this.state

    if(header !== ""){
      data = data.results
      // console.log(data)
    }
    else{
      data = ""
    }

    if(data  !== "" ){
      return (     
      <div>
     	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    
                                    <div className="col">
                                        <input onChange={event => this.setSearchField(event.target.value)} className="form-control form-control-lg form-control-borderless" type="text" placeholder="Enter Movie Name" />
                                    </div>
                                    
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success ml-2" onClick={this.handleClick}>Search</button>
                                    </div>
                                    
                                </div>
                            
                        </div>

                    </div>
        <Movielist movies={this.state.data} header={this.state.header} />  
      </div>
      );
    }
    else{
      return(
        <h1>Loading Data</h1>
      )
    }
    
  
  }
}

export default App;