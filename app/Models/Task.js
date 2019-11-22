import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id || "";
    this.listId = listId || "";
    this.name = name || "";
  }
  get Template() {
    return `
    <dt>${this.name}</dt>
    <button class="btn btn-outline btn-danger" onclick="app.listController.removeTask('${this.listId}','${this.id}')">Delete</button>
    `;
  }
}
