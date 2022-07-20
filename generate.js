module.exports = function () {
    const { faker } = require("@faker-js/faker/locale/en")
    const _ = require("lodash")
    const matricNos = [];
    const matricDepts = ["SCI", "HUM", "LAW", "CHS", "ENG", "MATH", "PHY", "BIO", "CHM", "ECO", "SOC"];
    _.times(1000, function (n) {
        const matricDept = faker.helpers.arrayElement(matricDepts)
        const matricCode = faker.mersenne.rand(18700, 16100)
        let matricYear = "016"
        if (matricCode > 16999 && matricCode < 18000) {
            matricYear = "017"
        } else if (matricCode >= 18000) {
            matricYear = "018"
        }
        const matricNo = `${matricDept}/${matricYear}/${matricCode}`
        matricNos.push(matricNo)
    })
    return {
        students: _.times(1000, function (n) {
            return {
                id: n + 1,
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                matric_no: faker.helpers.arrayElement(matricNos),
                avatar: faker.internet.avatar(),
                cgpa: faker.datatype.float({ min: 0.5, max: 5, precision: 0.1 }).toFixed(2),
            }
        }),
        results: _.times(10000, function (n) {
            return {
                id: n + 1,
                matric_no: faker.helpers.arrayElement(matricNos),
                course_id: faker.mersenne.rand(1, 97),
                department_id: faker.mersenne.rand(1, 97),
                level: faker.mersenne.rand(100, 400),
                session_id: faker.mersenne.rand(1, 15),
                score: faker.mersenne.rand(30, 100)
            }
        }),
        cgpas: _.times(5000, function (n) {
            return {
                id: n + 1,
                matric_no: faker.helpers.arrayElement(matricNos),
                department_id: faker.mersenne.rand(1, 97),
                session_id: faker.mersenne.rand(1, 15),
                gpa: faker.datatype.float({ min: 0.5, max: 5, precision: 0.01 }).toFixed(2),
            }
        }),
        "departments": [
            {
                "name": "Computer science",
                "id": 1
            },
            {
                "name": "Law",
                "id": 2
            },
            {
                "name": "Medicine",
                "id": 3
            },
            {
                "name": "Physics ",
                "id": 4
            },
            {
                "name": "Mathematics",
                "id": 5
            },
            {
                "name": "Agric",
                "id": 6
            },
            {
                "name": "Biochemistry",
                "id": 7
            },
            {
                "name": "English",
                "id": 8
            },
            {
                "name": "Mechatronics",
                "id": 9
            },
            {
                "name": "Economics",
                "id": 10
            }
        ],
        "courses": [
            {
                "name": "Computer networks and communication",
                "id": 1,
                "department_id": 1
            },
            {
                "name": "Data management II",
                "id": 2,
                "department_id": 1
            },
            {
                "name": "Organization of Programming Languages",
                "id": 3,
                "department_id": 1
            },
            {
                "name": "Uneiling Entrepreneurs",
                "id": 4,
                "department_id": 1
            },
            {
                "name": "Machine Learning with Python",
                "id": 5,
                "department_id": 1
            },
            {
                "name": "Introduction to Mobile Application Development",
                "id": 6,
                "department_id": 1
            },
            {
                "name": "Ethics and Legal Aspects of Information Technology",
                "id": 7,
                "department_id": 1
            },
            {
                "name": "Introduction to Computer Modelling Simulation",
                "id": 8,
                "department_id": 1
            },
            {
                "name": "Expert Systems",
                "id": 9,
                "department_id": 1
            },
            {
                "name": "Computer graphics and Simulation",
                "id": 10,
                "department_id": 1
            },
            {
                "name": "Fundamentals of Information Technology Policy",
                "id": 11,
                "department_id": 1
            },
            {
                "name": "Computer System Performance Evaluation",
                "id": 12,
                "department_id": 1
            },
            {
                "name": "Special Topics in Software Engineering",
                "id": 13,
                "department_id": 1
            },
            {
                "name": "Compiler Construction II",
                "id": 14,
                "department_id": 1
            },
            {
                "name": "Introduction to Biology",
                "id": 15,
                "department_id": 3
            },
            {
                "name": "Introduction to Chemistry",
                "id": 16,
                "department_id": 3
            },
            {
                "name": "Anatomy of Head and Neck",
                "id": 17,
                "department_id": 3
            },
            {
                "name": "Renal Physiology",
                "id": 18,
                "department_id": 3
            },
            {
                "name": "Neuro Anatomy",
                "id": 19,
                "department_id": 3
            },
            {
                "name": "Embryology",
                "id": 20,
                "department_id": 3
            },
            {
                "name": "Biochemistry",
                "id": 21,
                "department_id": 3
            },
            {
                "name": "Reproductive Physiology",
                "id": 22,
                "department_id": 3
            },
            {
                "name": "Anatomy of the Abdomen",
                "id": 23,
                "department_id": 3
            },
            {
                "name": "Central Nervous System Physiology",
                "id": 24,
                "department_id": 3
            },
            {
                "name": "Introduction to Cosmology",
                "id": 25,
                "department_id": 4
            },
            {
                "name": "Quantum Mechanics",
                "id": 26,
                "department_id": 4
            },
            {
                "name": "Advanced Electromagnetic Theory",
                "id": 27,
                "department_id": 4
            },
            {
                "name": "Thermodynamics and Statistical Mechanics",
                "id": 28,
                "department_id": 4
            },
            {
                "name": "Algebra",
                "id": 29,
                "department_id": 5
            },
            {
                "name": "Calculus and Trigonomentry",
                "id": 30,
                "department_id": 5
            },
            {
                "name": "Anallytic Geometry and Mechanics",
                "id": 31,
                "department_id": 5
            },
            {
                "name": "Introduction to Actuarial Mathematics",
                "id": 32,
                "department_id": 5
            },
            {
                "name": "Abstract Algebra",
                "id": 33,
                "department_id": 5
            },
            {
                "name": "Linear Algebra",
                "id": 34,
                "department_id": 5
            },
            {
                "name": "Industrial Law",
                "id": 35,
                "department_id": 2
            },
            {
                "name": "Labour Law",
                "id": 36,
                "department_id": 2
            },
            {
                "name": "Banking and Insurance",
                "id": 37,
                "department_id": 2
            },
            {
                "name": "Law of Intellectual and Industrial property",
                "id": 38,
                "department_id": 2
            },
            {
                "name": "Women and Minority Rights",
                "id": 39,
                "department_id": 2
            },
            {
                "name": "Law of Energy and Natural Resources",
                "id": 40,
                "department_id": 2
            },
            {
                "name": "Law of Arbitration",
                "id": 41,
                "department_id": 2
            },
            {
                "name": "Administrative Law",
                "id": 42,
                "department_id": 2
            },
            {
                "name": "Shipping Law",
                "id": 43,
                "department_id": 2
            },
            {
                "name": "Enviromental and Planning Law",
                "id": 44,
                "department_id": 2
            },
            {
                "name": "Conveyancing Law",
                "id": 45,
                "department_id": 2
            },
            {
                "name": "Public International Law",
                "id": 46,
                "department_id": 2
            },
            {
                "name": "Introduction to Agriculture",
                "id": 47,
                "department_id": 6
            },
            {
                "name": "Principles of Forestry",
                "id": 48,
                "department_id": 6
            },
            {
                "name": "Principles of Rural Sociology",
                "id": 49,
                "department_id": 6
            },
            {
                "name": "Crop Anatomy, Taxonomy and Physiology",
                "id": 50,
                "department_id": 6
            },
            {
                "name": "Principles of Animal Biology",
                "id": 51,
                "department_id": 6
            },
            {
                "name": "Physics for Agriculture",
                "id": 52,
                "department_id": 6
            },
            {
                "name": "Physical Chemistry",
                "id": 53,
                "department_id": 6
            },
            {
                "name": "Introduction to Computer Science in Agriculture",
                "id": 54,
                "department_id": 6
            },
            {
                "name": "Organic Chemistry",
                "id": 55,
                "department_id": 6
            },
            {
                "name": "Elements of Soil Science",
                "id": 56,
                "department_id": 6
            },
            {
                "name": "Cell Biology and Signaling",
                "id": 57,
                "department_id": 7
            },
            {
                "name": "Genetics and DNA",
                "id": 58,
                "department_id": 7
            },
            {
                "name": "Structure and Function of Molecules",
                "id": 59,
                "department_id": 7
            },
            {
                "name": "Enzymology",
                "id": 60,
                "department_id": 7
            },
            {
                "name": "Proteins and Membranes",
                "id": 61,
                "department_id": 7
            },
            {
                "name": "Disease Mechanisms",
                "id": 62,
                "department_id": 7
            },
            {
                "name": "Metabolism",
                "id": 63,
                "department_id": 7
            },
            {
                "name": "Principles of Biochemistry",
                "id": 65,
                "department_id": 7
            },
            {
                "name": "Protein Science",
                "id": 66,
                "department_id": 7
            },
            {
                "name": "Reading and Writing in English",
                "id": 67,
                "department_id": 8
            },
            {
                "name": "Speaking and Listening Skills",
                "id": 68,
                "department_id": 8
            },
            {
                "name": "Grammar and Vocabulary",
                "id": 69,
                "department_id": 8
            },
            {
                "name": "Scenario Based Learning",
                "id": 70,
                "department_id": 8
            },
            {
                "name": "English Literature",
                "id": 71,
                "department_id": 8
            },
            {
                "name": "The English Language in Nigeria",
                "id": 72,
                "department_id": 8
            },
            {
                "name": "Phonology of English",
                "id": 73,
                "department_id": 8
            },
            {
                "name": "Introduction to Applied Linguistics",
                "id": 74,
                "department_id": 8
            },
            {
                "name": "Introduction to Semiotics",
                "id": 75,
                "department_id": 8
            },
            {
                "name": "Engineering Mathematics",
                "id": 76,
                "department_id": 9
            },
            {
                "name": "Engineering Design",
                "id": 77,
                "department_id": 9
            },
            {
                "name": "Thermodynamics",
                "id": 78,
                "department_id": 9
            },
            {
                "name": "Applied Robotics",
                "id": 79,
                "department_id": 9
            },
            {
                "name": "Control Systems",
                "id": 80,
                "department_id": 9
            },
            {
                "name": "Electromechanical Engineering",
                "id": 81,
                "department_id": 9
            },
            {
                "name": "Automation Engineering",
                "id": 82,
                "department_id": 9
            },
            {
                "name": "Design of Machine Elements",
                "id": 83,
                "department_id": 9
            },
            {
                "name": "Factory Automation",
                "id": 84,
                "department_id": 9
            },
            {
                "name": "Techical Communication",
                "id": 85,
                "department_id": 9
            },
            {
                "name": "Industrial Management",
                "id": 86,
                "department_id": 9
            },
            {
                "name": "Theory of Machines",
                "id": 87,
                "department_id": 9
            },
            {
                "name": "Mathematics for Economics",
                "id": 88,
                "department_id": 10
            },
            {
                "name": "Microeconomic Theory",
                "id": 89,
                "department_id": 10
            },
            {
                "name": "International Trade",
                "id": 90,
                "department_id": 10
            },
            {
                "name": "Economics Principles",
                "id": 91,
                "department_id": 10
            },
            {
                "name": "Econometrics",
                "id": 92,
                "department_id": 10
            },
            {
                "name": "Money and Banking",
                "id": 93,
                "department_id": 10
            },
            {
                "name": "Economic History",
                "id": 94,
                "department_id": 10
            },
            {
                "name": "Managerial and Industrial Economics",
                "id": 95,
                "department_id": 10
            },
            {
                "name": "Introduction to Statistics",
                "id": 96,
                "department_id": 10
            },
            {
                "name": "Probability",
                "id": 97,
                "department_id": 10
            }
        ],
        "sessions": [
            {
                "id": 1,
                "semester_name": "1st semester",
                "session": "2016/2017"
            },
            {
                "id": 2,
                "semester_name": "2nd semester",
                "session": "2016/2017"
            },
            {
                "id": 3,
                "semester_name": "ERP",
                "session": "2016/2017"
            },
            {
                "id": 4,
                "semester_name": "1st semester",
                "session": "2017/2018"
            },
            {
                "id": 5,
                "semester_name": "2nd semester",
                "session": "2017/2018"
            },
            {
                "id": 6,
                "semester_name": "ERP",
                "session": "2017/2018"
            },
            {
                "id": 7,
                "semester_name": "1st semester",
                "session": "2018/2019"
            },
            {
                "id": 8,
                "semester_name": "2nd semester",
                "session": "2018/2019"
            },
            {
                "id": 9,
                "semester_name": "ERP",
                "session": "2018/2019"
            },
            {
                "id": 10,
                "semester_name": "1st semester",
                "session": "2019/2020"
            },
            {
                "id": 11,
                "semester_name": "2nd semester",
                "session": "2019/2020"
            },
            {
                "id": 12,
                "semester_name": "ERP",
                "session": "2019/2020"
            },
            {
                "id": 13,
                "semester_name": "1st semester",
                "session": "2020/2021"
            },
            {
                "id": 14,
                "semester_name": "2nd semester",
                "session": "2020/2021"
            },
            {
                "id": 15,
                "semester_name": "ERP",
                "session": "2020/2021"
            }
        ]
    }
}
