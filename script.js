window.onload = () => {
    const form1 = document.querySelector("#addForm");
  
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
  
    let editItem = null;
  
    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
  };
  
  function addItem(e) {
    e.preventDefault();
  
    if (submit.value != "Submit") {
      console.log("Hello");
  
      editItem.target.parentNode.childNodes[0].data
        = document.getElementById("item").value;
  
      submit.value = "Submit";
      document.getElementById("item").value = "";
  
      return false;
    }
  
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
      return false;
    else
      document.getElementById("item").value = "";
  
    let li = document.createElement("li");
    li.className = "list-group-item";
  
    let deleteButton = document.createElement("button");
  
    deleteButton.className =
      "btn-danger btn btn-sm float-right Mark_done";
  
    deleteButton.appendChild(document.createTextNode("Completed"));
  
    let deleteButton1 = document.createElement("button");
    
    deleteButton1.className =
      "btn-success btn btn-sm float-right delete1";
  
    deleteButton1.appendChild(document.createTextNode("delete"));
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(deleteButton1);
  
    items.appendChild(li);
  }
  
  function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("Mark_done")) {
  
      let li = e.target.parentNode;
      var res = items.appendChild(li);
      res.style = "text-decoration: line-through;"
    }
    if (e.target.classList.contains("delete1")) {
  
      let li = e.target.parentNode;
      items.removeChild(li);
  
    }
  }
  
  function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
  }
  