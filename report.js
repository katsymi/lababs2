import {
    grades,
    calculateAverage,
    findTopStudent,
    filterFailed,
    addLetterGrade
} from "./main.js";

const passScore = 60;

console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Список должников (кто не сдал):", filterFailed(grades, passScore));
console.log("Итоговый массив с буквенными оценками:", addLetterGrade(grades));