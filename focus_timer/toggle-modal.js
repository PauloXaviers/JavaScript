let darkMode = true
const btnToggle = document.getElementById('toggle-mode')

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})