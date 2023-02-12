const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Change size on hover on left div
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// Change size on hover on right div
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))