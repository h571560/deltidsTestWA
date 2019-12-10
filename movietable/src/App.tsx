import React, { Component, FormEvent } from 'react'
import { css } from 'emotion'
import Modal from './Modal'


const appStyle = css`
text-align: center; 
`

const loadingStyle = css`
font-family: "Trebuchet MS", Arial, sans-serif;
left: 0;
line-height: 200px;
margin-top: -100px;
position: absolute;
text-align: center;
top: 50%;
width: 100%;
font-size: 50px;
`

const titleStyle = css`
font-family: "Trebuchet MS", Arial, sans-serif;
font-size: 45px;
`

const headerStyle = css`
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
background-color: #4FF229;
border: 2px solid black;
color: white;
height: 40px;
cursor:pointer;
&:hover{
  background-color: #478a34;
}
`

const tableStyle = css`
text-align: center;
font-family: "Trebuchet MS", Arial, sans-serif;
border-collapse: collapse;
border: 3px solid black;
width: 90%;
margin-left:auto; 
margin-right:auto;
`

const tableRowStyle = css`
border: 2px solid black;
padding: 8px;
`

const tableRowStyleTitle = css`
border: 2px solid black;
padding: 8px;
cursor: pointer;
&:hover{
  background-color: darkgray;
}
`

const buttonStyle = css`
border: 2px solid black;
padding: 8px;
width: 70px;
&:hover{
  background-color: darkgray;
}
`
const searchStyle = css`
border: 2px solid black;
padding: 8px;
margin:10px;
width: 200px;
`

interface IMovie {
  Id: number,
  Title: string,
  Year: number,
  Type: string,
  Poster: string,
  imdbID: string,
}

interface IMovieInfo {
  Title: string,
  Year: number,
  Metascore: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  writer: string,
  Actors: string,
  Plot:string,
  Language: string,
  Country: string,
  Awards:string,
  Poster:string,
}

interface IOwnprops {
}

interface IOwnState {
  movies: Array<IMovie>,
  movieInfo: Array<IMovieInfo>,
  loaded: boolean,
  totalRes: number,
  keyword: string,
  descYearSort: boolean,
  alphaBSort:boolean,
  typeSort:boolean,
  show:boolean,
}

class App extends Component<IOwnprops, IOwnState, HTMLButtonElement>{
  constructor(props: IOwnprops) {
    super(props)

    this.state = {
      movies: Array<IMovie>(),
      movieInfo: Array<IMovieInfo>(),
      loaded: false,
      totalRes: 0,
      keyword: '',
      descYearSort: true,
      alphaBSort:true,
      typeSort:true,
      show:false,
    }

    this.toggleSortTitle = this.toggleSortTitle.bind(this)
    this.toggleSortYear = this.toggleSortYear.bind(this)
    this.toggleSortType = this.toggleSortType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sortYear = this.sortYear.bind(this)
    this.sortType = this.sortType.bind(this)
    this.sortTitle = this.sortTitle.bind(this)
    this.renderMovieInfo = this.renderMovieInfo.bind(this)
  }

  sortYear() {
    let arr = []
    arr = this.state.movies
    if (this.state.descYearSort) {
      arr.sort((a, b) => {
        if (a.Year < b.Year) {
          return -1;
        }
        if (a.Year > b.Year) {
          return 1;
        }
        return 0;
      })
    } else {
      arr.sort((a, b) => {
        if (a.Year > b.Year) {
          return -1
        }
        if (a.Year < b.Year) {
          return 1
        }
        return 0
      })
      this.setState({
        movies: arr
      })
    }
  }

  toggleSortYear(){
    this.sortYear()
    this.setState({
      descYearSort: !this.state.descYearSort
    })
  }

  toggleSortTitle(){
    this.sortTitle()
    this.setState({
      alphaBSort: !this.state.alphaBSort
    })
  }

  toggleSortType(){
    this.sortType()
    this.setState({
      typeSort: !this.state.typeSort
    })
  }

  sortTitle(){

      let arr = []
      arr = this.state.movies
      if(this.state.alphaBSort){
      arr.sort((a, b) => {
        if (a.Title < b.Title) {
          return -1;
        }
        if (a.Title > b.Title) {
          return 1;
        }
        return 0;
      })
    }else{
      arr.sort((a, b) => {
        if (a.Title > b.Title) {
          return -1;
        }
        if (a.Title < b.Title) {
          return 1;
        }
        return 0;
      })
    }
      this.setState({
        movies: arr
      })
    }

