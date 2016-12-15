// @flow

import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class App extends React.Component {

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  };

  activeNoteEdit = (id) => {
    this.props.NoteActions.update({id, editing: true})
  };

  editNote = (id, task) => {
    const {NoteActions} = this.props;
    NoteActions.update({id, task, editing: false});
  };

  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();
    this.props.NoteActions.delete(id);
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
}),{
  NoteActions
})(App)
