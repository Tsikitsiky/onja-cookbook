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
    console.log(setInputInAnObject());
    form.reset();
};

// create the object
const {name, picture, cook, difficulty, time, ingredients, steps} = form;

const setInputInAnObject = () => {
    for (let i = 0; i < ingredientList; i++) {
        ingredients.push(i);
    };
    for (let j = 0; j < stepList; j++) {
        steps.push(i);
    };
    const recipes = [{
        title: name.value,
        picture: picture.value,
        author: cook.value,
        difficulty: difficulty.value,
        timing: time.value,
        ingredients: [ingredients.value],
        steps: [steps.value],
    }];
    return recipes;
};

// add event listeners
addIngredientBtn.addEventListener('click', handleAddIngredient);
addStepBtn.addEventListener('click', handleAddStep);
submit.addEventListener('click', handleSubmit);