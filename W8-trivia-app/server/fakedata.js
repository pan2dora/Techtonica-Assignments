// File to save one response for the API so I can use it to hardcode if I need it
// and don't saturate the API call 

const fakedataMC = {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which rap group released the album &quot;Straight Outta Compton&quot;?",
        correct_answer: "N.W.A",
        incorrect_answers: ["Wu-Tang Clan", "Run-D.M.C.", "Beastie Boys"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
        correct_answer: "Justin Bieber",
        incorrect_answers: ["Selena Gomez", "Ellie Goulding", "The Weeknd"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "Brian May was the guitarist for which band?",
        correct_answer: "Queen",
        incorrect_answers: ["Pink Floyd", "Rolling Stones", "The Doors"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "The &quot;K&quot; in &quot;K-Pop&quot; stands for which word?",
        correct_answer: "Korean",
        incorrect_answers: ["Kenyan", "Kazakhstan", "Kuwaiti"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "What was Rage Against the Machine&#039;s debut album?",
        correct_answer: "Rage Against the Machine",
        incorrect_answers: [
          "Evil Empire",
          "Bombtrack",
          "The Battle Of Los Angeles",
        ],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which Beatles album does NOT feature any of the band members on it&#039;s cover?",
        correct_answer: "The Beatles (White Album)",
        incorrect_answers: ["Rubber Soul", "Abbey Road", "Magical Mystery Tour"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "From which country did the song &quot;Gangnam Style&quot; originate from?",
        correct_answer: "South Korea",
        incorrect_answers: ["Japan", "North Korea", "China"],
      },
    ],
  };
  
  const fakedataTF = {
    response_code: 0,
    results: [
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "medium",
        question: "Furby was released in 1998.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "medium",
        question: "There are 86400 seconds in a day.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "medium",
        question:
          "Albert Einstein had trouble with mathematics when he was in school.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "medium",
        question:
          "Fast food restaurant chains Carl&#039;s Jr. and Hardee&#039;s are owned by the same company.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "medium",
        question:
          "The pickled gherkin was first added to hamburgers because a US health law required all fast-food to include a source of Vitamin C.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
    ],
  };
  
  const fakedataAny = {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "What was the subject of the 2014 song &quot;CoCo&quot; by American rapper O. T. Genasis?",
        correct_answer: "Cocaine",
        incorrect_answers: [
          "Conan O&#039;Brien",
          "Cobalt(II) carbonate",
          "Coconut cream pie",
        ],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "According to the American rapper Nelly, what should you do when its hot in here?",
        correct_answer: "Take off all your clothes",
        incorrect_answers: [
          "Take a cool shower",
          "Drink some water",
          "Go skinny dipping",
        ],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?",
        correct_answer: "Jamie Foxx",
        incorrect_answers: ["Alec Baldwin", "Dwayne Johnson", " Bruce Willis"],
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "easy",
        question: "Scatman John&#039;s real name was John Paul Larkin.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "When was Gangnam Style uploaded to YouTube?",
        correct_answer: "2012",
        incorrect_answers: ["2013", "2014", "2011"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "Which music publication is often abbreviated to NME?",
        correct_answer: "New Musical Express",
        incorrect_answers: [
          "New Metro Entertainment",
          "Next Musical Enterprise",
          "North Manchester Express",
        ],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "easy",
        question: "What is the name of Rivers Cuomo&#039;s wife?",
        correct_answer: "Kyoko Ito",
        incorrect_answers: ["Yoko Ono", "Kyary Pamyu Pamyu", "LiSA"],
      },
    ],
  };
  
  export { fakedataTF, fakedataMC, fakedataAny };
  