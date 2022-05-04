let input=prompt('What would you like to do?')
const todos=['collect Chicken Eggs','Clean the eggs','Switch on stove']

while(input!=='uit' && input !=='u'){
    if (input==='list') {
         console.log('*************');
         for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }else if (input==='new') {
        const newTodo=prompt('What is new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }else if (input ==='delete') {
        const index = parseInt(prompt('Enter index number to be deleted?'))
        if(!Number.isNaN(index)){
            const deleted =todos.splice(index,1)
            console.log(`${deleted[0]} is deleted`);
        }else{
            console.log('unknown index');
        }
    }
     input=prompt('What ?')
}
console.log('Lets quit the app');   


