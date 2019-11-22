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
    
    <div class="card mx-auto text-white bg-dark">
    <div class="card-body p-3 border rounded list">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="text-center ">
      ${this.getTaskTemplates()}
      </dl>
      <form onsubmit="app.listController.addTask(event, '${this.id}')">
        <div class="form-group">
          <label for="name">Task</label>
          <input type="text" class="form-control" required id="name" placeholder="Enter name" />
        </div>
       
        
        
        <button type="submit"  class="btn text-white btn-primary">Submit</button>
        <button type="button" class="btn text-white btn-danger btn-outline " onclick="app.listController.removeList('${
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
