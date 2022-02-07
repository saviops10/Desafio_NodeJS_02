
console.log('Desafio 02 - NodeJS')

const nome1:string = 'Ubuntu1 Silva';
const idade1:number = 33;
const peso1:number = 88.5;
const altura1:number = 1.72;
const ehDev1:boolean = true;
const imc1:number = peso1 /(altura1*altura1);

const nome2:string = 'Ubuntu2 Souza';
const idade2:number = 31;
const peso2:number = 82.5;
const altura2:number = 1.65;
const ehDev2:boolean = true;
const imc2:number = peso2 / (altura2+altura2);

const nome3:string = 'Ubuntu3 Silva';
const idade3:number = 28;
const peso3:number = 78.3;
const altura3:number = 1.82;
const ehDev3:boolean = true;
const imc3:number = peso3 / (altura3+altura3);

//R01 - Somar idade Ubuntus
const soma:number = idade1 + idade2 + idade3;
console.log(`A soma da Idade dos Ubuntus eh: ${soma}`);
//R02 - Agrupar nome dos Ubuntus
console.log(nome1+' '+nome2+' '+nome3);
//R03 - Calcular média IMC
const imcMedia:number = (imc1+imc2+imc3) / 3; 
console.log('Média de IMCs: '+imcMedia);
//R04 - Quantos ubuntus São Devs
var ehDev:any = new Boolean(0);

if (ehDev1 == true){
	ehDev++;
}
else {
	ehDev = ehDev;
}

if (ehDev2 == true){
	ehDev++;
}
else {
	ehDev=ehDev;
}
if (ehDev3 == true){
	ehDev++;
}
else {
	ehDev=ehDev;
};
console.log(`Temos ${ehDev}, entre Ubuntus que são Devs!`);

//R05 - Quais Ubuntus tem Silva no nome
var Silva1:boolean = nome1.includes('Silva');
var Silva2:boolean = nome2.includes('Silva');
var Silva3:boolean = nome3.includes('Silva');
var Silva:string = '';

if (Silva1 == true){
	Silva = Silva + ` ${nome1}`;
}
if (Silva2 == true){
	Silva = Silva + ` e ${nome2}`;
}
if (Silva3 == true){
	Silva = Silva + ` e ${nome3}`;
}

console.log(`Dentre os Ubuntus: ${Silva}, possuem Silva no Nome.`);

//FIM do codigo
console.log('Desafio 02 NojeJS Concluído...');
