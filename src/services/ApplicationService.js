import axios from 'axios';

const questions = [
  {
    _id: 'q1',
    formName: 'asset',
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
  },

  {
    _id: 'q2',
    formName: 'assetValue',
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
    formName: 'mortgageValue',
    inputType: 'currencyPercent',
    text: 'מצאת דירה? מצוין! \n מה גובה ההלוואה שאתה צריך להשלמת הרכישה??',
    type: 'currencyPercent',
    value: 500000,
    // type: 'currency',
    currency: 'ILS',
  },
  {
    _id: 'q4',
    formName: 'multiInputs',
    inputType: 'multiInputs',
    text: 'מה גבול הזמן שלך?',
    questions: [
      {
        _id: 'iQ1',
        value: 10,
        label: 'זמן מקסימלי לפדיון בשנים',
        formName: 'repaymentTime',
        type: 'years',
      },
      {
        _id: 'iQ2',
        value: 10,
        label: 'זמן ממוצע לפדיון הקרן בשנים',
        formName: 'maximumRepaymentTime',
        type: 'years',
      },
    ],
  },
  {
    _id: 'q5',
    formName: 'multiInputs',
    inputType: 'multiInputs',
    text: 'את העיקר עברנו…',
    text2: 'נשארו עוד מספר פרטים קטנים...',
    questions: [
      {
        _id: 'iQ1',
        value: 0,
        label: 'ממוצע הוצאות בחודש',
        formName: 'averageMonthlySpending',
        type: 'currency',
      },
      {
        _id: 'iQ2',
        value: 0,
        label: 'הכנסה נטו של לווה 1',
        formName: 'averageMonthlyIncomeLoaner1',
        type: 'currency',
      },
      {
        _id: 'iQ3',
        value: 0,
        label: 'הכנסה נטו של לווה 2',
        formName: 'averageMonthlyIncomeLoaner2',
        type: 'currency',
      },
    ],
  },
  {
    _id: 'q6',
    formName: 'multiInputs',
    inputType: 'multiInputs',
    text: 'מספר פרטים נוספים',
    questions: [
      {
        _id: 'iQ1',
        value: 35,
        label: 'גיל הלווה המבוגר',
        formName: 'ageOldestLoaner',
        type: 'years',
      },
      {
        _id: 'iQ2',
        value: 0,
        label: 'מספר ילדים מתחת לגיל 18',
        formName: 'numberChildrenUnder18',
        type: 'number',
      },
      {
        _id: 'iQ3',
        value: 'נשוי',
        label: 'סטטוס משפחתי',
        formName: 'maritalStatus',
        type: 'text',
      },
    ],
  },
  {
    _id: 'q8',
    formName: 'workStatus',
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
    formName: 'workStatus2',
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
    formName: 'priorAsset',
    text: 'אילו נכסים נוספים יש ברשותך?',
    inputType: 'select',
    dataType: 'number',
    options: [
      { name: 'דירה אחת', key: 0 },
      { name: 'שתי דירות', key: 1 },
      { name: 'שלושה דירות ומעלה', key: 2 },
      { name: 'אחר', key: 3 },
    ],
  },
];

const application = {
  currency: 'ILS',
  asset: { name: '', key: null },
  assetValue: null,
  mortgageValue: null,
  repaymentTime: { value: null, timescale: 'months' },
  maximumRepaymentTime: { value: null, timescale: 'months' },
  fixRepaymentTime: null,
  averageMonthlyRepayment: null,
  maxMonthlyRepayment: null,
  fixMonthlyRepayment: null,
};

function getValueByName(name) {
  return questions.find(question => question.formName === name).value;
}

const sendApplication = answeredQuestions => {
  // let application = formatApplication(answeredQuestions);
  // console.log('application:', application);

  // axios
  //   .post(`http://localhost:3000/api/Application`, application)
  //   .then(function(response) {
  //     console.log(response);
  //   });
};

const formatApplication = questions => {
  const Data = { ...application };
  Data.asset = { name: '', key: getValueByName('asset') };
  Data.assetValue = getValueByName('assetValue');
  Data.mortgageValue = getValueByName('mortgageValue');
  Data.repaymentTime = {
    value: getValueByName('repaymentTime'),
    timescale: 'months',
  };
  Data.maximumRepaymentTime = {
    value: getValueByName('maximumRepaymentTime'),
    timescale: 'months',
  };
  Data.fixRepaymentTime = getValueByName('fixRepaymentTime');
  Data.averageMonthlyRepayment = getValueByName('averageMonthlyRepayment');
  Data.maxMonthlyRepayment = getValueByName('maxMonthlyRepayment');
  Data.fixMonthlyRepayment = getValueByName('fixMonthlyRepayment');
  return Data;
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
