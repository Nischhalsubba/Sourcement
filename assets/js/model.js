    const model_open=document.querySelectorAll('.model_open');
    const model=document.querySelector('.model');
    const btn_close=document.querySelector('#btn_close');

    //var old_model_param={'title':document.querySelector(".model_content h2").innerHTML,'content':document.querySelector(".model_content p").innerHTML};
    var old_model_param={'content':document.querySelector(".model_content p").innerHTML};

model_open.forEach((m) => {
            m.addEventListener('click',(e)=>{
                e.preventDefault();
                var title=m.getAttribute('data-title');
                var content=m.getAttribute('data-content');
                
                showModel({'title':title,'content':content});
            })
        });

        btn_close.addEventListener('click',()=>{
            hideModel();
        });

        model.addEventListener('click',(e)=>{
            if(e.target==model)
                hideModel();
        })


function showModel(model_params) {
            setModelContent(model_params);
            model.style.display='block';
        }

        function setModelContent(model_params){
            //const heading=document.querySelector(".model_content h2");
            const content=document.querySelector(".model_content p");

            //if(model_params.title)
            //    heading.innerHTML=model_params.title;

            if(model_params.content)
                content.innerHTML=model_params.content;
        }

        function hideModel(){
            setModelContent(old_model_param);
            model.style.display='none';
        }

// class Model {
//     constructor(popup) {
//         this.trigger = popup;
//         this.model = document.querySelector('.model');
//         this.modelContent = document.querySelector('.model .model-content');


//         this.trigger.addEventListener('click', (e) => {
//             e.preventDefault();
//             var target = e.target || e.srcElement;
//             this.showModel(target);
//         });

//         this.model.addEventListener('click', (e) => {
//             this.closeModel();
//         })

//     }
//     showModel(btn) {
//         this.model.classList.toggle('show-model');
//         var a = btn.getAttribute('data-modelContent');
//         console.log(btn)
//     }

//     closeModel() {
//         this.model.classList.toggle('show-model');
//     }

// }