const inputNumber = document.getElementById("table") as HTMLInputElement;
const form = document.getElementById('form') as HTMLFormElement
const card = document.getElementById('card') as HTMLElement
const ul = document.getElementById('tableUl') as HTMLElement
const tableOf = document.getElementById('tableOf') as HTMLElement

form?.addEventListener('submit', event => {
    event.preventDefault()
    ul.innerHTML = ''
        
    const valueInput: number = parseInt(inputNumber.value)
    for(let i = 1; i < 11; i++){  
        card?.classList.remove('hidden')
        tableOf.innerText = `Table of ${valueInput} - 10`;
        ul.innerHTML += `
            <li>
                <div
                    class="flex items-center cursor-pointer p-3 text-base font-bold text-gray-300 bg-gray-500 rounded-lg bg-gray-50 hover:bg-gray-600 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 ms-3 whitespace-nowrap">${valueInput} x ${i} = ${valueInput * i}</span>
                </div>
            </li>
        `
    }
    form.reset()
})