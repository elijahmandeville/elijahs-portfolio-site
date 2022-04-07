import React, { Component } from "react";
import '../styles/TerminalWindow.css'
import { motion } from 'framer-motion';
import Terminal from "terminal-in-react";

class TerminalWindow extends Component {
  constructor(props) {
    super(props)
    this.transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96]};
  }

  render(){
    return (
    <motion.div
      exit={{ scale: 0 }} 
      initial={{ scale: 0 }} 
      animate={{ scale: "100%" }}
      transition={this.transition}
      className='project-list'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <a href="/" className="fa-regular fa-hand-spock fa-4x"></a>
      <Terminal
        color='orange'
        backgroundColor='black'
        barColor='black'
        prompt='orange'
        allowTabs={false}
        hideTopBar={false}
        startState='maximised'
        style={{ fontWeight: "none", fontSize: "1.5em" }}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: this.showMsg,
          popup: () => alert('Terminal in React')
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert', popup: 'alert'
        }}
        msg="Welcome to my portfolio site! My name is Elijah Mandeville, and I'm a full-stack web developer. Type 'help' to get started!"
      />
      
    </motion.div>
    );
  }
}

export default TerminalWindow;
