function executar() {
    // 1. Captura todos os elementos da lista
    const servidores = document.querySelectorAll('.estufa-item');

    // --- LOOP WHILE: Segurança (Scanenr de Erros) ---
    // Este loop procura um erro crítico e para o sistema se encontrar
    for (let i = 0; i < servidores.length; i++) {
        let elemento = servidores[i];
        let conteudo = elemento.innerText;

        if (conteudo.includes("Baixa")) {
            elemento.classList.add("perigo");
            console.log("Aviso aplicado ao servidor " + (i + 1));
        }
    }
    


    let k = 0;
    while (k < servidores.length) {
        let status = servidores[k].innerText;

        if (status.includes("Sensor Inoperante")) {
            servidores[k].classList.add("bloqueado");
            alert("Encontrado Sensor Inoperante");
            break; // O break interrompe a varredura por segurança
        }
        k++
    }
}