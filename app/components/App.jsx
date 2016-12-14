// @flow

import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';


class App extends React.Component {

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };

  activeNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id == id) {
          note.editing = true;
        }

        return note;
      })
    });
  };

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id == id) {
          note.editing = false;
          note.task = task;
        }

        return note;
      })
    });
  };

  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  render() {
    const {notes} = this.props;

    return (
      <div>
        {this.props.test}
        <button className="add-notes" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activeNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    )
  }
}

export default connect(({notes}) => ({
  notes
}))(App)
