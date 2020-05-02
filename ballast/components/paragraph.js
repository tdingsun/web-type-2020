import React from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

function SplitCharacters(props){
    const chars = props.str.split("");
    const spanItems = chars.map((char, index) =>
        <motion.span key={index} whileHover={"hover"} variants={spanVariants}>{char}</motion.span>
    );
    return (
        <div>
            <motion.div initial={"start"} animate={"finish"} variants={divVariants}> 
                {spanItems}
            </motion.div>
        </div>

    )
}

class Paragraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mdpath: "null"
        }
    }
    

    componentDidMount() {
        const mdpath = require(`../data/md/${this.props.mdid}.md`);
        this.setState({
            mdpath: mdpath.default
        })
    }

    render() {
        return (
            <div className="container">
                <motion.div 
                animate={{width: ['100%', '95%', '90%', '95%', '100%']}}
                transition={{duration: 60, times: [0, 0.3, 0.5, 0.7, 1], loop: Infinity, repeatDelay: 10}}
                >
                <ReactMarkdown source={this.state.mdpath} />
                
                </motion.div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        height: 100%;
                        padding: 27px 50px 30px 50px;
                        box-sizing: border-box;
                        column-fill: auto;
                        column-width: 250px;
                        column-count: 4;
                        column-gap: 50px;
                        column-rule: 1px solid ${this.props.colors[1]};
                        position: fixed;
                        overflow-x: scroll;
                        overflow-y: hidden;
                    }
                    .container div:after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 50px;
                        right: -50px;
                        height: 1px;
                    }

                    :global(.container p) {
                        color: ${this.props.colors[2]};
                        line-height: 1.3em;
                        margin: 0 0 25px 0;
                        padding-left: 25px;
                    }

                    :global(.container h1) {
                        font-size: 1.5em;
                        color: ${this.props.colors[1]};
                        padding: 0 0 15px 0;
                        margin: 0 0 30px 0;
                        column-span: all;
                        font-weight: normal;
                    }
                `}
                </style>
            </div>
            
            
        )
    }
}

export default Paragraph;