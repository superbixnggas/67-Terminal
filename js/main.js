// 67 Landing Page JavaScript

// Custom Cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(updateCursor);
}
updateCursor();

// Page Navigation
function answerYes() {
    const questionPage = document.getElementById('questionPage');
    const mainPage = document.getElementById('mainPage');
    
    questionPage.style.opacity = '0';
    
    setTimeout(() => {
        questionPage.classList.add('hidden');
        questionPage.classList.remove('active');
        
        mainPage.classList.remove('hidden');
        setTimeout(() => {
            mainPage.classList.add('active');
        }, 50);
    }, 500);
}

function answerNo() {
    const buttons = document.querySelector('.answer-buttons');
    buttons.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        buttons.style.animation = '';
        alert('Wrong answer! The only correct answer is YES!');
    }, 500);
}

// Button Functions
function copyContract() {
    const contractAddress = 'TBA_CONTRACT_ADDRESS';
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(() => {
        alert('Contract Address: ' + contractAddress);
    });
}

function focusTerminal() {
    document.querySelector('.inline-terminal').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById('terminalInput').focus();
    }, 500);
}

function viewChart() {
    window.open('https://dexscreener.com', '_blank');
}

// Typing Animation Function
function typeText(element, text, speed = 15) {
    return new Promise((resolve) => {
        let i = 0;
        const lines = text.split('\n');
        let currentLine = 0;
        let currentChar = 0;
        
        function type() {
            if (currentLine < lines.length) {
                if (currentChar < lines[currentLine].length) {
                    element.innerHTML += lines[currentLine][currentChar] === ' ' ? '&nbsp;' : lines[currentLine][currentChar];
                    currentChar++;
                    setTimeout(type, speed);
                } else {
                    element.innerHTML += '<br>';
                    currentLine++;
                    currentChar = 0;
                    setTimeout(type, speed);
                }
            } else {
                resolve();
            }
        }
        type();
    });
}

// Terminal Commands
const commands = {
    '67.help': `Available commands:
67.about    - Learn about 67
67.mission  - Our mission
67.buy      - How to buy
67.ca       - Contract address
67.why      - Why 67?
67.meme     - Get a random 67 meme
67.price    - Check current vibes
67.whale    - The whale watches
67.lore     - The forbidden knowledge
67.fortune  - Receive your alpha
67.progress - Project status
67.signal   - The ritual scan
clear       - Clear terminal`,

    '67.about': `67 is 67.
nothing more.
nothing less.`,

    '67.mission': `Our mission is simple:
To the moon. No stops. No brakes.
67 or nothing.`,

    '67.buy': `if you know, you know.
if you don't, you will.`,

    '67.ca': `Contract Address:
TBA_CONTRACT_ADDRESS
(Copy with COPY CONTRACT button)`,

    '67.why': `66 was close.
68 was late.
67 was inevitable.`,

    '67.meme': () => {
        const memes = [
            '67',
            'six seven',
            'iykyk',
            'they laughed. then they asked.',
            '67 is not a number. it\'s a feeling.',
            'you either get it or you don\'t.',
            'no explanation needed.',
            'some things just are.',
            '67 was here.',
            'the vibe is the utility.'
        ];
        return memes[Math.floor(Math.random() * memes.length)];
    },

    '67.price': `Current vibes: BULLISH
Sentiment: TO THE MOON
Status: EARLY`,

    '67.whale': {
        typed: true,
        content: `
       ~~~~~
      ><_____>

  it sees.
  it waits.
`
    },

    '67.lore': {
        typed: true,
        content: `
  before there was 67,
  there was silence.

  then someone typed it.
  and it stayed.

  no one knows why.
  no one asks anymore.
`
    },

    '67.fortune': () => {
        const fortunes = [
            'maybe.',
            'not yet.',
            'soon.',
            'ask again.',
            'the answer is 67.',
            'you already know.',
            'trust the wait.',
            'silence.',
            'yes, but also no.',
            'it depends on you.'
        ];
        return fortunes[Math.floor(Math.random() * fortunes.length)];
    },

    '67.progress': {
        typed: true,
        content: `
  vibes
  [█████████████████████████████░] 99%

  ...
`
    },

    '67.signal': {
        special: 'signal'
    }
};

