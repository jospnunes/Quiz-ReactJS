export const questions = [
    {
        questionText: 'Qual é a maneira correta de declarar uma constante em JavaScript?',
        answerOptions: [
            { answerText: 'var myVariable = "hello";', isCorrect: false },
            { answerText: 'let myVariable = "hello";', isCorrect: false },
            { answerText: 'myVariable = "hello";', isCorrect: false },
            { answerText: 'const myVariable = "hello";', isCorrect: true},
        ],
    },
    {
        questionText: 'Qual é a maneira correta de adicionar um comentário em uma linha única em JavaScript?',
        answerOptions: [
            { answerText: '// ', isCorrect: true },
            { answerText: '<!--', isCorrect: false },
            { answerText: '#', isCorrect: false },
            { answerText: '/*', isCorrect: false },
        ],
    },
    {
        questionText: 'Qual é a maneira correta de adicionar um comentário em múltiplas linhas em JavaScript?',
        answerOptions: [
            { answerText: '//', isCorrect: false },
            { answerText: '<!--  -->', isCorrect: false },
            { answerText: '/*  */', isCorrect: true },
            { answerText: '# #', isCorrect: false },
        ],
    },
    {
        questionText: 'Qual é a maneira correta de importar um módulo em JavaScript?',
        answerOptions: [
            { answerText: 'include "myModule";', isCorrect: false },
            { answerText: 'import "myModule";', isCorrect: true },
            { answerText: 'require "myModule";', isCorrect: false },
            { answerText: 'use "myModule";', isCorrect: false },
        ],
    },
    {
        questionText: 'Qual é a sintaxe correta para declarar uma função em JavaScript?',
        answerOptions: [
            { answerText: 'function:myFunction()', isCorrect: false },
            { answerText: 'var myFunction = function()', isCorrect: false },
            { answerText: 'function = myFunction()', isCorrect: false },
            { answerText: 'function myFunction()', isCorrect: true },
        ],
    },
    {
        questionText: 'Qual é o operador de atribuição em JavaScript?',
        answerOptions: [
            { answerText: '*', isCorrect: false },
            { answerText: '+', isCorrect: false },
            { answerText: '=', isCorrect: true},
            { answerText: '|', isCorrect: false },
        ],
    },
    {
        questionText: ' Qual é a maneira correta de chamar uma função em JavaScript?',
        answerOptions: [
            { answerText: 'function()', isCorrect: true},
            { answerText: 'function = ()>', isCorrect: false },
            { answerText: 'function :()>', isCorrect: false },
            { answerText: 'function>', isCorrect: false },
        ],
    },
    {
        questionText: 'Qual é a função usada para mostrar uma caixa de diálogo com uma mensagem em JavaScript?',
        answerOptions: [
            { answerText: 'show()', isCorrect: false },
            { answerText: 'alert()', isCorrect: true },
            { answerText: 'print()', isCorrect: false },
            { answerText: 'dialog()', isCorrect: true },
        ],
    },
    {
        questionText: ' Quando o JavaScript foi criado?',
        answerOptions: [
            { answerText: '1999', isCorrect: false },
            { answerText: '2001', isCorrect: false },
            { answerText: '1980', isCorrect: false },
            { answerText: '1995', isCorrect: true },
        ],
    },
    {
        questionText: 'Quem criou o JavaScript?',
        answerOptions: [
            { answerText: 'Linus Torvalds', isCorrect: false },
            { answerText: 'Brendan Eich', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Brian Kernighan', isCorrect: false },
        ],
    },
];