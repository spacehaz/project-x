export default ({ answers}) => {
  if (!answers) { return JSON.stringify({}) }
  const answersFormatted = answers.reduce((sum, { question_id, answer_id }) => {
    sum[question_id] = answer_id
    return sum
  }, {})

  return JSON.stringify(answersFormatted)
}