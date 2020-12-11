import { Data } from "../Types";

const data: Data = {
  questions: [
    {
      question: "Spell the Jewish holiday in December?",
      answer: "Hanukkah or Chanukah",
    },
    {
      question: (
        <div>
          How do you de-gnome a garden?
          <ul style={{ textAlign: "left" }}>
            <li>Use a disarming charm</li>
            <li>Swing the gnome around and then drop them over the wall</li>
            <li>
              Plant Venomous Tentacula in the garden to ward the gnomes away
            </li>
            <li>Tickle the gnome until they run away</li>
          </ul>
        </div>
      ),
      answer: "Swing the gnome around and then drop them over the wall",
    },
    {
      question: "Which harry potter character is Holy",
      answer: "George Weasley",
    },
    {
      question: "When did Disney World Open?",
      answer: "1971",
      followUpQuestion: {
        question: "When did Disneyland Open?",
        answer: "1955",
      },
    },
    {
      question: "Name all of the 7 dwarves in Snow White?",
      answer: "Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy and Dopey",
    },
    { question: "How many stripes are there on the US flag?", answer: "13" },
    {
      question: "Until 1923, what was the Turkish city of Istanbul called?",
      answer: "Constantinople",
    },
    { question: "How many keys does a classic piano have?", answer: "88" },
    {
      question:
        "In which classic novel is the first line: 'In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since'?",
      answer: "The Great Gatsby",
    },
    {
      question: "Finish this famaus quote 'I never look back, darling!...'",
      answer:
        "'I never look back, darling! It distracts from the now.' -Edna Mode ",
    },
    {
      question: "What color is Bing Bong?",
      answer: "Purple",
      followUpQuestion: {
        question: "What is he made of?",
        answer: "cotton candy, cat, elephant and dolphin",
      },
    },
    { question: "What is the name of Dean's car?", answer: "Baby" },
    { question: "What does Dean order at a dinner?", answer: "Pie" },
    { question: "What is Buffy's weapon called?", answer: "Mr Pointy" },
    { question: "What is Anya afraid of?", answer: "bunnies" },
    {
      question: "When did the Red Sox win the World Series?",
      answer: "2018, 2013, 2007, 2004, 1918, 1916, 1915, 1912, 1903",
    },
    {
      question: "Who did the Red Sox trade in 2004?",
      answer: "Nomar Garciaparra",
    },
    {
      question: "Who is the GOAT?",
      answer: "Tom Brady",
      followUpQuestion: {
        question: "If your not from Boston?",
        answer: "Jerry Rice",
      },
    },
    {
      question: "Passamaquody",
      answer: "Nonchalant",
      followUpQuestion: { question: "Form of the Word?", answer: "chalant" },
    },

    // {
    //   description: "Wrap this present, blindfolded",
    //   followUpQuestion: { description: "Unwrap this present with oven mitts" },
    // },
    { description: "Balance a spoon on your nose" },
    { description: "Doughnut on a string" },
    { description: "Stack my nuts" },
    {
      description: "Cut down the mightiest tree in the forest—with a herring!",
    },
  ],
};

export default data;
