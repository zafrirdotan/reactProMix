// import axios from 'axios';

const questions = [
  {
    _id: 'q1',
    filedName: 'purchasePurpose',
    text: 'מהי מטרת הרכישה?',
    inputType: 'select',
    dataType: 'number',
    options: [
      { name: 'מיחזור משכנתא', key: 0, icon: 'autorenew' },
      { name: 'דירה יחידה', key: 1 },
      { name: 'דירה חלופית', key: 2 },
      { name: 'דירה להשקעה', key: 3 },
      { name: 'דירה במחיר למשתכן', key: 4 },
    ],
    information: '',
  },

  {
    _id: 'q2',
    filedName: 'assetValue',
    inputType: 'currency',
    text: 'כמה שווה הנכס שלך?',
    text2:
      'השווי מופיע לך בחוזה המכר או נקבע על ידי שמאי בשלושת החודשים האחרונים.',
    type: 'currency',
    value: 1000000,
    // placeholder: '1000000',
    currency: 'ILS',
  },
  {
    _id: 'q3',
    filedName: 'mortgageValue',
    inputType: 'currencyPercent',
    text: 'מצאת דירה? מצוין! \n מה גובה ההלוואה שאתה צריך להשלמת הרכישה??',
    type: 'currencyPercent',
    value: 500000,
    currency: 'ILS',
  },
  {
    _id: 'q4',
    // filedName: 'multiInputs',
    inputType: 'multiInputs',
    text: 'מה גבול הזמן שלך?',
    questions: [
      {
        filedName: 'repaymentTime',
        _id: 'iQ1',
        value: 10,
        label: 'זמן מקסימלי לפדיון בשנים',
        type: 'years',
      },
      {
        filedName: 'maximumRepaymentTime',
        _id: 'iQ2',
        value: 10,
        label: 'זמן ממוצע לפדיון הקרן בשנים',
        type: 'years',
      },
    ],
  },
  {
    _id: 'q5',
    inputType: 'multiInputs',
    text: 'את העיקר עברנו…',
    text2: 'נשארו עוד מספר פרטים קטנים...',
    questions: [
      {
        _id: 'iQ1',
        value: 0,
        label: 'ממוצע הוצאות בחודש',
        filedName: 'averageMonthlySpending',
        type: 'currency',
      },
      {
        _id: 'iQ2',
        value: 0,
        label: 'הכנסה חודשית נטו של לווה 1',
        filedName: 'averageMonthlyIncomeLoaner1',
        type: 'currency',
      },
      {
        _id: 'iQ3',
        value: 0,
        label: 'הכנסה חודשית נטו של לווה 2',
        filedName: 'averageMonthlyIncomeLoaner2',
        type: 'currency',
      },
    ],
  },
  {
    _id: 'q6',
    inputType: 'multiInputs',
    text: 'מספר פרטים נוספים',
    questions: [
      {
        _id: 'iQ1',
        value: 35,
        label: 'גיל הלווה המבוגר',
        filedName: 'ageOldestLoaner',
        type: 'years',
      },
      {
        _id: 'iQ2',
        value: 0,
        label: 'מספר ילדים מתחת לגיל 18',
        filedName: 'numberChildrenUnder18',
        type: 'number',
      },
      {
        _id: 'iQ3',
        value: 'נשוי',
        label: 'סטטוס משפחתי',
        filedName: 'maritalStatus',
        type: 'text',
      },
    ],
  },
  {
    _id: 'q8',
    filedName: 'workStatus',
    text: 'מה הסטטוס התעסוקתי שלך?',
    inputType: 'select',
    dataType: 'number',
    options: [
      { name: 'עצמאי', key: 0 },
      { name: 'שכיר', key: 1 },
      { name: 'עובד מדינה', key: 2 },
    ],
  },
  {
    _id: 'q9',
    filedName: 'workStatus2',
    text: 'מה הסטטוס התעסוקתי של הלווה השני?',
    inputType: 'select',
    dataType: 'number',
    options: [
      { name: 'עצמאי', key: 0 },
      { name: 'שכיר', key: 1 },
      { name: 'עובד מדינה', key: 2 },
    ],
  },
  {
    _id: 'q10',
    filedName: 'priorAsset',
    text: 'אילו נכסים נוספים יש ברשותך?',
    inputType: 'select',
    dataType: 'number',
    options: [
      { name: 'דירה אחת', key: 0 },
      { name: 'שתי דירות', key: 1 },
      { name: 'שלושה דירות ומעלה', key: 2 },
      { name: 'אין ברשותי נכסים נוספים', key: 3 },
      { name: 'אחר', key: 4 },
    ],
  },
  {
    _id: 'q11',
    filedName: 'riskLevel',
    text: 'בחר רמת סיכון',
    inputType: 'RiskGauge',
    dataType: 'number',
    text2:
      'אנו רוצים ליצור עבורך את תמהיל המשכנתא הטוב ביותר… לשם כך חשוב לנו שתבחר את רמת הסיכון שברצונך לקחת.',
  },
];

// function getValueByName(name) {
//   return questions.find(question => question.filedName === name).value;
// }

const sendApplication = answeredQuestions => {
  const flatAnswers = answersToFlatArray(answeredQuestions);
  const answersMap = mapAnswers(flatAnswers);
  console.log('answersMap:', answersMap);

  // let application = formatApplication(answeredQuestions);
  // console.log('application:', application);

  // axios
  //   .post(`http://localhost:3000/api/Application`, application)
  //   .then(function(response) {
  //     console.log(response);
  //   });
};

const answersToFlatArray = answers => {
  const flatAnswers = [];
  answers.forEach(answer => {
    if (answer.filedName) {
      flatAnswers.push({ filedName: answer.filedName, value: answer.value });
    } else {
      answer.questions.forEach(q => {
        flatAnswers.push({ filedName: q.filedName, value: q.value });
      });
    }
  });
  return flatAnswers;
};

const mapAnswers = flatAnswersArray => {
  const answersMap = {};
  flatAnswersArray.forEach(answer => {
    answersMap[answer.filedName] = answer.value;
  });

  return answersMap;
};

const getQuesting = () => {
  return [...questions];
};

const reset = () => {
  questions.forEach(q => {
    q.value = null;
  });
};

export default {
  getQuesting,
  sendApplication,
  reset,
};
