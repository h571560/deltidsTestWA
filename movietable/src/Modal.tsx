import React from 'react'
import App from './App'
import {css} from 'emotion'

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

interface IOwnState{
    show:boolean
  }
  
  interface IOwnprops{
    show:boolean,
    handleClose:any,
    movieInfo: Array<IMovieInfo>
  }

  const modalContentStyle = css`
  font-family: "Trebuchet MS", Arial, sans-serif;
  background-color: #fefefe;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 4px;
  max-width: 600px;
  height: 300px;
`


const modalStyle = css`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
`

  class Modal extends React.Component<IOwnprops,IOwnState> {
    constructor(props:IOwnprops){
      super(props)
    }

    

    render() {
      if(!this.props.show){
      return null
      } else{
        return (
        <div className={modalStyle} id="modal">
            <div className={modalContentStyle}>
              <h2>{this.props.movieInfo[0]}</h2>
             <h4>Rating: {this.props.movieInfo[2]}/100 (source: metacritic)</h4>
             <p>plot: {this.props.movieInfo[9]}</p>
             <p>Actors: {this.props.movieInfo[8]}</p>
             <p>Runtime: {this.props.movieInfo[4]} Director: {this.props.movieInfo[6]}</p>
             <p>language: {this.props.movieInfo[10]}</p>
             <p>Genre: {this.props.movieInfo[5]}</p>
            </div>
            
            <div>
                <button
                  onClick={this.props.handleClose}
                >
                  Close
                </button>
            </div>
        </div>
        )
      }
    }

  }

  export default Modal