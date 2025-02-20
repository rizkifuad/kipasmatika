<script lang="ts">
  import "../app.css";
  let num1 = 0;
  let num2 = 0;
  function init() {
    num1 = Math.floor(Math.random() * 5) + 1;
    num2 = Math.floor(Math.random() * 5) + 1;
    const rightAnswerIndex = Math.floor(Math.random() * 3);
    let choices = [];
    for (let i = 0; i < 3; i++) {
      if (i === rightAnswerIndex) {
        choices.push(num1 + num2);
      } else {
        choices.push(generateWrongChoice(num1 + num2));
      }
    }
    return choices;
  }

  function generateWrongChoice(rightAnswer: number) {
    let wrongAnswer = Math.floor(Math.random() * 10) + 1;
    if (wrongAnswer === rightAnswer) {
      return generateWrongChoice(rightAnswer);
    }
    return wrongAnswer;
  }

  let choices = init();
  let isAnswerCorrect: boolean | null = null;
  function handleAnswer(answer: number) {
    if (answer === num1 + num2) {
      isAnswerCorrect = true;

      let yay = document.getElementById("yay-audio") as HTMLAudioElement;
      yay?.play();
    } else {
      isAnswerCorrect = false;
    }
    choices = init();
    setTimeout(() => {
      isAnswerCorrect = null;
    }, 4000);
  }
</script>

<audio id="yay-audio" src="yay.mp3" preload="auto"></audio>

{#if isAnswerCorrect === true}
  <div class="absolute w-full h-full bg-green-500 justify-center flex">
    <svg
      width="800"
      height="800"
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Define Balloon Group with Color Variants -->
      <defs>
        <g id="balloon-red">
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="40"
            fill="red"
            stroke="black"
            stroke-width="2"
          />
          <ellipse
            cx="10"
            cy="-10"
            rx="10"
            ry="15"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0 40 Q-5 70 0 100 Q5 130 0 160"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </g>
        <g id="balloon-blue">
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="40"
            fill="blue"
            stroke="black"
            stroke-width="2"
          />
          <ellipse
            cx="10"
            cy="-10"
            rx="10"
            ry="15"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0 40 Q-5 70 0 100 Q5 130 0 160"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </g>
        <g id="balloon-green">
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="40"
            fill="green"
            stroke="black"
            stroke-width="2"
          />
          <ellipse
            cx="10"
            cy="-10"
            rx="10"
            ry="15"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0 40 Q-5 70 0 100 Q5 130 0 160"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </g>
        <g id="balloon-yellow">
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="40"
            fill="yellow"
            stroke="black"
            stroke-width="2"
          />
          <ellipse
            cx="10"
            cy="-10"
            rx="10"
            ry="15"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0 40 Q-5 70 0 100 Q5 130 0 160"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </g>
        <g id="balloon-purple">
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="40"
            fill="purple"
            stroke="black"
            stroke-width="2"
          />
          <ellipse
            cx="10"
            cy="-10"
            rx="10"
            ry="15"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0 40 Q-5 70 0 100 Q5 130 0 160"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </g>
      </defs>

      <!-- Balloons Floating Up -->
      <use href="#balloon-red" x="50" y="300">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-500"
          dur="4s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#balloon-blue" x="120" y="350">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-500"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#balloon-green" x="200" y="320">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-500"
          dur="3s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#balloon-yellow" x="260" y="370">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-500"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#balloon-purple" x="30" y="380">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-500"
          dur="4.2s"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  </div>
{:else if isAnswerCorrect === false}
  <div class="absolute w-full h-full bg-red-500"></div>
{/if}

<div class="flex gap-1 pt-20 justify-center">
  {#each { length: num1 } as _, i}
    <img class="w-[100px]" src="img-1.svg" alt="kipasmatika" />
  {/each}
</div>

<div class="text-[50px] text-center">+</div>

<div class="flex gap-1 justify-center">
  {#each { length: num2 } as _, i}
    <img class="w-[100px]" src="img-1.svg" alt="kipasmatika" />
  {/each}
</div>

<div class="flex justify-center mt-20 text-[100px]">{num1} + {num2} =</div>
<div class="flex justify-center mt-20 gap-2">
  {#each choices as choice, i}
    <button
      class="border-2 py-4 px-20 border-black bg-purple-400 text-[100px] cursor-pointer hover:bg-purple-300"
      on:click={() => handleAnswer(choice)}>{choice}</button
    >
  {/each}
</div>
