/* eslint-disable react/prop-types */
import db from '../../db.json';
import ExternalQuiz from '../../src/screens/Quiz';

export default function QuizPage() {
  return (
    <ExternalQuiz questionsDB={db} />
  );
}
