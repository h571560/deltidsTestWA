(this.webpackJsonpmovietable=this.webpackJsonpmovietable||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(4),l=n(5),c=n(7),u=n(6),d=n(3),h=n(8),p=n(1),m=n(2);function f(){var e=Object(p.a)(["\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.5s;\n  overflow: auto;\n  transition: all 0.3s linear;\n"]);return f=function(){return e},e}function b(){var e=Object(p.a)(['\n  font-family: "Trebuchet MS", Arial, sans-serif;\n  background-color: #fefefe;\n  margin: auto;\n  margin-top: 100px;\n  padding: 20px;\n  border-radius: 4px;\n  max-width: 600px;\n  height: 300px;\n']);return b=function(){return e},e}var v=Object(m.a)(b()),g=Object(m.a)(f()),y=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.show?r.a.createElement("div",{className:g,id:"modal"},r.a.createElement("div",{className:v},r.a.createElement("h2",null,this.props.movieInfo[0]),r.a.createElement("h4",null,"Rating: ",this.props.movieInfo[2]),r.a.createElement("p",null,"plot: ",this.props.movieInfo[9]),r.a.createElement("p",null,"Actors: ",this.props.movieInfo[8]),r.a.createElement("p",null,"Runtime: ",this.props.movieInfo[4]," Director: ",this.props.movieInfo[6]),r.a.createElement("p",null,"language: ",this.props.movieInfo[10]),r.a.createElement("p",null,"Genre: ",this.props.movieInfo[5])),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.handleClose},"Close"))):null}}]),t}(r.a.Component);function k(){var e=Object(p.a)(["\nborder: 2px solid black;\npadding: 8px;\nmargin:10px;\nwidth: 200px;\n"]);return k=function(){return e},e}function S(){var e=Object(p.a)(["\nborder: 2px solid black;\npadding: 8px;\nwidth: 70px;\n&:hover{\n  background-color: darkgray;\n}\n"]);return S=function(){return e},e}function T(){var e=Object(p.a)(["\nborder: 2px solid black;\npadding: 8px;\ncursor: pointer;\n&:hover{\n  background-color: darkgray;\n}\n"]);return T=function(){return e},e}function j(){var e=Object(p.a)(["\nborder: 2px solid black;\npadding: 8px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(['\ntext-align: center;\nfont-family: "Trebuchet MS", Arial, sans-serif;\nborder-collapse: collapse;\nborder: 3px solid black;\nwidth: 90%;\nmargin-left:auto; \nmargin-right:auto;\n']);return O=function(){return e},e}function w(){var e=Object(p.a)(["\npadding-top: 12px;\npadding-bottom: 12px;\ntext-align: center;\nbackground-color: #4FF229;\nborder: 2px solid black;\ncolor: white;\nheight: 40px;\ncursor:pointer;\n&:hover{\n  background-color: #478a34;\n}\n"]);return w=function(){return e},e}function x(){var e=Object(p.a)(['\nfont-family: "Trebuchet MS", Arial, sans-serif;\nfont-size: 45px;\n']);return x=function(){return e},e}function E(){var e=Object(p.a)(['\nfont-family: "Trebuchet MS", Arial, sans-serif;\nleft: 0;\nline-height: 200px;\nmargin-top: -100px;\nposition: absolute;\ntext-align: center;\ntop: 50%;\nwidth: 100%;\nfont-size: 50px;\n']);return E=function(){return e},e}function Y(){var e=Object(p.a)(["\ntext-align: center; \n"]);return Y=function(){return e},e}var I=Object(m.a)(Y()),M=Object(m.a)(E()),C=Object(m.a)(x()),N=Object(m.a)(w()),A=Object(m.a)(O()),D=Object(m.a)(j()),R=Object(m.a)(T()),B=Object(m.a)(S()),P=Object(m.a)(k()),z=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).loadPages=function(e){for(var t=0;t<e/10;t++)fetch("https://www.omdbapi.com/?apikey=74987db8&s="+n.state.keyword+"&page="+(t+1).toString()).then((function(e){return e.json()})).then(n.renderMovies);n.state.movies.length===n.state.totalRes&&n.setState({loaded:!0})},n.renderMovies=function(e){n.setState((function(t){return{movies:n.state.movies.concat(e.Search)}}))},n.onClearArray=function(){n.setState({movies:Array()}),n.setState({loaded:!1})},n.showModal=function(){n.setState({show:!n.state.show})},n.hideModal=function(){n.setState({show:!1})},n.renderMovieInfo=function(e){fetch("https://www.omdbapi.com/?apikey=74987db8&i="+n.state.movies[e].imdbID).then((function(e){return e.json()})).then((function(e){n.setState({movieInfo:Array(e.Title,e.Year,e.Metascore,e.Released,e.Runtime,e.Genre,e.Director,e.writer,e.Actors,e.Plot,e.Language,e.Country,e.Awards,e.Poster)})})),n.showModal(),console.log(e)},n.keyWordChanged=function(e){n.setState({keyword:e.target.value})},n.state={movies:Array(),movieInfo:Array(),loaded:!1,totalRes:0,keyword:"",descYearSort:!0,alphaBSort:!0,typeSort:!0,show:!1},n.toggleSortTitle=n.toggleSortTitle.bind(Object(d.a)(n)),n.toggleSortYear=n.toggleSortYear.bind(Object(d.a)(n)),n.toggleSortType=n.toggleSortType.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.sortYear=n.sortYear.bind(Object(d.a)(n)),n.sortType=n.sortType.bind(Object(d.a)(n)),n.sortTitle=n.sortTitle.bind(Object(d.a)(n)),n.renderMovieInfo=n.renderMovieInfo.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"sortYear",value:function(){var e=[];e=this.state.movies,this.state.descYearSort?e.sort((function(e,t){return e.Year<t.Year?-1:e.Year>t.Year?1:0})):(e.sort((function(e,t){return e.Year>t.Year?-1:e.Year<t.Year?1:0})),this.setState({movies:e}))}},{key:"toggleSortYear",value:function(){this.sortYear(),this.setState({descYearSort:!this.state.descYearSort})}},{key:"toggleSortTitle",value:function(){this.sortTitle(),this.setState({alphaBSort:!this.state.alphaBSort})}},{key:"toggleSortType",value:function(){this.sortType(),this.setState({typeSort:!this.state.typeSort})}},{key:"sortTitle",value:function(){var e=[];e=this.state.movies,this.state.alphaBSort?e.sort((function(e,t){return e.Title<t.Title?-1:e.Title>t.Title?1:0})):e.sort((function(e,t){return e.Title>t.Title?-1:e.Title<t.Title?1:0})),this.setState({movies:e})}},{key:"sortType",value:function(){var e=[];e=this.state.movies,this.state.typeSort?e.sort((function(e,t){return e.Type>t.Type?-1:e.Type<t.Type?1:0})):e.sort((function(e,t){return e.Type<t.Type?-1:e.Type>t.Type?1:0})),this.setState({movies:e})}},{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"handleSubmit",value:function(e){var t=this;this.onClearArray(),fetch("https://www.omdbapi.com/?apikey=74987db8&s="+this.state.keyword).then((function(e){return e.json()})).then((function(e){t.loadPages(e.totalResults)})).then((function(){t.checkDone()&&t.setState({loaded:!0})}))}},{key:"renderTableHeader",value:function(){var e=this;if(this.state.movies.length>0){var t=Object.keys(this.state.movies[0]);return delete t[2],t.unshift("id"),t.map((function(t,n){var a;switch(t){case"Title":a=e.toggleSortTitle;break;case"Type":a=e.toggleSortType;break;case"Year":a=e.toggleSortYear}return r.a.createElement("th",{onClick:a,className:N,key:n},t.toUpperCase())}))}return r.a.createElement("th",null,"no results")}},{key:"renderTableData",value:function(){var e=this;return this.state.movies.length>0?this.state.movies.map((function(t,n){var a=t.Title,o=t.Year,i=t.Type,s=t.Poster;return r.a.createElement("tr",null,r.a.createElement("td",{className:D},n+1),r.a.createElement("td",{onClick:function(){return e.renderMovieInfo(n)},className:R},a),r.a.createElement("td",{className:D},o),r.a.createElement("td",{className:D},i),r.a.createElement("td",{className:D},r.a.createElement("img",{height:"100px",width:"70px",src:s,alt:"poster picture missing"})))})):r.a.createElement("p",null,"nothing found")}},{key:"checkDone",value:function(){return this.state.movies.length===this.state.totalRes}},{key:"render",value:function(){return this.state.loaded?r.a.createElement("div",{className:I},r.a.createElement("h1",{className:C},"Movie table"),r.a.createElement("input",{id:"search",value:this.state.keyword,onChange:this.keyWordChanged,className:P,placeholder:"search for a movie by title",type:"textfield"}),r.a.createElement("button",{onClick:this.handleSubmit,className:B},"Search"),r.a.createElement("table",{className:A},r.a.createElement("thead",null,this.renderTableHeader()),r.a.createElement("tbody",null,this.renderTableData())),r.a.createElement(y,{movieInfo:this.state.movieInfo,show:this.state.show,handleClose:this.hideModal})):r.a.createElement("div",{className:I},r.a.createElement("h1",{className:M},"Loading..."))}}]),t}(a.Component);i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.91404e24.chunk.js.map