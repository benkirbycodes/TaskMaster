import { generateId } from "../utils.js";
import Task from "./Task.js";
export default class List {
  constructor({ id = generateId(), name, tasks }) {
    this.id = id || generateId();
    this.name = name;
    this.tasks = tasks.map(t => new Task(t));
  }

  get Template() {
    return `
    
    <div class="card">
    <div class="card-body mt-3 p-3 border rounded list">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="ml-5">
      ${this.getTaskTemplates()}
      </dl>
      <form onsubmit="app.listController.addTask(event, '${this.id}')">
        <div class="form-group">
          <label for="name">Task</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name" />
        </div>
       
        
        
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-outline btn-danger" onclick="app.listController.removeList('${
          this.id
        }')">Delete</button> 
      </form>
    </div>
    </div>
    
    `;
  }
  getTaskTemplates() {
    let template = "";
    this.tasks.forEach(task => {
      template += task.Template;
    });
    return template;
  }
}
