import storage from '../../libs/storage';
import persist from '../../libs/persist';
import LaneStore from '../../stores/LaneStore';
import NoteStore from '../../stores/NodeStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LAneStore', LaneStore);

  persist(alt, storage(localStorage), 'app');
}
