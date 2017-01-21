import assert from 'assert';
import NoteActions from '../app/actions/NoteActions';
import NoteStore from '../app/stores/NodeStore';
import alt from '../app/libs/alt';

alt.addStore('NoteStores', NoteStore);

describe('NoteStore', function () {
  beforeEach(function () {
    alt.flush();
  });

  it('create notes', function () {
    const task = 'task';

    NoteActions.create({task});

    const state = alt.stores.NoteStore.getState();

    assert.equal(state.notes.length, 1);
    assert.equal(state.notes[0].task, task);
  });

  it('updates notes', function () {
    const NoteStore = alt.stores.NoteStore;
    const task = 'test';
    const updateTask = 'test new';

    NoteActions.create({id: 123, task});

    const note = NoteStore.getState().notes[0];

    NoteActions.update({...note, task: updateTask});

    const state = NoteStore.getState();

    assert.equal(state.notes.length, 1);
    assert.equal(state.notes[0].task, updateTask)
  });

  it('deletes notes', function () {
    const NoteStore = alt.stores.NoteStore;

    NoteActions.create({id: 123, task: 'test'});

    const note = NoteStore.getState.notes[0];

    NoteActions.delete(note.id);

    const state = NoteStore.getState();

    assert.equal(state.notes.length, 0);
  });
});
