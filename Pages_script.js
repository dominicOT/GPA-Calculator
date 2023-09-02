function calculateGPA() {
    // Define credit hours and grade points lookup tables
    const creditHoursLookup = {
        1: {
            'A+': 5,
            'A': 5,
            'A-': 4.7,
            'B+': 4.3,
            'B': 4,
            'B-': 3.7,
            'C+': 3.3,
            'C': 3,
            'C-': 2.7,
            'D': 2,
            'E': 1,
            'F': 0,
            'ABS': 0
        },
        2: {
            'A+': 10,
            'A': 10,
            'A-': 9.4,
            'B+': 8.6,
            'B': 8,
            'B-': 7.4,
            'C+': 6.6,
            'C': 6,
            'C-': 5.4,
            'D': 4,
            'E': 2,
            'F': 0,
            'ABS': 0
        },
        3: {
            'A+': 15,
            'A': 15,
            'A-': 14.1,
            'B+': 12.9,
            'B': 12,
            'B-': 11.1,
            'C+': 9.9,
            'C': 9,
            'C-': 8.1,
            'D': 6,
            'E': 3,
            'F': 0,
            'ABS': 0
        },
        4: {
            'A+': 20,
            'A': 20,
            'A-': 18.8,
            'B+': 17.2,
            'B': 16,
            'B-': 14.8,
            'C+': 13.2,
            'C': 12,
            'C-': 10.8,
            'D': 8,
            'E': 4,
            'F': 0,
            'ABS': 0
        },
    };

    // Get user-selected letter grades and credit hours for each course
    const grades = [
        document.getElementById("communication").value,
        document.getElementById("ethical").value,
        document.getElementById("french").value,
        document.getElementById("statistics").value,
        document.getElementById("university").value,
        document.getElementById("onlineEducation").value,
        document.getElementById("programming").value,
        document.getElementById("socialResearch").value
    ];

    const creditHours = [2, 2, 2, 3, 2, 3, 3, 2]; // Updated credit hours for 8 courses

    // Check if any grade is empty
    if (grades.some(grade => grade === "")) {
        alert("Please select the letter grades for all the modules.");
        return;
    }

    // Calculate total grade points and total credit hours
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    for (let i = 0; i < grades.length; i++) {
        const creditHour = creditHours[i];
        const grade = grades[i];

        // Check if the grade is "ABS" and skip this course's credit hour
        if (grade === "ABS") {
            continue;
        }

        const gradePoint = creditHoursLookup[creditHour][grade];
        totalGradePoints += gradePoint;
        totalCreditHours += creditHour;
    }

    // Calculate GPA
    const gpa = totalGradePoints / totalCreditHours;

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `SEMESTER1 GPA: ${gpa.toFixed(2)}`;
}


function calculateGPA2() {
    // Define credit hours and grade points lookup tables
    const creditHoursLookup = {
        1: {
            'A+': 5,
            'A': 5,
            'A-': 4.7,
            'B+': 4.3,
            'B': 4,
            'B-': 3.7,
            'C+': 3.3,
            'C': 3,
            'C-': 2.7,
            'D': 2,
            'E': 1,
            'F': 0,
            'ABS': 0
        },
        2: {
            'A+': 10,
            'A': 10,
            'A-': 9.4,
            'B+': 8.6,
            'B': 8,
            'B-': 7.4,
            'C+': 6.6,
            'C': 6,
            'C-': 5.4,
            'D': 4,
            'E': 2,
            'F': 0,
            'ABS': 0
        },
        3: {
            'A+': 15,
            'A': 15,
            'A-': 14.1,
            'B+': 12.9,
            'B': 12,
            'B-': 11.1,
            'C+': 9.9,
            'C': 9,
            'C-': 8.1,
            'D': 6,
            'E': 3,
            'F': 0,
            'ABS': 0
        },
        4: {
            'A+': 20,
            'A': 20,
            'A-': 18.8,
            'B+': 17.2,
            'B': 16,
            'B-': 14.8,
            'C+': 13.2,
            'C': 12,
            'C-': 10.8,
            'D': 8,
            'E': 4,
            'F': 0,
            'ABS': 0
        },
    };

    // Get user-selected letter grades and credit hours for each course in SEM2
    const grades = [
        document.getElementById("communication2").value,
        document.getElementById("computer").value,
        document.getElementById("ethics2").value,
        document.getElementById("c").value,
        document.getElementById("french2").value,
        document.getElementById("multimedia").value,
        document.getElementById("logic").value,
        document.getElementById("math").value
    ];

    const creditHours = [2, 3, 2, 3, 2, 3, 2, 3];

    // Check if any grade is empty
    if (grades.some(grade => grade === "")) {
        alert("Please select the letter grades for all the modules in SEM2.");
        return;
    }

    // Calculate total grade points and total credit hours for SEM2
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    for (let i = 0; i < grades.length; i++) {
        const creditHour = creditHours[i];
        const grade = grades[i];

        // Check if the grade is "ABS" and skip this course's credit hour
        if (grade === "ABS") {
            continue;
        }

        const gradePoint = creditHoursLookup[creditHour][grade];
        totalGradePoints += gradePoint;
        totalCreditHours += creditHour;
    }

    // Calculate GPA for SEM2
    const gpa = totalGradePoints / totalCreditHours;

    // Display the result for SEM2
    const resultElement = document.getElementById("resultSEM2");
    resultElement.innerHTML = `SEMESTER2 GPA: ${gpa.toFixed(2)}`;

}


function calculateTotalGPA() {
    // Call the calculateGPA function for both Semester 1 and Semester 2
    calculateGPA();
    calculateGPA2();

    // Retrieve the GPA values for both semesters
    const gpaSem1 = parseFloat(document.getElementById("result").textContent.split(' ')[2]);
    const gpaSem2 = parseFloat(document.getElementById("resultSEM2").textContent.split(' ')[2]);

    // Calculate the total GPA
    const totalGPA = (gpaSem1 + gpaSem2) / 2;

    // Display the total GPA
    const totalGPAElement = document.getElementById("totalGPA");
    totalGPAElement.innerHTML = `Total GPA: ${totalGPA.toFixed(2)}`;
}