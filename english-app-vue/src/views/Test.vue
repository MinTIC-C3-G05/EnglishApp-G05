<template>

<head><title>English-level-test</title></head>

<header>
  <div class="d-flex justify-content-center"> 
  <img src="@/assets/CLIK_PROF_LOGO.png" alt="logo" style="height: 150px"/>
  <h1 class="text-center pt-5">English Level Test</h1>
  </div>
</header>

<body>
  <div class="Test" v-if="questionIndex < questions.length"> 
    <div class="pIntro"><b>{{question.instructions}}</b></div><br>
  <div class="container-fluid center" v-if="questionIndex < questions.length">
    <div class="container-question">
      <div class="question">
        <div class="h6"><b>{{ question.question }}</b></div>
      </div>
      </div>
      <br>
      <div class="justify-content-around" id="options" v-for="opt of question.choices" :key="opt">
        <label class="options">
        <input type="radio" name="choice" v-model="answer" :value="opt"/>
        {{ opt }}
        <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <!--div v-else-->
    <div class="d-flex justify-content-around pt-3">
      <button id="prev" type="button" class="btn btn-primary" v-bind:class="[questionIndex===0? 'disabled' : 'enabled']" v-if="questionIndex <= [questions.length-1]" @click="previous">Previous</button>
      <div class="h5 mt-3" v-if="questionIndex <= [questions.length-1]"><i>{{questionIndex+1}}/{{questions.length}}</i></div>
      <button id="next" type="button" class="btn btn-primary" v-if="questionIndex < [questions.length-1]" @click="submit">Next</button>
      <button id="next" type="button" class="btn btn-primary" v-if="questionIndex == [questions.length-1]" @click="submit">Submit</button>
    </div>
  </div>

  <div class="h3 text-center" v-if="questionIndex === questions.length">
            <b>Test finished</b> <br><br>
            <div class="container-fluid center">
                <div class="container-question">
                    <div class="question pt-2 h4 text-center">
                    Total score: {{ score() }} / {{ questions.length }} <br><br>
                    You got {{Math.round(score()*100/questions.length)}}% correct answers!<br><br><br>
                    Your English level is <b class="h2">{{level()}}</b><br><br><br>
                    <div class="d-flex justify-content-around pt-3">
                    <div id="tests"><button type="button" Onclick="location.href='Recomend'" class="btn btn-primary btn-lg">Recommended tests</button></div>
                    <div id="material"><button type="button" Onclick="location.href='Resources'" class="btn btn-success btn-lg">Start learning!</button></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
</body>
</template>

<script>
const questions = [
  {
    instructions: "Choose the best word to complete the sentence.",
    question: "The baby \n boy saw ___ in the mirror and started to cry.",
    choices: ["itself", "himself", "herself"],
    rightAnswer: "himself",
  },
  {
    instructions: "Choose the best word (or phrase) to complete the sentence.",
    question: "Firstly, I want to congratulate you all. Secondly, I would like to wish you good luck and ___ I hope you have enjoyed the course.",
    choices: ["finally", "at last", "in the end"],
    rightAnswer: "finally",
  },
  {
    instructions: "Choose the best word to complete the sentence.",
    question: "You ___ clean your teeth twice a day to avoid having problems.",
    choices: ["should", "can", "will"],
    rightAnswer: "should",
  },
  {
    instructions: "Choose the best word to complete the dialogue.",
    question: "Jack: I think it’s going to rain. \n Jill: I ___ , the clouds are clearing. \n Jack: We’ll soon see.",
    choices: ["argue", "complain", "disagree"],
    rightAnswer: "disagree",
  },
  {
    instructions: "Choose the best word to complete the dialogue.",
    question: "Anne: Oh! I watched the new TV show last night. \n Jo: Was it any good? \n Anne: Yes. ___ the TV set is so old I could see very little.",
    choices: ["Mind you", "By the way", "Still"],
    rightAnswer: "By the way",
  },
{
    instructions: "Choose the best word to complete the sentence.",
    question: "Have you got time to discuss your work now or are you ___ to leave?",
    choices: ["about", "round","planned", "thinking"],
    rightAnswer: "about",
  },
{
    instructions: "Choose the best word to complete the sentence.",
    question: "When I realised I had dropped my gloves, I decided to ___ my steps.",
    choices: ["retrace", "regress", "return", "resume"],
    rightAnswer: "resume",
  },
{
    instructions: "Choose the best phrase to complete the sentence.",
    question: "I'd like two tickets for tomorrow night.",
    choices: ["How much did you pay?", "I'll just check for you", "Afternoon and evening", "none of the above"],
    rightAnswer: "I'll just check for you",
  },
{
    instructions: "Some words are often used together, e.g. smelly + socks. Choose a word which is often used with:",
    question: "sophisticated ____",
    choices: ['ship', 'dress', 'purse', 'none of the above'],
    rightAnswer:"dress",
  },
{
    instructions: "Choose the word or phrase which has a similar meaning to:",
    question: "return",
    choices: ["account", "turn again","go back", "reverse"],
    rightAnswer: "go back",
  },
];
export default {
  name: "Test",
  data() {
    return {
      questions,
      userResponses: Array(10).fill("none"),
      questionIndex: 0,
      question: questions[0],
      answer: "",
    };
  },
  methods: {
    submit() {
      const { answer, question, questions, questionIndex } = this;
      if (answer === question.rightAnswer) {
        this.userResponses[this.questionIndex]="well";
      }

      if (questionIndex <= questions.length) {
        this.questionIndex++;
        this.question = { ...questions[this.questionIndex] };
      }
    },
    previous() {
        this.questionIndex--;
        this.question = { ...questions[this.questionIndex] };
        this.userResponses[this.questionIndex]="none"
    },
    score() {
        return this.userResponses.filter(function(val) { if (val === "well" ) return val }).length;
    },
    level(){
      if (this.score() <= 2){
        return "A1"
      }
      if (this.score() > 2 && this.score() <= 5 ){
        return "A2"
      }
      if (this.score() > 5 && this.score() <= 8 ){
        return "B1"
      }
      else{
        return "B2"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/TestStyle.css">

</style>
