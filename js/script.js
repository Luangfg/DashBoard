let toggle = document.querySelector('.toggle');
        let navegacao = document.querySelector('.navegacao');
        let main = document.querySelector('.main');


        toggle.onclick = function(){
            navegacao.classList.toggle('active');
            main.classList.toggle('active');
        }


//ADD HOVERED NA CLASSE SELECIONADA LISTA ITEM
        let list = document.querySelectorAll('.navegacao li');
        function activeLink(){
            list.forEach((item) => 
            item.classList.remove('hovered'));
            item.classList.add('hovered');
        }
        list.forEach((item) =>
        item.addEventListener('mouseover',activeLink))