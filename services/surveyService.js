const surveys=[
    {
        id: "abc1",
        title: "cgn-web-22-4 weekly feedback week 1",
        questions: ["Are you okay?", "Do you like Sports?", "Do you like movies?"]
    },
    {
        id: "abc2",
        title: "cgn-web-22-4 weekly feedback week 2",
        questions: ["Are you okay?", "Do you like the stuff we do?", "Are you tired?", "Are you nervous?", "Are you hungry?"]
    },
    {
        id: "abc3",
        title: "cgn-web-22-4 weekly feedback week 3",
        questions: ["Are you okay?", "Do you like Music?", "Do you like Elvis Presley?", "Do you like Ray Charles?"]
    },
]


export  function getSurveyById(id){
    const survey = surveys.find((survey)=>survey.id === id);
    return survey;
}