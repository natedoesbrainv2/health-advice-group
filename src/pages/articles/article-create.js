import { useState } from "react";
import ReactQuill from "react-quill"
import Button from "react-bootstrap/Button";
import 'react-quill/dist/quill.snow.css';

function ArticlesCreate() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')

    return (
        <>
            <form id='creating-an-article'>
                <h2>Create an Article</h2>
                <input type='title'
                    placeholder={'Title'}
                    value={title}
                    onChange={event => setTitle(event.target.value)} />
                <input type="summary"
                    placeholder={'Summary'}
                    value={summary}
                    onChange={event => setSummary(event.target.value)} />
                <ReactQuill
                    id="article-creator-input"
                    value={content}
                    onChange={newValue => setContent(newValue)} />
                <Button variant="dark">Create Article</Button>
            </form>
        </>
    )
}


export default ArticlesCreate;