    sortType(){
      let arr = []
      arr = this.state.movies

      if(this.state.typeSort){

      arr.sort((a, b) => {
        if (a.Type > b.Type) {
          return -1;
        }
        if (a.Type < b.Type) {
          return 1;
        }
        return 0;
      })
    }
    else{
      arr.sort((a, b) => {
        if (a.Type < b.Type) {
          return -1;
        }
        if (a.Type > b.Type) {
          return 1;
        }
        return 0;
      })
    }
      this.setState({
        movies: arr
      })
    }

    componentDidMount() {
      this.setState({
        loaded: true
      })
    }

    handleSubmit(event: FormEvent) {
      this.onClearArray()
      fetch("https://www.omdbapi.com/?apikey=74987db8&s=" + this.state.keyword)
        .then(res => res.json())
        .then(json => {
          this.loadPages(json.totalResults)
        })
    }

    loadPages = ((pages: number) => {
      for (let i = 0; i < pages / 10; i++) {
        fetch("https://www.omdbapi.com/?apikey=74987db8&s=" + this.state.keyword
          + "&page=" + (i + 1).toString())
          .then(res => res.json())
          .then(this.renderMovies)
      }
      if(this.state.movies.length === this.state.totalRes){this.setState({
        loaded:true,
      })}
    })

    renderMovies = ((response: any) => {
      this.setState(state => {
        let list = this.state.movies.concat(response.Search)
        return {
          movies: list
        }
      })
    })



    onClearArray = () => {
      this.setState({ movies: Array<IMovie>() });
      this.setState({
        loaded:false,
      })
    }

    renderTableHeader() {
      if (this.state.movies.length > 0) {
        let header = Object.keys(this.state.movies[0])
        delete header[2]
        header.unshift("id")
        return header.map((key, index) => {
          let click
          switch (key) {
            case "Title":
              click = this.toggleSortTitle
              break;
            case "Type":
              click = this.toggleSortType
              break;
            case "Year":
              click = this.toggleSortYear
              break;
            default:
              break;
          }
          return <th
            onClick={click}
            className={headerStyle}
            key={index}>
            {key.toUpperCase()}
          </th>
        })
      }
      else {
        return (<th>no results</th>)
      }
    }

    showModal = () => {
      this.setState({
        show:!this.state.show
      })
    }
    hideModal = () => {
      this.setState({
        show:false,
      })
    }

    renderMovieInfo = (index:number) =>{
      fetch("https://www.omdbapi.com/?apikey=74987db8&i=" + this.state.movies[index].imdbID)
      .then(res => res.json())
      .then(json => {
        this.setState({
          movieInfo: Array<IMovieInfo>(json.Title,json.Year,json.Metascore,json.Released,json.Runtime,json.Genre,json.Director,json.writer,json.Actors,json.Plot,json.Language,json.Country,json.Awards,json.Poster)
        })
      })

      this.showModal()
      console.log(index)
    }

    renderTableData() {
      if (this.state.movies.length > 0) {
        return this.state.movies.map((movie, index) => {
          const { Title, Year, Type, Poster} = movie

          return (
            <tr>
              <td className={tableRowStyle}>{index + 1}</td>
              <td onClick={()=>this.renderMovieInfo(index)} className={tableRowStyleTitle}>{Title}</td>
              <td className={tableRowStyle}>{Year}</td>
              <td className={tableRowStyle}>{Type}</td>
              <td className={tableRowStyle}><img height="100px" width="70px" src={Poster} alt="poster picture missing" /></td>
            </tr>
          )
        })
       } else { return (<p>nothing found</p>) }
    }


    keyWordChanged = ((event: any) => {
      this.setState({
        keyword: event.target.value
      })
    })

    render() {

      if (!this.state.loaded) {
        return <div className={appStyle}>
          <h1 className={loadingStyle}>Loading...</h1>
        </div>
      }
      else {
        return (
          <div className={appStyle}>
            <h1 className={titleStyle}>Movie table</h1>
            <input
              id="search"
              value={this.state.keyword}
              onChange={this.keyWordChanged}
              className={searchStyle}
              placeholder="search for a movie by title"
              type="textfield"></input>
            <button
              onClick={this.handleSubmit}
              className={buttonStyle}>
              Search
          </button>
            <table className={tableStyle}>
              <thead>
                {this.renderTableHeader()}
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
            </table>
            <Modal movieInfo= {this.state.movieInfo} show={this.state.show} handleClose = {this.hideModal}/>
          </div>
        )
      }

    }
  }
  export default App;
