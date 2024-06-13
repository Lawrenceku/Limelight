import React, { useEffect, useRef, useState } from 'react';
import { faqs } from '../faqs.js';

export default function FAQs() {
  const [showContent, setShowContent] = useState({});
  const [contentHeight, setContentHeight] = useState({});
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs]);

  useEffect(() => {
    const newContentHeight = {};
    if (contentRefs.current.length > 0) {
      contentRefs.current.forEach((ref, index) => {
        if (ref && ref.current) {
          newContentHeight[index] = `${ref.current.scrollHeight}px`;
        }
      });
      setContentHeight(newContentHeight);
    }
  }, [faqs, showContent]);

  const toggleContent = (index) => {
    setShowContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    <div className='py-8 flex flex-col  text-left items-center justify-center bg-[#faebd7] '>
    {faqs.map(({ question, answer }, index) => (
        <div className="w-3/4 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" key={index}>
          <button
            role="button"
            aria-expanded={showContent[index]}
            style={{ borderBottom: showContent[index] ? 'solid 2px' : '0px' }}
            className="flex w-full items-center justify-between rounded-[5px] border-black bg-[#C4A1FF] p-5 font-bold"
            onClick={() => toggleContent(index)}
          >
            <div className='text-left'>
            {question}
            </div>
            <span
              style={{ transform: `rotate(${showContent[index] ? '45deg' : '0'})` }}
              className="ml-4 text-4xl min-h-[24px] min-w-[24px] transition-transform ease-in-out"
            >+</span>
          </button>
          <div
            ref={contentRefs.current[index]}
            style={{ height: showContent[index] ? contentHeight[index] : '0' }}
            className="overflow-hidden rounded-[5px] bg-white font-bold transition-[height] ease-in-out"
          >
            <p className="p-5">{answer}</p>
          </div>
        </div>
      ))}     
       <button
                className="h-16 text-2xl font-medium border-black border-2 mt-20 p-2.5 bg-[#2fff2f]  hover:shadow-[0] shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
                >
            Get Started
            </button>
    </div>
    </>
  );
}
