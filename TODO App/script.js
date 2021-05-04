//set variables

let input = document.getElementById('add_list');

let submit = document.getElementById('submit');

let todo_data = document.querySelector('.todo_data');

let no_task = document.createElement('div');
    let no_task_text = document.createTextNode('no tasks to show');

let completed_task = document.getElementById('completed');

let task_num = document.getElementById('task_num');

let counter = 0;

let counter2 = 0;

//set events based on your functions

window.onload = pageOnLoad();


submit.onclick= function() {

    

    todo_data.style.display = 'block';

    if( input.value === '' || input.value.trim() === '')
    {
        noTaskChecker();
    }
    else
    {
        taskChecker()
    }
}

//set functions

function pageOnLoad(){
    input.value = '';
    input.focus();
}

noTaskChecker = () =>{

    no_task.classList.add('no_task');

    no_task.appendChild(no_task_text);

    todo_data.appendChild(no_task);

    setTimeout(() =>{
        no_task.remove();
    },2000);

} 

taskChecker = () =>{

    //add list
    no_task.remove();

    let task = document.createElement('div');

    task.classList.add('task');

    let span = document.createElement('span');

    let text_span_task = document.createTextNode(input.value);

    let button = document.createElement('button');

    let text_button_task = document.createTextNode('delete');

    span.appendChild(text_span_task);

    button.setAttribute('id','delete');

    button.appendChild(text_button_task);

    task.appendChild(span);

    task.appendChild(button);

    todo_data.appendChild(task);

    pageOnLoad();

    //increase task number
    counter++

    task_num.innerText = counter;
    //increase task number
    //add list

    //completed task
    taskCompleted(span);

    // delete task
    deletelist(button);
}





deletelist = (deleteButton) =>{
    deleteButton.addEventListener('click' ,(e)=>{

        if(e.target.id == 'delete'){

            e.target.parentElement.remove()

            counter =counter - 1;
            
            task_num.innerText = counter;

            counter2 =counter2 - 1;
            
            completed_task.innerText = counter2;

            if( counter2 === -1 )
            {
                counter2 = 0;

                completed_task.innerText = counter2;
            }

        }
    })
}

taskCompleted = (spanText) =>{

    spanText.addEventListener('click' , (e) =>{

        e.target.classList.toggle('line-through');

        if( e.target.classList.contains('line-through') )
        {
            counter2 = counter2 + 1;

            completed_task.innerText = counter2;
        }
        else
        {
            counter2 =counter2 -1;
            
            completed_task.innerText = counter2;

            
        }

    })
}

