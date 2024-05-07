const patients = [
    {
        name: 'Paulo Henrique',
        age: 20,
        weight: 74,
        height: 170,
    },

    {
        name: 'Carlos Eduardo',
        age: 35,
        weight: 100,
        height: 180,
    },

    {
        name: 'Livia Lima',
        age: 24,
        weight: 85,
        height: 160,
    },
]

function printPatientIMC (patient){
    return `O paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`
}

for (let patient of patients){
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}