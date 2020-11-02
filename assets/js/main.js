//criamos um escopo geral
function escopoGeral(){
    //neste escopo fazemos query nas classes onde estarão respectivamente 
    //inputs, resultados, lição e imagem
    //guardamos em variáveis para uso nas outras funções.
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const licao = document.querySelector('.licao');
    const imagem = document.querySelector('.imagem');

            //esta função faz o cálculo. Primeira coisa dar como parâmetro um evento e nele
            //previnir a ação default do navegador.
            function calculoIMC(evento){
            evento.preventDefault();
            //criamos variáveis COM OS VALORES de altura e peso.
            const alt = form.querySelector('.altura').value;
            //aqui convertemos em número e mudamos o inser da string de vírgula para ponto
            //para que o JS consiga calcular. 
            const altC = Number(alt.replace(',', '.'));
            const pso = form.querySelector('.peso').value;
            const psoC = Number(pso.replace(',', '.'));
            ///verificadinha básica se tudo está nos conformes até aqui.
            console.log(`Dados recebidos: ${altC}, ${psoC}`);

            //agora o cálculo propriamente dito:
            //imc = peso dividido pela altura ao quadrado. 
            //então em imcP calculei
            const imcP = psoC / (altC * altC);
            //e em imc salvei o resultado de imcP com 2 casas decimais.
            const imc = imcP.toFixed(2);
            //mais uma verificadinha...
            console.log(imc);

                //Agora as condicinoais para o resultado: 
                //se imc for menor ou igual a 18.5
                if (imc <= 18.5){
                    //mostra no console.
                    console.log('Baixo Peso');
                    //insere em result lá no html a string abaixo.
                    result.innerHTML = `Seu IMC é <strong>${imc} - Baixo Peso</strong></br>`;
                    //insere em licao l'ano html a string abaixo.
                    licao.innerHTML = `O IMC de ${imc} significa que você está está abaixo de ${imc} kg/m², o que represneta riscos para a tua saúde.`
                    //insere em imagem lá no html a imagem correspondente.
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/baixo_peso.jpg"/>`

                } else if (imc >=18.6 && imc <= 24.9) {
                    console.log('Peso Normal');
                    result.innerHTML = `Seu IMC é <strong>${imc} - Peso Normal</strong></br>`;
                    licao.innerHTML = `O IMC de ${imc} está entre 18,50 e 24,99 kg/m² o que está de bom tamanho. Segura a onda nas pizzas e continue assim!`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/peso_normal.jpg"/>`
                } else if (imc >= 25 && imc <= 29.999999) {
                    console.log('Excesso de Peso')
                    result.innerHTML = `Seu IMC é <strong>${imc} - Excesso de peso</strong></br>`;
                    licao.innerHTML = `O IMC de ${imc} está entre 25 e 29,99 kg/m² o que significa um sinal de alerta: não coma tanta pizza!`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/excesso.jpg"/>`           
                } else if (imc >= 30 && imc <=34.9) {
                    console.log ('Obesidade de classe 1')
                    result.innerHTML = `Seu IMC é <strong>${imc} - Obesidade de classe 1</strong></br>`;
                    licao.innerHTML = `O IMC de ${imc} está entre 30 e 34,99 kg/m² o que significa que o dono da pizzaria ser teu padrinho de casamento não é algo normal. Pega leve, caminha e te cuida!`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/obesidade1.jpg"/>` 
                
                } else if (imc >= 35 && imc <=39.9) {
                    console.log ('Obesidade de classe 2')
                    result.innerHTML = `Seu IMC é <strong>${imc} - Obesidade de classe 2</strong></br>`;
                    licao.innerHTML = `O IMC de ${imc} está entre 33,5 e 39,99 kg/m² o que significa que comer mais de um combo no McDonald's não é tão normal quanto possa parecer pra ti. Cuide dos hábitos!`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/obesidade2.jpg"/>`           
                } else if (imc >= 40 && imc <= 50){
                    console.log ('Obesidade de classe 3')
                    result.innerHTML = `Seu IMC é <strong>${imc} - Obesidade de classe 3</strong></br>`;
                    licao.innerHTML = `O IMC de ${imc} é maior que 40 kg/m² o que significa que reclamar no Facebook porquê a loja Varca fechou não é normal. Só Jesus na causa!`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/obesidade3.jpg"/>` 
                
                } else {
                    console.log ('Estás mais gordo do que a tabela pode calcular!!!')
                    result.innerHTML = `Seu IMC é <strong>${imc} - Revise as contas aí, amigão</strong></br>`;
                    licao.innerHTML = `Esse IMC de ${imc} é maior que qualquer um que já tenha visto! Não pode ser real.`
                    imagem.innerHTML = `<img class="imagenzinha" src="./assets/img/ob4.jpg"/>`  
                }
            //aqui retorno o imc ao final da função calculoIMC().    
            return imc            
        }
    //dentro da função escopoGeral() eu fico escutando a classe form e caso ela retorne um submit
    //ou seja, clique no botão, executa calculoIMC.    
    form.addEventListener('submit', calculoIMC);

}
//pra tudo funcionar o escopo geral tem que rodar na inicializaçao.
escopoGeral()











