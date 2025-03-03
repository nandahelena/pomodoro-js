let intervalo = null

let btnIniciar = document.getElementById("btnIniciar")
let pausaOuPomodoro = true
let tempoRestante =  25 * 60
let tempoPausaRestante = 5 * 60
let pausado = true

function exibirTempo(){
    let timer = document.getElementById("timer")
    let minutos, segundos
    if(pausaOuPomodoro){
        minutos = Math.floor(tempoRestante / 60)
        segundos = Math.floor(tempoRestante % 60)
    }else{
        minutos = Math.floor(tempoPausaRestante / 60)
        segundos = Math.floor(tempoPausaRestante % 60)
    }
    timer.textContent = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
}

function controlarTemporizador() {
    if (intervalo) {
        // Se o temporizador já está rodando, pausar
        clearInterval(intervalo);
        intervalo = null;
        btnIniciar.textContent = "Continuar";
        emPausa = true;
    } else {
        // Se está pausado, iniciar ou continuar
        intervalo = setInterval(() => {
            if (pausaOuPomodoro) {
                if (tempoRestante > 0) {
                    tempoRestante--;
                } else {
                    // Alterna para a pausa quando o Pomodoro termina
                    pausaOuPomodoro = false;
                    tempoPausaRestante = 5 * 60;
                }
            } else {
                if (tempoPausaRestante > 0) {
                    tempoPausaRestante--;
                } else {
                    // Alterna de volta para o Pomodoro quando a pausa termina
                    pausaOuPomodoro = true;
                    tempoRestante = 25 * 60;
                }
            }

            exibirTempo();
        }, 1000);

        btnIniciar.textContent = "Pausar";
        emPausa = false;
    }
}

btnIniciar.addEventListener("click", function(){
    controlarTemporizador()
})

exibirTempo()