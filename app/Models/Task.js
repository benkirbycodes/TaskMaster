import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id || "";
    this.listId = listId || "";
    this.name = name || "";
  }
  get Template() {
    return `
    <dt class=" mb-1"><h3>${this.name}</h3></dt>
    <button type="submit"class="btn btn-sm btn-success" onclick="app.listController.removeTask('${this.listId}','${this.id}')">Complete?</button>
    `;
  }
}
