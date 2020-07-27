const form = document.querySelector('form');
const addIngredientBtn = form.querySelector('.add-new-ingredient');
const addStepBtn = form.querySelector('.add-new-step');
const submit = form.querySelector('.submit-btn');
const ingredientList = form.querySelector('.ingredient-list');
const ingredientInput = form.querySelector('#ingredients');
const stepList = form.querySelector('.step-list');
const stepInput = form.querySelector('#steps');
const recipes = [];

// handle  add ingredient btns
const handleAddIngredient = (e) => {
    e.preventDefault();
    const number = ingredientList.children.length + 1;
    const newIngredient = `
        <li><input type="text" name="ingredient${number}" id="ingredient${number}"><br></li>
    `;
    ingredientList.insertAdjacentHTML('beforeend', newIngredient);
};

// handle  add step btns
const handleAddStep = (e) => {
    e.preventDefault();
    const number = stepList.children.length + 1;
    const newStep = `
        <li><input type="text" name="step${number}" id="step${number}"><br></li>
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
const {name, picture, cook, difficulty, time} = form;

const setInputInAnObject = () => {
    let ingredientArray = [];
    for (let i = 0; i < ingredientList.children.length; i++) {
        ingredientArray.push(ingredientList.children[i].children[0].value);

    };
    let stepArray = [];
    for (let j = 0; j < stepList.children.length; j++) {
        stepArray.push(stepList.children[j].children[0].value);
    };
    const recipe = {
        title: name.value,
        picture: picture.value,
        author: cook.value,
        difficulty: difficulty.value,
        timing: time.value,
        ingredients: [...ingredientArray],
        steps: [...stepArray],
    };
    recipes.push(recipe);
    return recipe;
};

// add event listeners
addIngredientBtn.addEventListener('click', handleAddIngredient);
addStepBtn.addEventListener('click', handleAddStep);
form.addEventListener('submit', handleSubmit);