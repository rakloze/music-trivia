const notesOrderedMajor = {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
    'Cb': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
    'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E']
};

const notesOrderedMinor = {
    'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    'F#': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
    'C#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    'G#': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
    'D#': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
    'A#': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
    'Ab': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
    'Eb': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
    'Bb': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C']
};

const notesOrderedMinor7 = {
    'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    'F#': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
    'C#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    'G#': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
    'D#': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
    'A#': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
    'Ab': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
    'Eb': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
    'Bb': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C']
};

const notesOrderedMajor7 = {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
};

const notesOrderedDominant7 = {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B']
};

const notesMinor7Chord = {
    'A': ['A', 'C', 'E', 'G'],
    'E': ['E', 'G', 'B', 'D'],
    'B': ['B', 'D', 'F#', 'A'],
    'F#': ['F#', 'A', 'C#', 'E'],
    'C#': ['C#', 'E', 'G#', 'B'],
    'G#': ['G#', 'B', 'D#', 'F#'],
    'D#': ['D#', 'F#', 'A#', 'C#'],
    'A#': ['A#', 'C#', 'E#', 'G#'],
    'Ab': ['Ab', 'Cb', 'Eb', 'Gb'],
    'Eb': ['Eb', 'Gb', 'Bb', 'Db'],
    'Bb': ['Bb', 'Db', 'F', 'Ab'],
    'F': ['F', 'Ab', 'C', 'Eb'],
    'Fb': ['Fb', 'Abb', 'Cb', 'Ebb'],
    'C': ['C', 'Eb', 'G', 'Bb'],
    'Cb': ['Cb', 'Ebb', 'Gb', 'Bbb'],
    'G': ['G', 'Bb', 'D', 'F'],
    'Gb': ['Gb', 'Bbb', 'Db', 'Fb'],
    'D': ['D', 'F', 'A', 'C'],
    'Db': ['Db', 'Fb', 'Ab', 'Cb']
};

const notesDominant7Chord = {
    'C7': ['C', 'E', 'G', 'Bb'],
    'C#7': ['C#', 'E#', 'G#', 'B'],
    'Db7': ['Db', 'F', 'Ab', 'Cb'],
    'D7': ['D', 'F#', 'A', 'C'],
    'D#7': ['D#', 'Fx', 'A#', 'C#'],
    'Eb7': ['Eb', 'G', 'Bb', 'Db'],
    'E7': ['E', 'G#', 'B', 'D'],
    'F7': ['F', 'A', 'C', 'Eb'],
    'F#7': ['F#', 'A#', 'C#', 'E'],
    'Gb7': ['Gb', 'Bb', 'Db', 'Fb'],
    'G7': ['G', 'B', 'D', 'F'],
    'G#7': ['G#', 'B#', 'D#', 'F#'],
    'Ab7': ['Ab', 'C', 'Eb', 'Gb'],
    'A7': ['A', 'C#', 'E', 'G'],
    'A#7': ['A#', 'Cx', 'E#', 'G#'],
    'Bb7': ['Bb', 'D', 'F', 'Ab'],
    'B7': ['B', 'D#', 'F#', 'A']
};

const notesDiminishedChord = {
    'Cdim': ['C', 'Eb', 'Gb'],
    'C#dim': ['C#', 'E', 'G'],
    'Dbdim': ['Db', 'E', 'G'],
    'Ddim': ['D', 'F', 'Ab'],
    'D#dim': ['D#', 'F#', 'A'],
    'Ebdim': ['Eb', 'Gb', 'A'],
    'Edim': ['E', 'G', 'Bb'],
    'Fdim': ['F', 'Ab', 'B'],
    'F#dim': ['F#', 'A', 'C'],
    'Gbdim': ['Gb', 'A', 'C'],
    'Gdim': ['G', 'Bb', 'Db'],
    'G#dim': ['G#', 'B', 'D'],
    'Abdim': ['Ab', 'B', 'D'],
    'Adim': ['A', 'C', 'Eb'],
    'A#dim': ['A#', 'C#', 'E'],
    'Bbdim': ['Bb', 'Db', 'E'],
    'Bdim': ['B', 'D', 'F']
};

