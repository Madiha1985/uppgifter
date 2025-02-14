
/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
   return jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump, 0
    );
  

   
  }
  const jumps = [1,2,3,4];
  console.log(getLength(jumps));
 
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
   
    return(student.name == "Sebastian" && student.handedInOnTime?"VG":"IG") }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class Temp {
    constructor(
        public location: string, 
        public date: Date, 
        public value: number) {}
  }
  
  function averageWeeklyTemperature(temperatureData: Temp[]) {
    let totalTemperature = 0;
    let totalRecord = 0;

  
    for (let i = 0; i < temperatureData.length; i++) {
      if (temperatureData[i].location === "Stockholm") {
        if (temperatureData[i].date.getTime() > Date.now() - 604800000) {
        totalTemperature += temperatureData[i].value;
        totalRecord++;

        }
      }
    }
  let average= totalTemperature>0?totalTemperature/totalRecord:0;
  return average;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
  function showProduct(
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
    parent: HTMLElement
  ) {
    let container = document.createElement("div");
    let title = document.createElement("h4");
    let pris = document.createElement("span");
    let imageTag = document.createElement("img");
    let total = document.createElement("span");
    let detail = document.createElement("p");
  
    title.innerHTML = name;
    pris.innerHTML = price.toString();
    imageTag.src = image;
    total.innerHTML = amount.toString();
    detail.innerHTML = description;
  
    container.appendChild(title);
    container.appendChild(imageTag);
    container.appendChild(pris);
    container.appendChild(total);
    container.appendChild(detail);
    parent.appendChild(container);
  }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
   
    function presentStudents(students: Student[]) {
        for (const student of students) {
          const container = document.createElement("div");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = student.handedInOnTime;
          
          container.appendChild(checkbox);
      
        
          const twoSelectors = student.handedInOnTime ? "ul#passedstudents" : "ul#failedstudents";
          const targetList = document.querySelector(twoSelectors);
          targetList?.appendChild(container);
        }
    }


  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    let result = "";
    result += "Lorem";
    result += "ipsum";
    result += "dolor";
    result += "sit";
    result += "amet";
  
    return result;
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
  function createUser(
    name: string,
    birthday: Date,
    email: string,
    password: string
  ) {
    // Validation
  
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    console.log(userAge);
  
    if (!(userAge < 20)) {
      // Logik för att skapa en användare
    } else {
      return "Du är under 20 år";
    }
  }
  