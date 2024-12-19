    //declaraçao das variaveis globais
    let desempenho = 0;
    let tentativas = 0;
    let acertos = 0;
    let jogar = true;

    //captura os botoes pelos ids e adiciona um evento de clique
    const btnReiniciar = document.getElementById('reiniciar');
    const btnJogarNovamente = document.getElementById('joganovamente');

    //funçao que zera os valores das variáveis controladoras
    function reiniciar() {
      desempenho = 0;
      tentativas = 0;
      acertos = 0;
      jogar = true;
      jogarNovamente();
      atualizaPlacar(0, 0);
      //mostra o botao jogarnovamente alterando a classe css (className)
      btnJogarNovamente.className = 'visivel';
      //oculta o botao reiniciar alterando a classe css (className)
      btnReiniciar.className = 'invisivel';
    }

    //funçao jogar novamente
    function jogarNovamente() {
      jogar = true;//variável jogar volta a ser verdadeira
      //armazenamos todas as div na variável divis (getElementsByTagName)
      let divis = document.getElementsByTagName("div");
      //percorremos todas as divs armazenadas
      for (i = 0; i < divis.length; i++) {
        //verificamos se sao as divs com ids 0 ou 1 ou 2
        if (divis[i].id == 0 || divis[i].id == 1 || divis[i].id == 2 || divis[i].id == 3) {
          //alteramos a classe css das divs 0, 1 e 2 (className)
          divis[i].className = "inicial";
        }
      }

      //armazenamos a imagem do Smile na variável imagem (getElementById)
      let imagem = document.getElementById("imagem");
      let imagem2 = document.getElementById("imagem2");
      //se a imagem nao for vazia (se ela existir)
      if (imagem != "") {
        //removemos a imagem do Smile
        imagem.remove();
        imagem2.remove();
      }
    }

    //funçao que atualiza o placar
    function atualizaPlacar(acertos, tentativas) {
      //calcula o desempenho em porcentagem
      desempenho = (acertos / tentativas) * 100;
      //escreve o placar com os valores atualizados (innerHTML)
      document.getElementById("resposta").innerHTML = "Placar - Acertos: " + acertos + " Tentativas: " + tentativas + " Desempenho: " + Math.round(desempenho) + "%";

    }

    //funçao executada quando o jogador acertou
    function acertou(carta) {
      //altera a classe CSS da <div> escolhida pelo jogador (className)
      carta.className = "acertou";
      //Criar uma constante img que armazena um novo cartaeto imagem com largura de 100px
      const img = new Image(100);
      img.id = "imagem";
      //altera o atributo src (source) da imagem criada
      img.src = "data:image/jpeg;base64,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";
      //adiciona a imagem criada na div (carta) escolhida pelo jogador (appendChild)
      carta.appendChild(img);
    }


    //funçao executada quando o jogador errou
    function errou(carta) {
      //altera a classe CSS da <div> escolhida pelo jogador (className)
      carta.className = "errou";
      //Criar uma constante img que armazena um novo cartaeto imagem com largura de 100px
      const img = new Image(100);
      img.id = "imagem2";
      //altera o atributo src (source) da imagem criada
      img.src = "https://images.uncyc.org/pt/thumb/9/9d/Errou%21.gif/200px-Errou%21.gif";
      //adiciona a imagem criada na div (carta) escolhida pelo jogador (appendChild)
      carta.appendChild(img);
    }

    

    //Função que sorteia um número aleatório entre 0 e 2 e verifica se o jogador acertou
    function verifica(carta) {
      //se jogar é verdadeiro
      if (jogar) {
        //jogar passa a ser false
        jogar = false;
        //incrementa as tentativas
        tentativas++;
        //verifica se jogou 3 vezes
        if (tentativas == 4) {
          //oculta o botao joganovamente alterando a classe css (getElementById e className)
          btnJogarNovamente.className = 'invisivel';
          //mostra o botao reiniciar alterando a classe css (getElementById e className)
          btnReiniciar.className = 'visivel';
        }
        //a variável sorteado recebe um valor inteiro (Math.floor) aleatório (Math.random)
        let sorteado = Math.floor(Math.random() * 4);
        //se o id da <div> escolhida pelo<div id="2" class="inicial" onclick="verifica(this)">2</div> jogador for igual ao número sorteado
        if (carta.id == sorteado) {
          //chama a funçao acertou passando a div escolhida pelo jogador
          acertou(carta);
          //incrementa o contador de acertos
          acertos++;
        } else {//se errou a tentativa
          //altera a classe da <div> escolhida pelo jogador para a classe errou
          carta.className = "errou";
          errou(carta);

          //armazena a div aonde Smile está escondido (getElementById)
          const cartaSorteado = document.getElementById(sorteado);
          //chama a funçao acertou para mostrar a div aonde está o Smile
          acertou(cartaSorteado);
        }
        //chama a funçao que atualiza o placar
        atualizaPlacar(acertos, tentativas);
      } else {//se o jogador clicar em outra carta sem reiniciar o jogo, recebe um alerta
        alert('Clique em "Jogar novamente"');
      }
    }

//adiciona eventos aos botões
btnJogarNovamente.addEventListener('click', jogarNovamente);
btnReiniciar.addEventListener('click', reiniciar);