const listaMarcas = ["volks", "ford"];

const marca = process.argv[2];

switch (marca) {
    case "volks": 
        console.log("volks atendida");
        break;
    case "ford":
        console.log("ford atendida");
        break;
    default:
        console.log("marca não atendida");
}