let urlCandidatos = 'http://localhost:3000/candidatos';

const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function(){
    
    $.ajax({
        url: urlCandidatos,
        dataType: 'json',
        method: 'GET',
        success: function(resposta){


            $.each(resposta, function(indice, item){
                
                lista.append(
                    `<li class="list-group-item">
                        ${item.nome} - ${item.vaga}
                    </li>`
                );

            });
        }
    
    }); 
}); 
