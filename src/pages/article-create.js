import { useState } from "react";
import ReactQuill from "react-quill"
import Button from "react-bootstrap/Button";
import 'react-quill/dist/quill.snow.css';

function ArticlesCreate(){
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')

    async function CreateNewArticle(event){
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0] )
        event.preventDefault();
        console.log(files)
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
        })
    }

    return(
        <>
        <form>
            <h2>Create and Article</h2>
            <input type='title' 
                placeholder={'Title'}
                value={title}
                onChange={event => setTitle(event.target.value)}/>
            <input type="summary" 
                placeholder={'Summary'}
                value={summary}
                onChange={event => setSummary(event.target.value)}/>
            <input type='file'
                onChange={event => setFiles(event.target.files)}/>
            <ReactQuill 
                value={content} 
                onChange={newValue => setContent(newValue)}/>
            <Button variant="dark" onClick={CreateNewArticle}>Create Article</Button>
        </form>
        </>
    )
}


export default ArticlesCreate;