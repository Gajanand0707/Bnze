import React from 'react';
import './Blog.css';
import blog_item_1 from '../../../assets/Home/blog-thumb-1.jpg';
import { Link } from 'react-router-dom';
import { Blogdata } from '../../../Blogs_data.js';

function Blog() {
    console.log(Blogdata);
    return (
        <div className='Blog'>
            <div className='container_main'>
                <div className='headings_text text-center'>
                    <p className='sub_heading'>Blog & News</p>
                    <h2>Why client reviews building trust credibility</h2>
                    <p>About apps would typically cover various topics related to mobile and computer applications, such as app reviews.</p>
                </div>
                <div className="blogs_list">
                    <div className='row '>
                        {
                            Blogdata.slice(0,3).map((blogDataItem) => (
                                <div className='col-md-4 mb-5' key={blogDataItem.id}>
                                    <div className='blog_item'>
                                        <img src={blog_item_1} alt='blog_item' className='rounded' />
                                        <div className="blog-tags">
                                            <span>{blogDataItem.tags }</span>
                                            <span>{blogDataItem.date || '07 Jun 2023'}</span>
                                        </div>
                                        <h3 className='mb-3'>{blogDataItem.heading }</h3>
                                        <Link to={blogDataItem.link || '/'}>Read more</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
