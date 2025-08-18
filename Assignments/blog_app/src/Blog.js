import React from 'react'
import img from './thumbnail.jpg'
import './blog.css'

export function Blog(){

    var title = "10 Tips for Effective Time Management";
    var author = "John Doe";
    var description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
    
    const containerStyle = {
        padding: '20px',
        border : '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '50px auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9'
    }

    const titleStyle = {
        color: '#333',
        marginBottom: '10px'
    }

    const authorStyle = {
        color: '#777',
        marginBottom: '15px',
        fontStyle: 'italic'
    }

    const descriptionStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#444'
    }


    return<>
        <div style={containerStyle} className='blog-container'>
            <img src={img} alt="" className='blog-img'/>
            <h1 style={titleStyle}>{title}</h1>
            <h3 style={authorStyle}>By {author}</h3>
            <p style={descriptionStyle}>{description}</p>
        </div>
    </>
            
}