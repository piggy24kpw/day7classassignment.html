console.log ('Hello World!');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('faq').style.backgroundColor = 'red';
    let faq = document.getElementById('faq').children;
    console.log('faq');
    for(let i=0; i<faq.length; i++){
        if(faq[i].tagName == 'DT') {
            faq[i].style.backgroundColor = 'green';
            faq[i].style.textTransform = 'uppercase'
        }
    }
    let mobileIcon = document.getElementById('toggle-menu');
    let list = document.getElementById('menuList');
    mobileIcon.addEventListener('click', function() {
        list.classList.toggle('hidden');
    })

    let faqList = document.getElementById('faq');
    const descriptionList = document.querySelectorAll(".faqTitle");
    descriptionList.forEach(node => {
        node.addEventListener('click', () => {
            node.nextElementSibling.classList.toggle('hidden');
  })
})
})
