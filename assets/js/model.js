    const model_open = document.querySelectorAll('.model_open');
    const model = document.querySelector('.model');
    const btn_close = document.querySelector('#btn_close');

if (model) {
        
    //var old_model_param={'title':document.querySelector(".model_content h2").innerHTML,'content':document.querySelector(".model_content p").innerHTML};
    var old_model_param = {
        'content': document.querySelector(".model_content p").innerHTML
    };

    model_open.forEach((m) => {
        m.addEventListener('click', (e) => {
            e.preventDefault();
            var title = m.getAttribute('data-title');
            var content = m.getAttribute('data-content');

            showModel({
                'title': title,
                'content': content
            });
        })
    });

    btn_close.addEventListener('click', () => {
        hideModel();
    });

    model.addEventListener('click', (e) => {
        if (e.target == model)
            hideModel();
    })


    function showModel(model_params) {
        setModelContent(model_params);
        model.style.display = 'block';
    }

    function setModelContent(model_params) {
        //const heading=document.querySelector(".model_content h2");
        const content = document.querySelector(".model_content p");

        //if(model_params.title)
        //    heading.innerHTML=model_params.title;

        if (model_params.content)
            content.innerHTML = model_params.content;
    }

    function hideModel() {
        setModelContent(old_model_param);
        model.style.display = 'none';
    }
}