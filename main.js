import { calculateAverage } from "./calculateAverage.js";
import { findTopStudent } from "./findTopStudent.js";
import { filterFailed } from "./filterFailed.js";
import { addLetterGrade } from "./addLetterGrade.js";

export const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

export {
    calculateAverage,
    findTopStudent,
    filterFailed,
    addLetterGrade
};