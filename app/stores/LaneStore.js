import LaneActions from '../actions/LaneActions';

export default class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {
    lane.notes = lane.notes || [];

    this.setState({
      lanes: this.lanes.concat(lane)
    });
  }

  update(updateLane) {
    this.setState({
      lanes: this.lanes.map(lane => {
        if(lane.id === updateLane.ia) {
          return Object.assign({}, lane, updateLane);
        }

        return lane;
      })
    })
  }

  attachToLane({laneId, noteId}) {
    this.setState({
      lanes: this.lanes.map(lane => {
        if(lane.notes.includes(noteId)) {
          lane.notes = lane.notes.filter(note => note != noteId)
        }

        if(lane.id === laneId) {
          lane.notes = lane.notes.concat([noteId]);
        }
      })
    });
  }

  detachFromLane({laneId, noteId}) {
    this.setState({
      lanes: this.lanes.map(lane => {
        if(lane.id === laneId) {
          lane.notes = lane.notes.filter(note => note !== noteId)
        }

        return lane;
      })
    });
  }
}
