import React from 'react'
import { withRouter } from 'next/router';
import Link from 'next/link'


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  Runner(props) {
    if (props.mdid != 0){
      return <div>{props.title}</div>
    } else {
      return null
    }
  }

  render() {
    return (
      <nav>
        <div className={`arrow ${this.props.value <= 0 ? "greyed" : ""}`} onClick={this.props.onClickLeft}>
        ←
        </div>
        <this.Runner mdid={this.props.mdid} title={this.props.title} />
        <input type="text" value={this.props.value} onChange={this.props.onChange}></input>
        <div className={`arrow ${this.props.value >= this.props.total ? "greyed" : ""}`} onClick={this.props.onClickRight}>
        →
        </div>
        <div className="navRight">
            <div onClick={this.props.onClickHome}>回</div>
        </div>
      <style jsx>{`
        nav {
          position: fixed;
          text-align: center;
          width: 100%;
          font-size: 24px;
          color: ${this.props.colors[1]};
          margin: 1em 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .navRight{
          position: absolute;
          right: 50px;
          text-align: right;
        }

        .navRight div{
          margin-right: 0;
        }

        nav div {
          margin: 0 10px;
        }

        .arrow:hover, input:hover, .navRight div:hover {
          border: 1px solid ${this.props.colors[1]};
          cursor: pointer;
        }
        
        input {
          font-size: 24px;
          width: 30px;
          margin-left: 5px;
          padding-top: 0;
          border: none;
          box-sizing: border-box;
          color: ${this.props.colors[1]};
          background: none;
          text-align: center;
          display: inline-block;
        }
        input:focus {
          outline: none;
        }
        .greyed {
          opacity: 0.5;
        }
        .greyed:hover {
          border: none;
          cursor: default;
        }
      `}</style>
      </nav>
    )
  }
}

export default withRouter(Nav)
