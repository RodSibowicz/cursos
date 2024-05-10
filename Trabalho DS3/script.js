function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Oculta todas as tabelas
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  
  // Remove a classe "active" de todos os botões
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  
  // Exibe apenas a tabela correspondente à aba selecionada
  document.getElementById(tabName).style.display = "block";
  
  // Adiciona a classe "active" ao botão atual
  evt.currentTarget.classList.add("active");
}

// Exibir a primeira tabela quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
  var firstTabContent = document.getElementById("subsequente");
  firstTabContent.style.display = "block";
  document.getElementById("defaultOpen").click();
});


switch(contexto){
  case "subsequente":
      table.innerHTML = `<table>
      <tr>
        <td>Eixo Tecnológico</td>
        <td>Informação e Comunicação</td>
      </tr>
      <tr>
        <td>Forma de oferta</td>
        <td>Subsequente (pós médio)</td>
      </tr>
      <tr>
        <td>Turno de oferta</td>
        <td>Noturno</td>
      </tr>
      <tr>
        <td>Carga Horária Semanal</td>
        <td>25 aulas</td>
      </tr>
      <tr>
        <td>Carga Horária de Estágio</td>
        <td>Não há estágio</td>
      </tr>
      <tr>
        <td>Carga Horária Total</td>
        <td>1200 horas</td>
      </tr>
      <tr>
        <td>Pré-requisito</td>
        <td>Ter completado o Ensino Médio</td>
      </tr>
    </table>`
  break;
  case "integrado":
      table.innerHTML = `<table>
      <tr>
        <td>Habilitação Profissional</td>
        <td>Técnico em Desenvolvimento de Sistemas</td>
      </tr>
      <tr>
        
        <td>Eixo Tecnológico</td>
        <td>Informação e Comunicação</td>
      </tr>
      <tr>
        <td>Integrado ao Ensino Médio</td>
        <td>Forma de oferta</td>
      </tr>
      <tr>
        <td>Integral (manhã e tarde)</td>
        <td>Turno de oferta</td>
      </tr>
      <tr>
        <td>44 aulas</td>
        <td>Carga Horária Semanal</td>
      </tr>
      <tr>
        <td>Não há estágio</td>
        <td>Carga Horária de Estágio</td>
      </tr>
      <tr>
        <td>1200 horas</td>
        <td>Carga Horária Total</td>
      </tr>
      <tr>
        <td>Estar cursando o Ensino Médio integrado ao profissionalizante no CEDUP</td>
        <td>Pré-requisito</td>
      </tr>
    </table>`
  break;
  case "concomitante":
      table.innerHTML = `<table>
      <tr>
        <td>Habilitação Profissional</td>
        <td>Técnico em Desenvolvimento de Sistemas</td>
      </tr>
      <tr>
        <td>Eixo Tecnológico</td>
        <td>Informação e Comunicação</td>
      </tr>
      <tr>
        <td>Integrado ao Ensino Médio</td>
        <td>Forma de oferta</td>
      </tr>
      <tr>
        <td>Noturno</td>
        <td>Turno de oferta</td>
      </tr>
      <tr>
        <td>25 aulas</td>
        <td>Carga Horária Semanal</td>
      </tr>
      <tr>
        <td>Não há estágio</td>
        <td>Carga Horária de Estágio</td>
      </tr>
      <tr>
        <td>1200 horas</td>
        <td>Carga Horária Total</td>
      </tr>
      <tr>
        <td>Estar cursando a 1ª ou 2ª série do Ensino Médio em uma escola da rede Estadual de Santa Catarina</td>
        <td>Pré-requisito</td>
      </tr>
    </table>`
  break;
  default:
  break;
}