// Signal Command Handler
async function executeSignalCommand(output) {
    const scanMessages = [
        'Scanning liquidity...',
        'Tracking volume...',
        'Listening to the Whale...'
    ];
    
    const whaleArt = [
        "       __..---'''''---..__",
        "  _.-'   the whale waits     '-._",
        " <_____.-''                 ''-.__>"
    ];
    
    // Create response container
    const responseDiv = document.createElement('div');
    responseDiv.className = 'response signal-response';
    output.appendChild(responseDiv);
    
    // Sequential scan messages with delay
    for (const msg of scanMessages) {
        const line = document.createElement('div');
        line.className = 'signal-scan-line';
        line.textContent = msg;
        responseDiv.appendChild(line);
        output.scrollTop = output.scrollHeight;
        await new Promise(r => setTimeout(r, 400));
    }
    
    await new Promise(r => setTimeout(r, 300));
    
    // Create whale container
    const whaleContainer = document.createElement('div');
    whaleContainer.className = 'signal-whale';
    responseDiv.appendChild(whaleContainer);
    
    // Render whale ASCII line by line
    for (const line of whaleArt) {
        const whaleLine = document.createElement('div');
        whaleLine.textContent = line;
        whaleContainer.appendChild(whaleLine);
        output.scrollTop = output.scrollHeight;
        await new Promise(r => setTimeout(r, 200));
    }
    
    // Apply pulse animation
    whaleContainer.classList.add('signal-pulse');
    
    // Trigger chart pulse
    pulseChart();
    
    output.scrollTop = output.scrollHeight;
}

// Chart Pulse Effect
function pulseChart() {
    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer) {
        chartContainer.classList.add('chart-pulse');
        setTimeout(() => {
            chartContainer.classList.remove('chart-pulse');
        }, 1500);
    }
}

// Terminal Input Handler
let isTyping = false;

document.getElementById('terminalInput').addEventListener('keypress', async function(e) {
    if (e.key === 'Enter' && !isTyping) {
        const inputValue = this.value.trim();
        const input = inputValue.toLowerCase();
        const output = document.getElementById('terminalOutput');
        
        output.innerHTML += `<div class="command">> ${inputValue}</div>`;
        this.value = '';
        
        if (input === 'clear') {
            output.innerHTML = '';
        } else if (input === 'help') {
            // Alias for 67.help
            const response = commands['67.help'];
            output.innerHTML += `<div class="response">${response.replace(/\n/g, '<br>')}</div>`;
        } else if (commands[input]) {
            const cmd = commands[input];
            
            // Special signal command
            if (cmd.special === 'signal') {
                isTyping = true;
                await executeSignalCommand(output);
                isTyping = false;
            } else if (typeof cmd === 'function') {
                // Function command (like 67.meme, 67.fortune)
                const response = cmd();
                if (typeof response === 'object' && response.typed) {
                    isTyping = true;
                    const responseDiv = document.createElement('div');
                    responseDiv.className = 'response typed-response';
                    output.appendChild(responseDiv);
                    await typeText(responseDiv, response.content, 8);
                    isTyping = false;
                } else {
                    output.innerHTML += `<div class="response">${response.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>`;
                }
            } else if (typeof cmd === 'object' && cmd.typed) {
                // Typed command with animation
                isTyping = true;
                const responseDiv = document.createElement('div');
                responseDiv.className = 'response typed-response';
                output.appendChild(responseDiv);
                await typeText(responseDiv, cmd.content, 8);
                isTyping = false;
            } else {
                // Regular string command
                output.innerHTML += `<div class="response">${cmd.replace(/\n/g, '<br>')}</div>`;
            }
        } else if (input) {
            output.innerHTML += `<div class="response">Command not recognized. Type 'help'.</div>`;
        }
        
        output.scrollTop = output.scrollHeight;
    }
});

// Easter Egg: Type "67" to activate
let typedCode = '';
document.addEventListener('keypress', (e) => {
    typedCode += e.key;
    typedCode = typedCode.slice(-2);
    
    if (typedCode === '67') {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
        alert('>> 67 MODE ACTIVATED!');
    }
});

// Matrix Rain Background
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.opacity = '0.03';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '0';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '0167';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#fff';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
