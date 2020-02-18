import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Paragraph from '../components/paragraph'
import TitlePage from '../components/titlepage'

const numMDFiles = 17;
const title = "Ballast";
const author = "Tiger\u00A0Dingsun";
const colors = ["beige", "#f00", "#00f"];

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdid: 0,
      value: 0,
      total: numMDFiles,
      title: title,
      author: author,
      colors: colors
    }
  }

  keyHandler = e => {
    e.stopPropagation();
    if(e.key === 'ArrowLeft'){
      if (this.state.mdid > 0){
        let newID = this.state.mdid - 1;
        this.setState({mdid: newID, value: newID})
      }
    }
    if(e.key === 'ArrowRight'){
      if (this.state.mdid < numMDFiles){
        let newID = this.state.mdid + 1;
        this.setState({mdid: newID, value: newID})
      }
    }    
  }

  navClickHandler = dir => {
    if ((dir == 'left') && (this.state.mdid > 0)){
      let newID = this.state.mdid - 1
      this.setState({mdid: newID, value: newID})
    }
    if ((dir == 'right') && (this.state.mdid < numMDFiles)){
      let newID = this.state.mdid + 1
      this.setState({mdid: newID, value: newID})
    }
    if (dir == 'home'){
      this.setState({mdid: 0, value: 0})
    }
  }

  handleInputChange = e => {
    let newID = parseInt(e.target.value)
    if(e.target.value.length == 0){
      this.setState({value: e.target.value})
    }
    if (e.target.value > 0 && e.target.value < numMDFiles){
      this.setState({mdid: newID, value: newID})
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyHandler);
  }

  makeParagraph = () => {
    if (this.state.mdid == 0){
      return <TitlePage title={this.state.title} author={this.state.author} colors={this.state.colors}/>
    } else {
      return <Paragraph key={this.state.mdid} mdid={this.state.mdid} colors={this.state.colors}/>
    }
  }

  render(){
    return (
      <div className="container">
        <Head>
          <title>{title} — {author}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav
          mdid={this.state.mdid}
          value={this.state.value}
          total={this.state.total}
          title={this.state.title}
          onClickLeft={() => this.navClickHandler('left')}
          onClickRight={() => this.navClickHandler('right')}
          onClickHome={() => this.navClickHandler('home')}
          onChange={e => this.handleInputChange(e)}
          colors={this.state.colors}
        />
        <this.makeParagraph />

      <style jsx>{`
        :global(body) {
          background-color: ${this.state.colors[0]};
          width: 100%;
          padding: 0;
          margin: 0;
          font-family: "helvetica", sans-serif;
        }
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
      `}</style>
      </div>
    )
  }
}

export default Index