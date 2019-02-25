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

  // {
  //   _id: 'q4',
  //   formName: 'repaymentTime',
  //   inputType: 'Time',
  //   text: 'תוך כמה זמן אתה רוצה להחזיר את ההלווה?',
  //   type: 'time-months',
  //   advice: '3כדי שבלא בלא ת בלא בלאת בלא',
  // },
  // {
  //   _id: 'q5',
  //   formName: 'maximumRepaymentTime',
  //   inputType: 'Time',
  //   text: 'ומה נראה לך יהיה הזמן המקסימלי?',
  //   type: 'time-months',
  // },
  // {
  //   _id: 'q6',
  //   formName: 'fixRepaymentTime',
  //   inputType: 'yesNo',
  //   text:
  //     'האם לקבוע זמן ממוצא לפדיון או להציעה לך את הזמן שיהיה הכי טוב עבורך?',
  //   type: 'boolean',
  // },
  // {
  //   _id: 'q7',
  //   formName: 'averageMonthlyRepayment',
  //   inputType: 'currency',
  //   text: 'מהו גובה ההחזר החודשי הממוצע שאתה מעוניין בו?',
  //   type: 'currency',
  //   currency: 'ILS',
  // },
  // {
  //   _id: 'q8',
  //   formName: 'maxMonthlyRepayment',
  //   inputType: 'currency',
  //   text: 'מסוגל לספוג גידול בהחזר עד סכום של?',
  //   type: 'currency',
  //   currency: 'ILS',
  // },
  // {
  //   _id: 'q9',
  //   formName: 'fixMonthlyRepayment',
  //   text: 'האם לקבע החזר חודשי?',
  //   inputType: 'yesNo',
  //   type: 'boolean',
  // },
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
  let application = formatApplication(answeredQuestions);
  console.log('application:', application);

  axios
    .post(`http://localhost:3000/api/Application`, application)
    .then(function(response) {
      console.log(response);
    });
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
