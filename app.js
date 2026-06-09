const gradePanel = document.querySelector("#gradePanel");
const quizPanel = document.querySelector("#quizPanel");
const resultPanel = document.querySelector("#resultPanel");
const scorePill = document.querySelector("#scorePill");
const progressFill = document.querySelector("#progressFill");
const questionCount = document.querySelector("#questionCount");
const visualStage = document.querySelector("#visualStage");
const questionText = document.querySelector("#questionText");
const choicesGrid = document.querySelector("#choicesGrid");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const changeGradeButton = document.querySelector("#changeGradeButton");
const resultChangeGradeButton = document.querySelector("#resultChangeGradeButton");
const playAgainButton = document.querySelector("#playAgainButton");
const resultVisual = document.querySelector("#resultVisual");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");

const state = {
  grade: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false
};

gradePanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-grade]");
  if (!button) return;
  startQuiz(button.dataset.grade);
});

choicesGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".choice-button");
  if (!button || state.answered) return;
  chooseAnswer(button);
});

nextButton.addEventListener("click", () => {
  if (state.currentIndex >= state.questions.length - 1) {
    showResults();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
});

changeGradeButton.addEventListener("click", showGradePicker);
resultChangeGradeButton.addEventListener("click", showGradePicker);
playAgainButton.addEventListener("click", () => startQuiz(state.grade));

function startQuiz(grade) {
  state.grade = grade;
  state.questions = shuffle([...QUESTION_BANK[grade].questions]).slice(0, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  gradePanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
  quizPanel.classList.remove("is-hidden");

  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  state.answered = false;

  questionCount.textContent = `${QUESTION_BANK[state.grade].label} · Question ${state.currentIndex + 1} of ${state.questions.length}`;
  questionText.textContent = question.prompt;
  scorePill.textContent = `${state.score} / ${state.questions.length}`;
  progressFill.style.width = `${(state.currentIndex / state.questions.length) * 100}%`;
  feedback.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");

  visualStage.innerHTML = "";
  visualStage.appendChild(renderVisual(question.visual));

  choicesGrid.innerHTML = "";
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.choice = choice;
    button.appendChild(renderChoiceGraphic(choice));

    const label = document.createElement("span");
    label.className = isSelfLabelingChoice(choice) ? "choice-label visually-hidden" : "choice-label";
    label.textContent = choice;
    button.appendChild(label);

    choicesGrid.appendChild(button);
  });
}

function chooseAnswer(button) {
  const question = state.questions[state.currentIndex];
  const isCorrect = button.dataset.choice === question.answer;
  state.answered = true;

  if (isCorrect) {
    state.score += 1;
    feedback.textContent = "Yes! That is right.";
    feedback.className = "feedback feedback-good";
  } else {
    feedback.textContent = `Nice try. The answer is ${question.answer}.`;
    feedback.className = "feedback feedback-warm";
  }

  [...choicesGrid.children].forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.dataset.choice === question.answer) {
      choiceButton.classList.add("is-correct");
    } else if (choiceButton === button) {
      choiceButton.classList.add("is-wrong");
    }
  });

  scorePill.textContent = `${state.score} / ${state.questions.length}`;
  progressFill.style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
  feedback.classList.remove("is-hidden");
  nextButton.textContent = state.currentIndex >= state.questions.length - 1 ? "See result" : "Next";
  nextButton.classList.remove("is-hidden");
  nextButton.focus();
}

function showResults() {
  const total = state.questions.length;
  const percent = Math.round((state.score / total) * 100);

  quizPanel.classList.add("is-hidden");
  resultPanel.classList.remove("is-hidden");
  scorePill.textContent = `${state.score} / ${total}`;
  progressFill.style.width = "100%";

  resultVisual.textContent = percent >= 80 ? "🏆" : percent >= 50 ? "🌟" : "💪";
  resultTitle.textContent = percent >= 80 ? "Super score" : percent >= 50 ? "Good practice" : "Keep playing";
  resultText.textContent = `You got ${state.score} out of ${total} correct.`;
}

function showGradePicker() {
  quizPanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
  gradePanel.classList.remove("is-hidden");
  scorePill.textContent = "0 / 0";
}

