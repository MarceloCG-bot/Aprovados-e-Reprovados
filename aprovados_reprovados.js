const classA = [{
        name: "Marcelo",
        grade: 9.8
    },
    {
        name: "Nicole",
        grade: 10
    },
    {
        name: "Ananias",
        grade: 2
    },
    {
        name: "Scorpion",
        grade: 10
    }
]

const classB = [{
        name: "Kratos",
        grade: 10
    },
    {
        name: "Predator",
        grade: 10
    },
    {
        name: "Johnny Cage",
        grade: 2
    },
    {
        name: "Jax",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < classA.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {

    if (average < 5) {
        console.log(`${turma} average: ${average}. It is not good.`)
    } else {
        console.log(`${turma} average:  ${average}. Congrats`)
    }
}

function markAsFlunked(student) {

    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {

    if (student.flunked) {
        console.log(`The student ${student.name } are flunked `)
    }
}

function studentsflunked(students) {

    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsflunked(classA)
studentsflunked(classB)