const notesAugmentedChord = {
    'Caug': ['C', 'E', 'G#'],
    'C#aug': ['C#', 'E#', 'Gx'],
    'Dbaug': ['Db', 'F', 'A'],
    'Daug': ['D', 'F#', 'A#'],
    'D#aug': ['D#', 'Fx', 'A#'],
    'Ebaug': ['Eb', 'G', 'B'],
    'Eaug': ['E', 'G#', 'B#'],
    'Faug': ['F', 'A', 'C#'],
    'F#aug': ['F#', 'A#', 'Cx'],
    'Gbaug': ['Gb', 'Bb', 'D'],
    'Gaug': ['G', 'B', 'D#'],
    'G#aug': ['G#', 'B#', 'Dx'],
    'Abaug': ['Ab', 'C', 'E'],
    'Aaug': ['A', 'C#', 'E#'],
    'A#aug': ['A#', 'Cx', 'Fx'],
    'Bbaug': ['Bb', 'D', 'F#'],
    'Baug': ['B', 'D#', 'Fx']
};

let currentQuestion = {};
let score = 0;
let totalQuestions = 0;
let correctStreak = 0;
let level = 1;
let currentGame = '';

function startGame(game) {
    currentGame = game;
    document.getElementById('game-selection').style.display = 'none';
    document.body.classList.remove('main-page');
    document.body.classList.add(currentGame === 'scale' ? 'scales-quiz' : 'chords-quiz');
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('correctStreak').style.display = 'block';
    getRandomQuestion();
}

function getRandomQuestion() {
    if (currentGame === 'scale') {
        getRandomScaleQuestion();
    } else if (currentGame === 'chords') {
        getRandomChordQuestion();
    }
}

function getRandomScaleQuestion() {
    const basicScales = ['major', 'minor'];
    const advancedScales = ['major7', 'dominant7', 'minor7'];
    let scaleType;

    if (level < 3) {
        scaleType = basicScales[Math.floor(Math.random() * basicScales.length)];
    } else {
        scaleType = [...basicScales, ...advancedScales][Math.floor(Math.random() * 5)];
    }

    let scaleName;
    let correctNotes;

    switch (scaleType) {
        case 'major':
            const majorScales = Object.keys(notesOrderedMajor);
            scaleName = majorScales[Math.floor(Math.random() * majorScales.length)];
            correctNotes = notesOrderedMajor[scaleName];
            break;
        case 'minor':
            const minorScales = Object.keys(notesOrderedMinor);
            scaleName = minorScales[Math.floor(Math.random() * minorScales.length)];
            correctNotes = notesOrderedMinor[scaleName];
            break;
        case 'major7':
            const major7Scales = Object.keys(notesOrderedMajor7);
            scaleName = major7Scales[Math.floor(Math.random() * major7Scales.length)];
            correctNotes = notesOrderedMajor7[scaleName];
            break;
        case 'dominant7':
            const dominant7Scales = Object.keys(notesOrderedDominant7);
            scaleName = dominant7Scales[Math.floor(Math.random() * dominant7Scales.length)];
            correctNotes = notesOrderedDominant7[scaleName];
            break;
        case 'minor7':
            const minor7Scales = Object.keys(notesOrderedMinor7);
            scaleName = minor7Scales[Math.floor(Math.random() * minor7Scales.length)];
            correctNotes = notesOrderedMinor7[scaleName];
            break;
    }
    currentQuestion = { scaleType, scaleName, correctNotes };
    document.getElementById('question').innerText = `What are the notes in the ${scaleName} ${scaleType} scale?`;
    generateChoices(correctNotes);
}

