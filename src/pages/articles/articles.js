import React, { useState } from 'react';
import Post from '../../components/post/Post';

function ArticlesPage(){
    return(
        <>
        <h1>Articles and Assessments</h1>
        <Post/>
        <Post/>
        <Post/>
        </>
    )
}

export default ArticlesPage;