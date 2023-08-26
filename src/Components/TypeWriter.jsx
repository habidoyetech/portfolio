import React, {useState, useEffect} from 'react'

const TypeWriter = ({text, delay}) => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState(text.length - 1)

  // Typing logic goes here
  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      if (currentIndex === text.length - 1){
        setDeleteIndex(text.length - 1)
      }
      
    } else {
      
      if (deleteIndex === 0) {
        setCurrentIndex(0)
      }
      
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setDeleteIndex(prevIndex => prevIndex - 1);
      }, delay - 150);  

    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, deleteIndex, currentText]);

  return <span className='typetext'>{currentText}</span>;
  
}

export default TypeWriter