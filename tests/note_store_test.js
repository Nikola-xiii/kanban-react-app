import assert from 'assert';
import NoteActions from '../app/actions/NoteActions';
import NoteStore from '../app/stores/NodeStore';
import alt from '../app/libs/alt';

alt.addStore('NoteStores', NoteStore);

describe('NoteStore', function () {
  it('create notes', function () {
    const task = 'task';

    NoteActions.create({task});

    const state = alt.stores.NoteStore.getState();

    assert.equal(state.notes.length, 1);
    assert.equal(state.notes[0].task, task);
  });
});
