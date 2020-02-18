import React from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

const divVariants = {
    start: {
        color: "blue"
    },
    finish: {
        transition: {
            staggerChildren: 0.3,
            loop: Infinity
        }
    },
    hover: {
    }
}
const spanVariants = {
    start: colors => ({
        color: colors[2]
    }),
    finish: {
        x: [-1, 1, -1],
        y: [-1, 1, -1, 1, -1],
        scaleX: [1, 1.01, 0.99, 1.01, 1],
        display: 'inline-block',
        transition: {
            duration: 2,
            
            loop: Infinity
        }
    },
    hover: colors => ({
        scale: 1.2,
        color: colors[1],
        transition: {
            type: "tween"
        }
    })
}
function SplitCharacters(props){
    const chars = props.str.split("");
    const spanItems = chars.map((char, index) =>
        <motion.span key={index} initial={"start"} whileHover={"hover"} variants={spanVariants} 
        drag dragConstraints={{top: -200, right: 150, bottom: 200, left: -150}} dragElastic={0.5}
        custom={props.colors}>
            {char}
        </motion.span>
    );
    return (
        <div>
            <motion.div initial={"start"} animate={"finish"} variants={divVariants}> 
                {spanItems}
            </motion.div>
        </div>

    )
}

function TitlePage(props) {
    return (
        <div className="container">
            <div className="author">
                <SplitCharacters str={props.author} colors={props.colors} />
            </div>
            <div className="title">
                <SplitCharacters str={props.title} colors={props.colors} />
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    height: 100%;
                    padding-top: 25vh;
                }
                .author, .title {
                    width: 100%;
                    text-align: center;
                    color: ${props.colors[2]};
                    cursor: default;
                }
                .author {
                    font-size: 2em;
                }
                .title {
                    font-size: 20em;
                }
            `}
            </style>
        </div>
        
        
    )
}

export default TitlePage;