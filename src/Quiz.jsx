import React, { useState } from 'react';
import './Quiz.css'
import { questions } from './questions';
export default function Quiz() {
    

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
     const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='quiz'>

            {showScore ? (
                <div className='score'>
                    Você acertou {score} de {questions.length} questões!
                    <button onClick ={() => window.location.reload()} >Reiniciar</button>
                </div>
            ) : (
                <>
                    <div className='question'>
                        <div className='questionCount'>
                            <span>Questão {currentQuestion + 1}</span> de {questions.length}
                        </div>
                        <div className='questionText'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>

    );
}