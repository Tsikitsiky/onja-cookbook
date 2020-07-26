const form = document.querySelector('form');
const addIngredientBtn = form.querySelector('.add-new-ingredient');
const addStepBtn = form.querySelector('.add-new-step');
const submit = form.querySelector('.submit-btn');
const ingredientList = form.querySelector('.ingredient-list');
const ingredientInput = form.querySelector('#ingredients');
const stepList = form.querySelector('.step-list');
const stepInput = form.querySelector('#steps');

// handle  add ingredient btns
const handleAddIngredient = (e) => {
e.preventDefault();
const newIngredient = `
    <li><input type="text" name="ingredients" id="ingredients"><br></li>
`;
    ingredientList.insertAdjacentHTML('beforeend', newIngredient);
};

// handle  add step btns
const handleAddStep = (e) => {
    e.preventDefault();
    const newStep = `
        <li><input type="text" name="steps" id="steps"><br></li>
    `;
    stepList.insertAdjacentHTML('beforeend', newStep);
    };
    

// handle submit 
const handleSubmit = (e) => {
    e.preventDefault();
console.log(e);
};

// add event listeners
addIngredientBtn.addEventListener('click', handleAddIngredient);
addStepBtn.addEventListener('click', handleAddStep);
submit.addEventListener('click', handleSubmit);