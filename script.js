const today = new Date();
const minAge = 18;
let lectures = [];

class Participant {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Lecture {
    constructor(name, date, speaker) {
        this.date = date;
        this.name = name;
        this.speaker = speaker;
        this.participants = [];
        lectures.push(this);
    }
    newParticipant(name, age) {
        let participant = new Participant(name, age);
        this.participants.push(participant);
    }
}
function loadList() {
    for (let index = 0; index < lectures.length; index++) {
        const element = lectures[index];
        updateList(element);
    }
}
function updateList(element) {
    let selectEvent = document.getElementById("eventList");

    let opt = document.createElement("option");
    opt.value = element.name;
    opt.text = element.name;

    selectEvent.add(opt, selectEvent.options[lectures.length + 1]);
}
function saveEvent() {
    let inputDate = new Date(document.getElementById("dateLecture").value);
    if (inputDate > today) {
        let inputName = document.getElementById("nameLecture").value;
        let inputSpeaker = document.getElementById("nameSpeaker").value;
        let lecture = new Lecture(inputName, inputDate, inputSpeaker);
        alert(`Novo Evento adicionado, ${inputName}`);
        updateList(lecture);
    } else {
        alert("Data invalida!");
    }
}
function saveParticipant() {
    let inputAge = document.getElementById("ageParticipant").value;
    if (inputAge >= minAge) {
        let inputName = document.getElementById("nameParticipant").value;
        let inputLecture = document.getElementById("eventList").value;
        let index = lectures.findIndex(
            (element) => element.name == inputLecture
        );
        lectures[index].newParticipant(inputName, inputAge);
        console.log(lectures[index]);
        alert(`Novo Participante adicionado, ${inputName}`);
    } else {
        alert("Idade Invalida!");
    }
}
function printLecture() {
    let inputLecture = document.getElementById("eventList").value;
    let index = lectures.findIndex(
        (element) => element.name == inputLecture
    );
    console.log(`Evento: ${lectures[index].name}`);
    console.log(`Data ${lectures[index].date}`);
    lectures[index].participants.forEach(element => {
        console.log(element);
    });
}
