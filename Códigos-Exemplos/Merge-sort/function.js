

function mergeeSort(vetor,inicio, fim){
    if (inicio < fim) {
        let meio = Math.floor((inicio + fim ) / 2);
        mergeeSort(vetor, inicio, meio);
        mergeeSort(vetor, meio + 1 , fim);
        intercalar(vetor,inicio,meio,fim);
    }
}