function renderVisual(visual) {
  const wrapper = document.createElement("div");
  wrapper.className = `visual visual-${visual.type}`;

  if (visual.type === "items") {
    visual.items.forEach((item) => wrapper.appendChild(bigToken(item)));
  }

  if (visual.type === "compare") {
    wrapper.appendChild(sideGroup("Left", visual.left));
    wrapper.appendChild(sideGroup("Right", visual.right));
  }

  if (visual.type === "sequence" || visual.type === "number-row") {
    visual.items.forEach((item) => wrapper.appendChild(bigToken(item, item === "?")));
  }

  if (visual.type === "shape-row") {
    visual.items.forEach((shape) => wrapper.appendChild(shapeToken(shape)));
  }

  if (visual.type === "target") {
    const target = document.createElement("div");
    target.className = "target-box";
    visual.items.forEach((item) => target.appendChild(bigToken(item)));
    wrapper.appendChild(target);
  }

  if (visual.type === "towers") {
    visual.items.forEach((height, index) => {
      const tower = document.createElement("div");
      tower.className = "tower";
      tower.style.height = `${height * 18}px`;
      tower.setAttribute("aria-label", `Tower ${index + 1}`);
      wrapper.appendChild(tower);
    });
  }

  if (visual.type === "sum") {
    visual.groups.forEach((group, index) => {
      const groupNode = document.createElement("div");
      groupNode.className = "sum-group";
      group.forEach((item) => groupNode.appendChild(bigToken(item)));
      wrapper.appendChild(groupNode);

      if (index < visual.groups.length - 1) {
        wrapper.appendChild(operatorToken(visual.operator));
      }
    });
  }

  if (visual.type === "cross-out") {
    visual.items.forEach((item, index) => {
      const token = bigToken(item);
      if (index >= visual.items.length - visual.crossed) {
        token.classList.add("crossed");
      }
      wrapper.appendChild(token);
    });
  }

  if (visual.type === "equation") {
    const equation = document.createElement("div");
    equation.className = "equation";
    equation.textContent = visual.text;
    wrapper.appendChild(equation);
  }

  if (visual.type === "place-value") {
    for (let i = 0; i < visual.tens; i += 1) {
      const ten = document.createElement("div");
      ten.className = "ten-rod";
      for (let j = 0; j < 10; j += 1) {
        ten.appendChild(document.createElement("span"));
      }
      wrapper.appendChild(ten);
    }
    for (let i = 0; i < visual.ones; i += 1) {
      wrapper.appendChild(bigToken("●"));
    }
  }

  if (visual.type === "half") {
    const left = document.createElement("div");
    const right = document.createElement("div");
    left.className = "half-group";
    right.className = "half-group";
    visual.items.forEach((item, index) => {
      (index < visual.items.length / 2 ? left : right).appendChild(bigToken(item));
    });
    wrapper.append(left, right);
  }

  if (visual.type === "clock") {
    wrapper.appendChild(clockFace(visual.hour, visual.minute));
  }

  if (visual.type === "coins") {
    visual.items.forEach((item) => {
      const coin = document.createElement("div");
      coin.className = "coin";
      coin.textContent = item;
      wrapper.appendChild(coin);
    });
  }

  if (visual.type === "lengths") {
    visual.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "length-row";
      const bar = document.createElement("span");
      bar.style.width = `${item.size * 22}px`;
      const label = document.createElement("strong");
      label.textContent = item.label;
      row.append(bar, label);
      wrapper.appendChild(row);
    });
  }

  if (visual.type === "cups") {
    visual.items.forEach((level) => wrapper.appendChild(cupToken(level)));
  }

  return wrapper;
}

function renderChoiceGraphic(choice) {
  const graphic = document.createElement("span");
  graphic.className = "choice-graphic";

  if (/^[●\s]+$/.test(choice)) {
    choice.split(" ").forEach((dot) => {
      if (!dot) return;
      const dotNode = document.createElement("span");
      dotNode.textContent = dot;
      graphic.appendChild(dotNode);
    });
    return graphic;
  }

  if (/^[🔴🔵🟡🟢⬛⬜]$/.test(choice)) {
    graphic.textContent = choice;
    return graphic;
  }

  if (/^\d+$/.test(choice)) {
    graphic.textContent = choice;
    return graphic;
  }

  const shapeMap = { Circle: "◯", Square: "□", Triangle: "△", Rectangle: "▭", Star: "★", Cube: "🧊" };
  graphic.textContent = shapeMap[choice] || "✓";
  return graphic;
}

function isSelfLabelingChoice(choice) {
  return /^[●\s]+$/.test(choice) || /^[🔴🔵🟡🟢⬛⬜]$/.test(choice) || /^\d+$/.test(choice);
}

function bigToken(content, isQuestion = false) {
  const token = document.createElement("span");
  token.className = isQuestion ? "big-token question-token" : "big-token";
  token.textContent = content;
  return token;
}

function operatorToken(content) {
  const token = document.createElement("span");
  token.className = "operator-token";
  token.textContent = content;
  return token;
}

function sideGroup(label, items) {
  const group = document.createElement("div");
  group.className = "side-group";

  const title = document.createElement("strong");
  title.textContent = label;

  const itemsNode = document.createElement("div");
  itemsNode.className = "side-items";
  items.forEach((item) => itemsNode.appendChild(bigToken(item)));

  group.append(title, itemsNode);
  return group;
}

function shapeToken(shape) {
  const token = document.createElement("span");
  token.className = `shape-token shape-${shape}`;
  token.setAttribute("aria-label", shape);
  if (shape === "circle") token.textContent = "◯";
  if (shape === "square") token.textContent = "□";
  if (shape === "triangle") token.textContent = "△";
  if (shape === "rectangle") token.textContent = "▭";
  if (shape === "star") token.textContent = "★";
  if (shape === "cube") token.textContent = "🧊";
  return token;
}

function cupToken(level) {
  const cup = document.createElement("div");
  cup.className = "cup";
  cup.setAttribute("aria-label", level);
  const fill = document.createElement("span");
  fill.className = `cup-fill cup-${level}`;
  cup.appendChild(fill);
  return cup;
}

function clockFace(hour, minute) {
  const clock = document.createElement("div");
  clock.className = "clock";
  const hourHand = document.createElement("span");
  const minuteHand = document.createElement("span");
  hourHand.className = "clock-hand hour-hand";
  minuteHand.className = "clock-hand minute-hand";
  hourHand.style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6}deg)`;
  clock.append(hourHand, minuteHand);
  return clock;
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}
