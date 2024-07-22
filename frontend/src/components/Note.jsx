import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {

    return (
        <div className="note-container">

            <div className="inline">
                <h4 className="title">Title : </h4>
                <h4 className="note-title">{note.title}</h4>
            </div>
            
            <div className="inline">
                <h4 className="title">Description : </h4>
                <h4 className="note-content">{note.content}</h4>
            </div>

            <div className="inline">
                <h4 className="title">Created At : </h4>
                <h4 className="note-date">{note.createdAt}</h4>
            </div>

            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note