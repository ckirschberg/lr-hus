import { Injectable } from '@angular/core';
import { House } from './entities/house';

@Injectable()
export class DataService {

  constructor() { }


  private desc1 = `
  Længehuset har en enkelt konstruktion med få byggesamlinger og er nemt at placere på stort set alle byggegrunde. Længehusets rektangulære og kompakte form udnytter pladsen optimalt.
  
  Et forskudt længehus giver mulighed for at opdele opholds- og soveafdeling.
  
  Huset er her vist i ArchLine arkitektur. Se alle arkitekturer nedenfor.
  `;

  private desc2 = `Huset er som længehuset særdeles velegnet til stort set alle byggegrunde. Men med sideforskydningen bryder man den lange facade på en spændende måde samtidig med at der skabes flere hyggekroge og terrassemuligheder. Denne udformning kan evt. kombineres med niveauforskydning hvis grunden har skrånende terræn.
  
  Huset er her vist i ArchLine arkitektur. Se alle arkitekturer nedenfor.`;

  private desc3 = `H-huset er stort og praktisk og har køkkenet som husets bankende hjerte. H-huset giver mulighed for at lave en god opdeling mellem børn og voksne med to separate afdelinger i hver sin ende af huset.
  
  Huset er her vist i KUBEhus arkitektur. Se alle arkitekturer nedenfor.`;

  private desc4 = `
  Vinkelhuset kræver lidt mere plads, men har uendelige muligheder i planløsning og indretning. Vinklen skaber desuden de perfekte rammer til en dejlig terrasse.
  
  Huset er her vist i Valmhus arkitektur. Se alle arkitekturer nedenfor.`;

  private desc5 = `Trempel-huset er med sin moderne og minimalistiske arkitektur udviklet så spildpladsen er minimal. 
  Trempel-huset har f.eks. ingen skunke og udnytter derfor pladsen på førstesalen optimalt.
  
  Huset er her vist i Fiskerhus arkitektur. Se alle arkitekturer nedenfor.`;

  private desc6 = `Ved at bygge i højden giver 1 ½ og 2 plans huse unikke muligheder for indretning og detaljer, men også at udnytte hver en kvadratmeter optimalt. 1 ½ og 2 plans huse placeres desuden nemt på byggegrunden.
  
  Huset er her vist i Fiskervalmhus arkitektur. Se alle arkitekturer nedenfor.`;
  


  housetypes = [
    {id: '1', name: 'Længehus', description: this.desc1 } as House,
    {id: '2', name: 'Længehus med sideforskydning', description: this.desc2 } as House,
    {id: '3', name: 'H-hus', description: this.desc3 } as House,
    {id: '4', name: 'Vinkelhus', description: this.desc4 } as House,
    {id: '5', name: 'Trempel', description: this.desc5 } as House,
    {id: '5', name: '1,5 og 2 plans huse', description: this.desc6 } as House,
  ];

  // arch = [
  //   {id: '1', name: 'Valmhus', description: 'Klassisk Valmhusarkitektur har dét, vi kalder ’blødt svaj’ og stort udhæng som giver mulighed for at gå tørskoet hele vejen rundt om huset. Udhænget kan også være med til at holde solen ude og dermed holde varmen nede om sommeren.' } as Arch,
  //   {id: '2', name: 'Funkishus', description: 'Funkishusarkitektur er en minimalistisk arkitektur med rene linjer og intet udhæng – og ensidig taghældning. Taget lægges med tagpap.' } as Arch,
  //   {id: '3', name: 'Archline', description: 'ArchLinearkitektur er en stram og moderne arkitektur med rene linjer, zink og helt uden udhæng.' } as Arch,
  //   {id: '4', name: 'Fiskervalmhus', description: 'Nymoderne Fiskervalmhusarkitektur er en nyklassiker som er en kombination af to forskellige arkitekturer. Her blødes husets stramme look med skarpe afslutninger op af de afvalmede gavle.' } as Arch,
  //   {id: '5', name: 'Fiskerhus', description: 'Fiskerhusarkitektur er en minimalistisk og strammere arkitektur, hvor de murede gesimser og opmurede gavle, sammen med tagets afslutning, giver huset karakter.' } as Arch,
  //   {id: '6', name: 'Byhus', description: 'Byhusarkitektur minder om Rustikhusarkitekturen, men udhænget på husets facader udføres vandret.' } as Arch,
  //   {id: '7', name: 'Skagenshus', description: 'Skagenhusarkitekturen er en helt klassik arkitektur med stramme linjer, uden udhæng og med en endnu mere detaljeret arkitektur med murede gesimser i både facader og gavle.' } as Arch,
  //   {id: '8', name: 'Rustikhus', description: 'Klassisk Rustikhusarkitektur er en robust arkitektur med mulighed for opmurede gavle eller gavle med skråvinduer ved skrålofter i huset, der udføres med synlige limtræsbjælker over vinduer og døre og skråt udhæng på husets facader.' } as Arch,
  //   {id: '9', name: 'Kubehus', description: 'Moderne stramt look med helt fladt tag og zink på alle facader. Også velegnet til niveauforskydning.' } as Arch,
  // ];
}
