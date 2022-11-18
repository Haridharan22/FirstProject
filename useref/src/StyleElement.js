import React, {useRef} from 'react'

const StyleElement = () => {

    const colorParagrpah = useRef(null);
    const colors = ['#d529d0', '#03a9f4', '#d14614fa', '#d51858', '#9c27b0', '#ffc107', '#ff5722', '#61dafb','#4caf50', '#07600a','#65e96a'];


    const styleParagraph = () =>{
        const randomColor= Math.floor(Math.random() * colors.length);
        colorParagrpah.current.style.color = colors(randomColor);
    }


  return (
    <div>
        <button onClick={styleParagraph()}>Click Me!</button>
        <p ref={colorParagrpah}>Welcome my page</p>
    </div>
  )
}

export default StyleElement