let ar = [30,50,78];

// JSON - Java script object notation , key and value 
// {} = object , [] = array
// json is combination of object + array
// you have to crate your resume in json format

let allStudentMarks = [
    {
        "name" : "vaibhav",
        "rollNumber" : 23,
        "city" :"Pune",
        "contact" : [
            {
                "contact-type" : "mobile",
                "contact-info" : "9764326834"
            },
            {
                "contact-type" : "email",
                "contact-info" : "vaibhavraghuvanshi58@gmail.com"
            }
        ],
        "marks" : {
            "math" : 40,
            "arts" : 67,
            "science" : 80
            }
        },
    {
         "math" : 60,
        "arts" : 97,
        "science" : 40
    },
     {
         "math" : 60,
        "arts" : 97,
        "science" : 40
    }
]

console.log(allStudentMarks[0]["contact"][1]);