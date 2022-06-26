const $contenido = document.querySelector('.contenedor'),
$template = document.getElementById('template').content,
$fragment = document.createDocumentFragment();

const getRick = async()=>{
    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/`),
        json = res.data.results;
        console.log(json);

        json.forEach(el=>{
            $template.querySelector('.nombre').textContent = el.name;
            $template.querySelector('.img').src = el.image;
            $template.querySelector('.created').textContent = el.created;
            $template.querySelector('.gender').textContent = el.gender;
            $template.querySelector('.species').textContent = el.species;
            $template.querySelector('.status').textContent = el.status;

            const clone = document.importNode($template, true);
            $fragment.appendChild(clone);
        })
        $contenido.appendChild($fragment);

    } catch (error) {
        console.log(error);
    }
}

getRick();