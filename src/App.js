import React, { Component } from 'react';
import './App.css';
import Movie from'./Movie';


class App extends Component {

  // Rander : componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()-> render() -> component()
  state={}
  componentWillMount(){
    //console.log('will mount')//첫번째
   this._getMovies();
  }

  // componentDidMount(){
  //     //console.log("did mount")//다 끝난 후
  //     setTimeout(() => {
  //       this.setState({
  //         movies:[
  //           //...this.state.movies,//append()같은 역활
  //           {
  //             title: " Trainspotting",
  //             poster: "http://barkerhost.com/wp-content/uploads/sites/4/2016/02/trainspotting.jpg"
  //           },
  //           {
  //             title:"Matrix",
  //             poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8M_9Tp0PzfQaEG9sAHzn4lv-Mustd6FMc3VhpuTBO-e5rcgJOQ"
  //           },
  //           {
  //             title:"Full Metal Jacket",
  //             poster:"https://i.pinimg.com/originals/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
  //           },
  //           {
  //             title:"Oldbody",
  //             poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  //           },
  //           {
  //             title:"star Wars",
  //             poster:"https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
  //           }
  //           //...this.state.movies
  //         ]
  //       })
  //     },5000)
  // }

  _renderMovies = () =>{
      const movies = this.state.movies.map((movie) => {
        console.log(movie)
        return <Movie 
            title={movie.title_english}
            poster={movie.medium_cover_image} 
            key={movie.id} 
            genres={movie.genres}
            synopsis ={movie.synopsis}

            />
      })
      return movies;
  }

   _getMovies = async () =>{
    const movies = await this._callApi() //await , async 비동기 스크립트를 -> 동기식으로 변경
    this.setState({
      //movies : movies 
      movies //모던 자바스크립트
    })
  }
  _callApi = () =>{
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    //console.log('did render')//두번째
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
