import React, { useEffect } from 'react'
export default function About(props) {
    useEffect(() => {
        document.title = "About Page";
    }, []);
    return (
        <>
            <p className='mt-5 fs-3' style={{ color: props.mode === 'dark' ? 'red' : 'black' }}>
                My name is <strong>Rahul Lakhchaura</strong>. Currently I am pursing B. tech in CSE from GEHU Dehradun. 
                My hobbies are listening to music, playing Chess, watching movies. My strengths are I’m punctuate, self-motivated, and quick leaner. 
                I am talkative in nature; it helps to improve my communication skill and knowledge and I am also a frank person to.
                This is my first website in <b>React.Js</b>
            </p>
            <h1 className='text-center' style={{ color: props.mode === 'dark' ? 'red' : 'black' }}>About website</h1>
            <p className='fs-2' style={{ color: props.mode === 'dark' ? 'red' : 'black' }}>
                In this website we can manipulate the text writen in the textarea.
                You can manipulate your text to <b>Upper & Lower Case.</b>
            </p>
            <p className='fs-4 fw-bold' style={{ color: props.mode === 'dark' ? 'red' : 'black' }}>More function are under work.</p>
        </>
    )
}
