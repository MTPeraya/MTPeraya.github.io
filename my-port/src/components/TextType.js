import React, { useState, useEffect } from 'react';

const TextType = ({
  text = [""],
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = "_"
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (!text || text.length === 0) return;
    
    let timer;
    const currentFullText = text[textIndex % text.length];
    
    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    } else {
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        if (text.length > 1) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span style={{ display: 'inline-block' }}>
      {displayedText}
      {showCursor && (
        <span 
          style={{ 
            animation: 'blink 1s step-end infinite', 
            display: 'inline-block',
            fontWeight: 'inherit',
            marginLeft: '4px'
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TextType;