function getRandomChordQuestion() {
    const chordTypes = ['minor7', 'dominant7', 'diminished', 'augmented'];
    const chordType = chordTypes[Math.floor(Math.random() * chordTypes.length)];
    let chordName;
    let correctNotes;

    switch (chordType) {
        case 'minor7':
            const minor7Chords = Object.keys(notesMinor7Chord);
            chordName = minor7Chords[Math.floor(Math.random() * minor7Chords.length)];
            correctNotes = notesMinor7Chord[chordName];
            break;
        case 'dominant7':
            const dominant7Chords = Object.keys(notesDominant7Chord);
            chordName = dominant7Chords[Math.floor(Math.random() * dominant7Chords.length)];
            correctNotes = notesDominant7Chord[chordName];
            break;
        case 'diminished':
            const diminishedChords = Object.keys(notesDiminishedChord);
            chordName = diminishedChords[Math.floor(Math.random() * diminishedChords.length)];
            correctNotes = notesDiminishedChord[chordName];
            break;
        case 'augmented':
            const augmentedChords = Object.keys(notesAugmentedChord);
            chordName = augmentedChords[Math.floor(Math.random() * augmentedChords.length)];
            correctNotes = notesAugmentedChord[chordName];
            break;
    }

    currentQuestion = { chordType, chordName, correctNotes };
    document.getElementById('question').innerText = `What are the notes in the ${chordName} ${chordType} chord?`;
    generateChoices(correctNotes);
}

function generateChoices(correctNotes) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    const correctChoice = correctNotes.join(', ');
    const choices = [correctChoice];

    while (choices.length < 4) {
        let alternativeNotes = correctNotes.map(note => getRandomEnharmonic(note));
        const randomChoice = alternativeNotes.join(', ');
        if (!choices.includes(randomChoice)) {
            choices.push(randomChoice);
        }
    }

    choices.sort(() => Math.random() - 0.5);

    choices.forEach((choice, index) => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.innerHTML = `
            <input type="radio" id="choice${index}" name="choices" value="${choice}">
            <label for="choice${index}">${choice}</label>
        `;
        choicesContainer.appendChild(choiceElement);
    });
}

function getRandomEnharmonic(note) {
    const enharmonics = {
        'Cb': ['Cb', 'B'],
        'C': ['C', 'B#'],
        'C#': ['C#', 'Db'],
        'Db': ['Db', 'C#'],
        'D': ['D'],
        'D#': ['D#', 'Eb'],
        'Eb': ['Eb', 'D#'],
        'E': ['E', 'Fb'],
        'Fb': ['Fb', 'E'],
        'F': ['F', 'E#'],
        'F#': ['F#', 'Gb'],
        'Gb': ['Gb', 'F#'],
        'G': ['G'],
        'G#': ['G#', 'Ab'],
        'Ab': ['Ab', 'G#'],
        'A': ['A'],
        'A#': ['A#', 'Bb'],
        'Bb': ['Bb', 'A#'],
        'B': ['B', 'Cb'],
        'B#': ['B#', 'C']
    };

    const equivalents = enharmonics[note] || [note];
    return equivalents[Math.floor(Math.random() * equivalents.length)];
}

function submitAnswer() {
    const selectedChoice = document.querySelector('input[name="choices"]:checked');
    if (!selectedChoice) {
        alert("Please select an answer.");
        return;
    }

    const userAnswer = selectedChoice.value.split(', ').map(note => note.trim());
    const correctNotes = currentQuestion.correctNotes;
    const scaleName = currentQuestion.scaleName || currentQuestion.chordName;
    const scaleType = currentQuestion.scaleType || currentQuestion.chordType;

    if (arraysEqual(userAnswer, correctNotes)) {
        document.getElementById('feedback').innerText = "Correct!";
        score += 1;
        correctStreak += 1;
        if (correctStreak >= 5) {
            level += 1;
            correctStreak = 0;
            alert(`Great job! You have reached level ${level}. The questions will now be harder!`);
        }
    } else {
        document.getElementById('feedback').innerText = `Wrong. The correct notes for ${scaleName} ${scaleType} are: ${correctNotes.join(', ')}`;
        correctStreak = 0;
    }

    totalQuestions += 1;
    document.getElementById('score').innerText = `Score: ${score}/${totalQuestions}`;
    document.getElementById('correctStreak').innerText = `Correct Streak: ${correctStreak}`;

    getRandomQuestion();
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function back() {
    document.getElementById('game-selection').style.display = 'block';
    document.body.classList.remove('scales-quiz', 'chords-quiz');
    document.body.classList.add('main-page');
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('correctStreak').style.display = 'none';
    score = 0;
    totalQuestions = 0;
    correctStreak = 0;
    level = 1;
    document.getElementById('score').innerText = `Score: ${score}/${totalQuestions}`;
    document.getElementById('correctStreak').innerText = `Correct Streak: ${correctStreak}`;
}

// Initialize the first question
getRandomQuestion();
