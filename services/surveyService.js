const surveys = [
  {
    id: "abc1",
    date: "2022-02-27",
    title: "cgn-web-22-4 weekly feedback week 1",
    url: "localhost:3000/survey/abc1",
    questions: [
      { title: "Are you okay?", type: "yes/no", yes: 25, no: 35, na: 10 },
      { title: "Do you like sports?", type: "text", yes: 45, no: 10, na: 15 },
      { title: "Do you like movies?", type: "text", yes: 60, no: 6, na: 4 },
    ],
  },
  {
    id: "abc2",
    date: "2022-02-20",
    title: "cgn-web-22-4 weekly feedback week 2",
    url: "localhost:3000/survey/abc2",
    questions: [
      { title: "Are you okay?", type: "yes/no", yes: 25, no: 35, na: 10 },
      {
        title: "Do you like the stuff we do?",
        type: "yes/no",
        yes: 45,
        no: 10,
        na: 15,
      },
      { title: "Are you tired?", type: "yes/no", yes: 60, no: 6, na: 4 },
      { title: "Are you nervous?", type: "yes/no", yes: 35, no: 20, na: 15 },
      { title: "Are you hungry?", type: "yes/no", yes: 50, no: 16, na: 4 },
    ],
  },
  {
    id: "abc3",
    date: "2022-02-14",
    title: "cgn-web-22-4 weekly feedback week 3",
    url: "localhost:3000/survey/abc3",
    questions: [
      { title: "Are you fine?", type: "yes/no", yes: 45, no: 10, na: 15 },
      { title: "Do you like music?", type: "yes/no", yes: 60, no: 6, na: 4 },
      {
        title: "Do you like Elvis Presley?",
        type: "yes/no",
        yes: 35,
        no: 20,
        na: 15,
      },
      {
        title: "Do you like Ray Charles?",
        type: "yes/no",
        yes: 58,
        no: 7,
        na: 5,
      },
    ],
  },
];

export function getSurveyById(id) {
  const survey = surveys.find((survey) => survey.id === id);
  return survey;
}
export function getAllSurveys() {
  return surveys;
}
