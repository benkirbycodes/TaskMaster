import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), listId, name }) {
    this.id = id || "";
    this.listId = listId || "";
    this.name = name || "";
  }
  get Template() {
    return `
    <dt class="">${this.name}</dt>
    <button type="submit"class="btn btn-sm btn-danger" onclick="app.listController.removeTask('${this.listId}','${this.id}')">Delete</button>
    `;
  }
}
