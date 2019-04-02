window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
    getAllEvents();
    document.expenseFormSubmit.submit.addEventListener("click", createExpense);
};

function saveExpense(e){
  let formid= e.currentTarget.form.id;
  let id = formid.split('-').pop();
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'api/expenses/'+id);

    xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
            let data = JSON.parse(xhr.responseText);
            getAllEvents();   
            }
            else {
                console.log("PUT request failed.");
                console.error(xhr.status + ': ' + xhr.responseText);
            }
        }
    };
    let expenseObj = {
       category:{
           id:1
       },
       name: e.currentTarget.form.childNodes[1].value,
       description:e.currentTarget.form.childNodes[2].value,
       cost: e.currentTarget.form.childNodes[4].value,
       date: new Date()
    }

    xhr.send(JSON.stringify(expenseObj)); 
}

function getAllEvents() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/expenses', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if(xhr.status >= 200 && xhr.status <300){
                let data = JSON.parse(xhr.responseText);
                displayExpense(data);
            }
        else{
        	 document.getElementById('expenseTableBody').textContent = 'No Records found';
        } 
    }
    };
    xhr.send(null);
}

const displayExpense = function(data){
    let tbody= document.getElementById('expenseTableBody');
    tbody.textContent="";
	let totalCost=0;
	for (let i = 0; i <data.length; i++){
        let tr = document.createElement('tr'); 
 
        tr.setAttribute("id",data[i].id);

        let tdBtnsEdit = document.createElement('button');
        tdBtnsEdit.textContent="Edit";

        let editForm = document.createElement('form');
        editForm.setAttribute("id","expenseFormEdit-"+data[i].id);

        let in1 = document.createElement('input');
        in1.setAttribute("type", "hidden");
        let in2 = document.createElement('input');
        let in3 = document.createElement('input');
        let in4 = document.createElement('input');
        let in5 = document.createElement('input');
        let tdBtnsSave = document.createElement('button');
        tdBtnsSave.textContent="Save";

        in1.value = data[i].category.id;
        in2.value = data[i].name;
        in3.value = data[i].description;
        in5.value = data[i].cost;

        //create expandable div
        let tr2 = document.createElement('tr'); 
        let expandDiv = document.createElement('div');
        expandDiv.setAttribute("class","myDIV");
        expandDiv.setAttribute("id","editbtn-"+data[i].id);
        expandDiv.style.display = "none";
        editForm.appendChild(in1);
        editForm.appendChild(in2);
        editForm.appendChild(in3);
        editForm.appendChild(in5);
        editForm.appendChild(tdBtnsSave);

        expandDiv.appendChild(editForm);

        let tdBtnsDelete = document.createElement('a'); 
        tdBtnsDelete.setAttribute("class","delete");
        tdBtnsDelete.setAttribute("href","#deleteEmployeeModal");
        tdBtnsDelete.setAttribute("id", "deleteExpenseModal");

        let tdBtnsDeleteIcon = document.createElement('i');
        tdBtnsDeleteIcon.innerHTML=`&#xE872;`;
        tdBtnsDeleteIcon.setAttribute("class","material-icons");
        tdBtnsDeleteIcon.setAttribute("data-toggle", "tooltip");
        tdBtnsDeleteIcon.setAttribute("title", "Delete");

        tdBtnsEdit.addEventListener("click", displayform);
        tdBtnsSave.addEventListener("click", saveExpense);

        tdBtnsDelete.appendChild(tdBtnsDeleteIcon);
        tdBtnsDelete.setAttribute('id',data[i].id);
	    let td1 = document.createElement('td');
	    let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let tdBtns = document.createElement('td');

        
	    td1.appendChild(document.createTextNode(data[i].category.name));
	    td2.appendChild(document.createTextNode(data[i].name));
        td3.appendChild(document.createTextNode(data[i].description));
        td4.appendChild(document.createTextNode(data[i].date.substring(0, 10)));
        td5.appendChild(document.createTextNode(data[i].cost));
        tdBtns.appendChild(tdBtnsEdit);
        tdBtns.appendChild(tdBtnsDelete);

	    tr.appendChild(td1);
	    tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(tdBtns);
        tr2.appendChild(expandDiv);

        tbody.appendChild(tr);
        tbody.appendChild(tr2);

        tdBtnsDelete.addEventListener("click", deleteExpense);
        totalCost=totalCost+data[i].cost
    }
    let res = document.getElementById("total");
res.textContent=totalCost;
}
const displayform = function(e){
    let nextSiblingId = e.target.nextSibling.id;
    var x = document.getElementById("editbtn-"+nextSiblingId);
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    console.log("click");
}
const createExpense= function(e){
    e.preventDefault();
    let categoryId= expenseFormSubmit.category.selectedOptions[0].value;
    let name= expenseFormSubmit.name.value;
    let description= expenseFormSubmit.description.value;
    let cost= expenseFormSubmit.cost.value;
    if(categoryId !== "" 
        && name !== "" && description !== ""  
        && cost !== "" ){
            console.log(categoryId +name +description +cost );
     let expenseObj = {
        category:{
            id:categoryId
        },
        name,
        description,
        cost,
        date: new Date()
     }     
    postCreateExpesnseForm(expenseObj);
    }
}

const postCreateExpesnseForm= function(expenseObj){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/expenses');

    xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            displayExpense(data);
            let modal = document.getElementById("addExpenseModal");
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            modal.style.display = "none";
            window.location.reload();
            }
            else {
                let error = document.createElement("p");
                error.setAttribute("class","error");;
                error.textContent= "Error.Expense wasn't submitted.";
                document.getElementById("addexpenseModalBody").appendChild(error);
                console.log("POST request failed.");
                console.error(xhr.status + ': ' + xhr.responseText);
            }
        }
    };


    xhr.send(JSON.stringify(expenseObj)); 
}

const deleteExpense = function(){
    const id = this.parentElement.parentElement.id;

	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/expenses/'+id, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if(xhr.status >= 200 && xhr.status <300){
                let isDeleted = xhr.responseText;
                getAllEvents();              
            }
        else{
        	getAllEvents("Not Found");
        } 
    }
    };
    xhr.send(null);
    }