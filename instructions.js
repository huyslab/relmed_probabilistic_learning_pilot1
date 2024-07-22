// Instructions for the PLT
const small_coin_size = 70;

function prepare_instructions() {
    const inter_block_instruct = {
        type: jsPsychInstructions,
        css_classes: ['instructions'],
        pages: () => [inter_block_stimulus()],
        show_clickable_nav: true,
        data: {trialphase: "instruction"}
    }

    let inst =  [
        {
        type: jsPsychInstructions,
        css_classes: ['instructions'],
        pages: () => {

            let pages = [];
            if (window.sessionNum > 1){
                pages.push(`<p>Welcome back to the study!</p>\
                    <p>Today you will be playing the card choosing game again</p>
                    <p>Let's start with a reminder of how to play it.</p>`
                );
            }

            pages = pages.concat([
            `<p><b>THE CARD CHOOSING GAME</b></p>
                <p>In this game you are the owner of a safe.</p>
                <img src='imgs/safe.png' style='width:100px; height:100px;'>
                <p>At the start of the game, your safe contains:</p>
                <div style='display: grid'><table><tr><td><img src='imgs/1pound.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td>
                <td><img src='imgs/50pence.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'</td>
                <td><img src='imgs/1penny.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td></tr>
                <tr><td>52x one pound coins</td><td>52x fifty pence coins</td><td>52x one penny coins</td></tr></table></div>
                <p>At the end of the game, you will draw one coin from your safe, and that will be your bonus payment.</p>
                <p>Your goal is to add coins to your safe while avoid losing coins already in it.</p>`,
            `<p>On each turn of this game, you will see two cards.
                You have three seconds to flip one of the two cards.</p>
                <p>This will reveal the coin you collect: either 1 pound, 50 pence, or 1 penny.</p>
                <div style='display: grid;'><table style='width: 200px; grid-column: 2;'><tr>
                <td><img src='imgs/1pound.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td>
                <td><img src='imgs/50pence.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td>
                <td><img src='imgs/1penny.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td></tr></table></div>`,
            `<p>When you flip a card, you might also see broken coins like these:</p>\
                <div style='display: grid;'><table style='width: 200px; grid-column: 2;'><tr>
                <td><img src='imgs/1poundbroken.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td>
                <td><img src='imgs/50pencebroken.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td>
                <td><img src='imgs/1pennybroken.png' style='width:${small_coin_size}px; height:${small_coin_size}px;'></td></tr></table></div>
                <p>This means that such a coin was broken and removed from your safe.</p>`
        ]);
        return pages
    },
        show_clickable_nav: true,
        data: {trialphase: "instruction"}
    }
    ];

    const inst_loop = {
        timeline: inst,
        loop_function: () => false
    }


    const inst_total = [
        inst_loop,
        {
            type: jsPsychHtmlKeyboardResponse,
            css_classes: ['instructions'],
            stimulus: `<p>Great! Let's start playing for real.</p>
            <p>Place your fingers on the left and right arrow keys, and press either one to start playing.</p>`,
            choices: ['arrowright', 'arrowleft'],
            data: {trialphase: "instruction"}
        }
    ]

    return inst_total
} 

function check_quiz_failed() {
    const data = jsPsych.data.get().filter({trialphase: "instruction_quiz"}).last(1).select('response').values[0];
    console.log(data)
    return !Object.values(data).every(value => value === "True");
}

const lottery_instructions = {
    type: jsPsychInstructions,
    css_classes: ['instructions'],
    pages: [
        '<p>You have completed the card choosing game!</p>\
            <p>Next, your bonus payment will be determined.</p>\
            <p>On the next page, you will be presented with a representative sample of the conents \
            your safe. After flipping the cards and shuffling, you will get to chose one card, and reveal the coin that will be paid to you as a bonus.</p> '
    ],
    show_clickable_nav: true,
    data: {trialphase: "lottery_instructions"}
}