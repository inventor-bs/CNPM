import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = () => {
    return (
        <div className='post'>
            <Link className="link" to="/post/:postId"><img className='post__Img' src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" /></Link>
            <div className="post__Infor">
                <div className="post__Infor--Cats">
                    <span className="post__Infor--Cat">
                        Algorithms
                    </span>
                    <span className="post__Infor--Cat">
                        Language Programing
                    </span>
                </div>
                <Link className="link" to="/post/:postId">
                    <span className="post__Infor--Title">
                        Lorem ipsum dolor sit amet.
                    </span>
                </Link>

                <hr />

                <span className="post__Infor--Date">
                    19:00:00 29/10/2022
                </span>

                <p className="post__Infor--Des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti dolorem esse necessitatibus accusantium dicta praesentium possimus, ducimus sed recusandae aperiam unde tempore voluptatum assumenda asperiores sapiente nam voluptatibus libero.
                </p>
            </div>
        </div>

    );
}

export default Post;
