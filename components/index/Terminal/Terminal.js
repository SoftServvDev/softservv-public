import { React, useState, useEffect } from 'react'

import gsap from 'gsap'

import styles from '../../../styles/index/index.module.css'

export default function Terminal() {
  // Text to be animated within the terminal
  const rawGt1 = '>'
  const rawText1 = ' @SoftServv'
  const rawText2 = ' - Loading...'
  const rawGt2 = '>'
  const rawText3 = ' Initiating Dependencies...'
  const rawGt3 = '>'
  const rawText4 = ' =========='
  const rawGt4 = '>'
  const rawText5 = ' My name is '
  const rawText6 = 'Chase Quinn'
  const rawGt5 = '>'
  const rawText7 = ' Would you like to learn more about me?'
  const rawGt6 = '>'
  const rawText8 = ' Use "yes" or "no":'
  const rawGt7 = '>'


  // Console line state variables
  const [gt1, setGt1] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [gt2, setGt2] = useState('')
  const [text3, setText3] = useState('')
  const [gt3, setGt3] = useState('')
  const [text4, setText4] = useState('')
  const [borderText, setBorderText] = useState('')
  const [gt4, setGt4] = useState('')
  const [text5, setText5] = useState('')
  const [text6, setText6] = useState('')
  const [gt5, setGt5] = useState('')
  const [text7, setText7] = useState('')
  const [gt6, setGt6] = useState('')
  const [text8, setText8] = useState('')
  const [gt7, setGt7] = useState('')
  const [percentage, setPercentage] = useState('')

  // This piece of state manage user input to the terminal
  const [userInput, setUserInput] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [yesNo, setYesNo] = useState(null)
  const [additionalLines, setAdditionalLines] = useState("")

  // This piece of state handles showing the next line in the terminal once the
  // user makes a selection
  const [newLine, setNewLine] = useState(false)

  // These pieces of state manage showing, minimizing, and closing the terminal
  const [terminalShow, setTerminalShow] = useState(true)
  const [closeTerminal, setCloseTerminal] = useState(false)

  ///////////////////////////////////////////////////
  // START FUNCTIONS FOR TERMINAL ANIMATIONS
  ///////////////////////////////////////////////////

  // Console Line 1
  const fillLineOne = () => {
    const timeout = setTimeout(() => {
      setGt1(rawGt1),
        setText1(rawText1),
        setText2(rawText2)
    }, 10)
    return () => clearTimeout(timeout)
  }


  // Console Line 2
  const fillLineTwo = () => {
    const timeout2 = setTimeout(() => {
      setGt2(rawGt2),
        setText3(rawText3)
    }, 400)
    return () => clearTimeout(timeout2)
  }

  // Console Line 3 (added percentage bar with indicator function)
  const loader = () => {
    let percent = " 0%"
    if (text4.length == 0) {
      let percent = " 0%"
    }
    else {
      percent = " " + ((text4.length * 10) - 10) + "%"
    }
    setPercentage(percent)
  }

  const fillLineThree = () => {
    const timeout3 = setTimeout(() => {
      setGt3(rawGt3),
        setText4(rawText4.slice(0, text4.length + 1)),
        loader()
    }, 390)
    return () => clearTimeout(timeout3)
  }

  // Console Line 4 (Percentage Bar)
  const fillLineFour = () => {
    const timeout4 = setTimeout(() => {
      setBorderText(text4)
    }, 505)
    return () => clearTimeout(timeout4)
  }

  // Console Line 5
  const fillLineFive_2 = () => {
    const timeout5 = setTimeout(() => {
      setGt4(rawGt4),
        setText6(rawText6)
    }, 10)
    return () => clearTimeout(timeout5)
  }
  const fillLineFive = () => {
    const timeout6 = setTimeout(() => {
      setGt4(rawGt4),
        setText5(rawText5)
    }, 10)
    return () => clearTimeout(timeout6)
  }

  // Console Line 6
  const fillLineSix = () => {
    const timeout7 = setTimeout(() => {
      setGt5(rawGt5),
        setText7(rawText7)
    }, 10)
    return () => clearTimeout(timeout7)
  }

  // Console Line 7
  const fillLineSeven = () => {
    const timeout8 = setTimeout(() => {
      setGt6(rawGt6),
        setText8(rawText8),
        setGt7(rawGt7)
    }, 10)
    return () => clearTimeout(timeout8)
  }

  // Console Line 8 - USER INPUT
  const showUserInput = () => {
    if (showInput === true) {
      return (
        <input type="text" id="inputPrompt" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleUserInput} autoComplete="off" />
      )
    }
    if (showInput === false) {
      return (
        <input type="text" id="inputPrompt" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleUserInput} autoComplete="off" disabled />
      )
    }
  }

  // Vanilla JS Redirect to about page after prerequisites are met
  const handleUserInput = (e) => {
    if (e.key === "Enter") {
      let x = userInput.toLowerCase()
      if (allowedNoKeywords.includes(x)) {
        setNewLine(true)
        setYesNo(false)
        setShowInput(false)
        const timeout10 = setTimeout(() => {
          window.location.href = "/#Documentation"
        }, 1000)
        return () => clearTimeout(timeout10)
      }

      if (allowedYesKeywords.includes(x)) {
        setNewLine(true)
        setYesNo(true)
        setShowInput(false)
        const timeout10 = setTimeout(() => {
          window.location.href = "/about"
        }, 1000)
        return () => clearTimeout(timeout10)
      }
      else {
        let newLine = '<span style="color:rgb(0, 247, 255);"><span class="text-white">&gt;</span> Sorry, you must use "yes" or "no":</span><br />'
        let y = additionalLines
        if (y != null) {
          gsap.fromTo("#extraLines", {height: 0}, {height: "auto", duration: 1});
          setAdditionalLines(y += newLine)
        }
        else {
          setAdditionalLines(newLine)
        }
      }
    }
  }

  // Allowed keywords (input will be lowercase after function)
  const allowedYesKeywords = ["yes", "ye", "y", "si"]
  const allowedNoKeywords = ["no", "n"]

  const fillLineEight = () => {
    setShowInput(true)
  }

  // Shows next line after user makes a selection
  const createNextLine = () => {
    if (newLine === true && yesNo === false) {
      return (
        <>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>&gt;</span> Understood! Moving to some highlights...</span><br />
        </>
      )
    }
    if (newLine === true && yesNo === true) {
      return (
        <>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>&gt;</span> Redirecting to About Me...</span><br />
        </>
      )
    }
  }

  // Filling in the console lines, timing them after each other to simulate loading
  fillLineOne()
  setTimeout(fillLineTwo, 250)
  setTimeout(fillLineThree, 300)
  setTimeout(fillLineFour, 150)
  setTimeout(fillLineFive, 9400)
  setTimeout(fillLineFive_2, 9400)
  setTimeout(fillLineSix, 10000)
  setTimeout(fillLineSeven, 10500)

  // Using useEffect to make sure React re-rendering doesn't run the timeout more than once resetting the state back to default
  useEffect(() => {
    setTimeout(fillLineEight, 11000)
  }, [])

  // Handles minimizing terminal
  const minimizeTerm = () => {
    if (terminalShow == true) {
      setTerminalShow(false)
      gsap
        .to("#terminal", {
          duration: .75,
          delay: 0.1,
          height: "2rem",
          ease: "ease.out"
        });
    }
  }

  // Handles maximizing terminal
  const maximizeTerm = () => {
    if (terminalShow == false) {
      setTerminalShow(true)
      gsap
        .to("#terminal", {
          duration: .75,
          delay: 0.1,
          height: "auto",
          ease: "ease.out"
        });
    }
  }

  // Handles closing terminal
  const closeTerm = () => {
    setCloseTerminal(true)
  }

  //Handles different states of the terminal to be displayed
  const terminalHandler = () => {
    if (closeTerminal === false && terminalShow === true) {
      return (
        <section className={`col-xl-6 col-md-8 col-xs-10 ${styles.terminal}`} id="terminal">
          <div className={`${styles.terminal_bar}`}><p>Terminal</p><span className={`${styles.min}`} onClick={minimizeTerm}><i className="fa-solid fa-window-minimize"></i></span><span className={`${styles.max}`} onClick={maximizeTerm}><i className="fa-regular fa-window-maximize"></i></span><span className={`${styles.close}`} onClick={closeTerm}><i className="fa-solid fa-x"></i></span></div>
          <div className={`${styles.spacer}`}></div>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt1}</span><span className={`${styles.softservv}`}>{text1}</span>{text2}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt2}</span>{text3}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{percentage}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{borderText}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt4}</span>{text5}<span className={`${styles.chase_quinn}`}>{text6}</span></span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt5}</span>{text7}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt6}</span>{text8}</span><br />
          <div id='extraLines' dangerouslySetInnerHTML={{ __html: additionalLines }}></div>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt7}</span><span id="prompt">{showUserInput()}</span></span><br />
          {createNextLine()}
        </section>
      )
    }
    else if (closeTerminal === false && terminalShow === false) {
      return (
        <section className={`col-xl-6 col-md-8 col-xs-10 ${styles.terminal} ${styles.minimized_terminal}`} id="terminal">
          <div className={`${styles.terminal_bar}`}><p>Terminal</p><span className={`${styles.min}`} onClick={minimizeTerm}><i className="fa-solid fa-window-minimize"></i></span><span className={`${styles.max}`} onClick={maximizeTerm}><i className="fa-regular fa-window-maximize"></i></span><span className={`${styles.close}`} onClick={closeTerm}><i className="fa-solid fa-x"></i></span></div>
          <div className={`${styles.spacer}`}></div>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt1}</span><span className={`${styles.softservv}`}>{text1}</span>{text2}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt2}</span>{text3}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{percentage}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{borderText}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt4}</span>{text5}<span className={`${styles.chase_quinn}`}>{text6}</span></span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt5}</span>{text7}</span><br />
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt6}</span>{text8}</span><br />
          <div id='extraLines' dangerouslySetInnerHTML={{ __html: additionalLines }}></div>
          <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt7}</span><span id="prompt">{showUserInput()}</span></span><br />
          {createNextLine()}
        </section>
      )
    }
    else if (closeTerminal === true) {
      return (
        <>
          <section className={`col-xl-6 col-md-8 col-xs-10 ${styles.terminal}`} style={{ display: "none" }} id="terminal">
            <div className={`${styles.terminal_bar}`}><p>Terminal</p><span className={`${styles.min}`} onClick={minimizeTerm}><i className="fa-solid fa-window-minimize"></i></span><span className={`${styles.max}`} onClick={maximizeTerm}><i className="fa-regular fa-window-maximize"></i></span><span className={`${styles.close}`} onClick={closeTerm}><i className="fa-solid fa-x"></i></span></div>
            <div className={`${styles.spacer}`}></div>
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt1}</span><span className={`${styles.softservv}`}>{text1}</span>{text2}</span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt2}</span>{text3}</span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{percentage}</span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt3}</span>{borderText}</span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt4}</span>{text5}<span className={`${styles.chase_quinn}`}>{text6}</span></span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt5}</span>{text7}</span><br />
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt6}</span>{text8}</span><br />
            <div id='extraLines' dangerouslySetInnerHTML={{ __html: additionalLines }}></div>
            <span className={`${styles.terminal_line}`}><span className={`${styles.gt}`}>{gt7}</span><span id="prompt">{showUserInput()}</span></span><br />
            {createNextLine()}
          </section>

          <section className={`${styles.terminal_closed} row justify-content-center`}>
            <span className={`${styles.terminal_closed_span}`}>The terminal has been closed</span>
          </section>
        </>
      )
    }
  }

  ///////////////////////////////////////////////////
  // END FUNCTIONS FOR TERMINAL ANIMATIONS
  ///////////////////////////////////////////////////

  // returns all text as a terminal layout -- all styles are within index.module.css
  return (
    <div className={`row justify-content-center ${styles.terminal_container}`}>
      {terminalHandler()}
    </div>
  )
}
