async function loadComponents(selector,path) {
    const res = await fetch(path);
    document.querySelector(selector).innerHTML = await res.text();
    console.log(`Loaded ${path} into ${selector}`);
    
}

loadComponents("#nav","Components/nav.html");