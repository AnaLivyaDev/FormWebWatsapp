document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefone = "5585985951052";
  
    const cliente = document.querySelector("#cliente").value;
    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const funcionario = document.querySelector("#funcionario").value;
    const servico = document.querySelector("#servico").value;
    const resp = document.querySelector("#resposta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=
          [*_BEAUTY STUDIO_*%0A
          *Reservas*%0A%0A
          *Qual é seu nome?*%0A
          ${cliente}%0A
          *Data de sua reserva*%0A
          ${data}%0A
          *Horário de sua reserva*%0A
          ${hora}%0A
          *Funcionário de sua preferência*%0A
          ${funcionario}%0A
          *Qual o serviço que deseja realizar?*%0A
          ${servico}`;
  
    if (cliente === "" || data === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltam alguns dados, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Reserva enviada, ${cliente}`;
  
    window.open(url);
  });
