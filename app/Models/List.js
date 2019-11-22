import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = name || "";
  }

  get Template() {
    return `
    <div class="col-5 mt-3 p-3 border rounded bg-info">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="ml-5">
      ${this.getSpeakerTemplates()}
      </dl>
      <form onsubmit="app.sessionsController.addSpeaker(event, '${this.id}')">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            class="form-control"
            id="topic"
            placeholder="Enter topic"
          />
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input
            type="time"
            class="form-control"
            id="time"
            placeholder="Enter time"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button class="btn btn-outline btn-danger" onclick="app.sessionsController.deleteSession()">Delete</button> 
      </form>
    </div>
    `;
  }
}
