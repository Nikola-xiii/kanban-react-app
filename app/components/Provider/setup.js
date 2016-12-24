import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NodeStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);

  persist(alt, storage(localStorage), 'app');
}
