import ListService from "../Services/ListService.js";
import store from "../store.js";
import List from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listsTemplate = "";
  let lists = store.Lists; //NOTE changed to .Lists to persist on page reload
  lists.forEach(list => {
    listsTemplate += list.Template;
  });
  document.querySelector("#lists").innerHTML = listsTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    console.log("Hello from listController");
    let formData = event.target;
    let newList = {
      name: formData.name.value,
      tasks: []
    };
    ListService.addList(newList);
    formData.reset();
    _drawLists();
  }
  addTask(event, listId) {
    event.preventDefault();
    console.log("Hello From list Controller");
    let formData = event.target;
    let newTask = {
      name: formData.name.value,
      listId: listId
    };
    ListService.addTask(newTask);
    formData.reset();
    _drawLists();
  }
  removeList(listId) {
    // @ts-ignore
    if (confirm("Are You Sure You Want To Delete This List?")) {
      ListService.removeList(listId);
    }

    _drawLists();
  }
  removeTask(listId, taskId) {
    // @ts-ignore
    if (confirm("Are You Sure You Want To Delete This Task?", "warning")) {
      ListService.removeTask(listId, taskId);
    }
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems(tasks)
}
