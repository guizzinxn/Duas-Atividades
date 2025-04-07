function calcular() {
    const capital = parseFloat(document.getElementById("capital").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100;
    const tempo = parseInt(document.getElementById("tempo").value);

    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        resultadoDiv.innerText = "Preencha todos os campos corretamente.";
        return;
    }

    const montante = capital * Math.pow(1 + taxa, tempo);
    const juros = montante - capital;

    resultadoDiv.innerHTML = `
        <strong>Montante Final:</strong> R$ ${montante.toFixed(2)}<br>
        <strong>Juros Totais:</strong> R$ ${juros.toFixed(2)}