const inputNumber = document.getElementById("table");
const form = document.getElementById('form')
const card = document.getElementById('card')
const ul = document.getElementById('tableUl')
const tableOf = document.getElementById('tableOf')

form?.addEventListener('submit', event => {
    event.preventDefault()
    ul.innerHTML = ''
        
    const valueInput: number = inputNumber.value
    for(let i = 1; i < 11; i++){  
        card?.classList.remove('hidden')
        tableOf.innerText = `Table of ${valueInput} - 10`;
        ul.innerHTML += `
            <li>
                <div
                    class="flex items-center p-3 text-base font-bold text-gray-300 bg-gray-500 rounded-lg bg-gray-50 hover:bg-gray-600 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 ms-3 whitespace-nowrap">${valueInput} x ${i} = ${valueInput * i}</span>
                </div>
            </li>
        `
    }
    form.reset()
})