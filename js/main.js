// $67 Crypto Landing Page JavaScript

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

    '67.about': `$67 is the next revolution in crypto.
Born from chaos, destined for greatness.
We are the Fartcoin of 2026.`,

    '67.mission': `Our mission is simple:
To the moon. No stops. No brakes.
67 or nothing.`,

    '67.buy': `How to buy $67:
1. Get SOL in your wallet
2. Go to pump.fun
3. Search for $67
4. Swap and hold forever`,

    '67.ca': `Contract Address:
TBA_CONTRACT_ADDRESS
(Copy with COPY CONTRACT button)`,

    '67.why': `Why 67?
Because 68 is too mainstream.
Because 66 wasn't enough.
67 is the perfect number.`,

    '67.meme': () => {
        const memes = [
            '67 > everything else',
            'When in doubt, 67 it out',
            'HODL 67 = financial freedom',
            '67 believers will be rewarded',
            'The revolution starts with 67'
        ];
        return memes[Math.floor(Math.random() * memes.length)];
    },

    '67.price': `Current vibes: BULLISH
Sentiment: TO THE MOON
Status: EARLY`,

    '67.whale': {
        typed: true,
        content: `
                  __   __
               _.-'  '-._'-._
            .-'    _    '-.  '-.
          .'   _.-'  '-._   '.   '.
         /   .'          '.   \\    \\
        /   /    ()  ()    \\   \\    |
       |   |                |   |   |
        \\   \\              /   /   /
         '.  '._ ,    , _.'  .'  .'
           '-._  '----'  _.-'_.-'
               '-......-'

     T H E   W H A L E   W A T C H E S

  "Liquidity moves in silence."
  "The patient ones drink deep."
`
    },

    '67.lore': {
        typed: true,
        content: `
  ┌─────────────────────────────────────┐
  │     T H E   L O R E   O F   6 7     │
  └─────────────────────────────────────┘

  Before charts, before numbers,
  there was only 67.

  It was not created.
  It was discovered.

  In the noise of a thousand tokens,
  67 remained still.

  It does not chase pumps.
  It waits.

  Those who understand, hold.
  Those who hold, ascend.

  This is not financial advice.
  This is prophecy.

  ─────────────────────────────────────
  "The number speaks only to those
   who listen in silence."
`
    },

    '67.fortune': () => {
        const fortunes = [
            '"Patience is the real leverage."',
            '"Exit too early, regret forever."',
            '"Noise fades. Conviction remains."',
            '"The market rewards the still mind."',
            '"Diamond hands are forged in red candles."',
            '"67 chose you. Not the other way around."',
            '"Sell now, cry later. Hold now, smile forever."',
            '"The whale knows. Do you?"',
            '"Fomo is temporary. Regret is eternal."',
            '"In chaos, 67 finds its path."',
            '"Your entry is someone else\'s exit."',
            '"The chart lies. The community speaks truth."'
        ];
        return `
  ┌─────────────────────────────────────┐
  │        6 7   F O R T U N E          │
  └─────────────────────────────────────┘

  ${fortunes[Math.floor(Math.random() * fortunes.length)]}

`;
    },

    '67.progress': {
        typed: true,
        content: `
  ┌─────────────────────────────────────┐
  │      P R O J E C T   S T A T U S    │
  └─────────────────────────────────────┘

  Phase 1: Launch
  [██████████████████████████████] 100%

  Phase 2: Community Building  
  [████████████████████████████░░]  95%

  Phase 3: Partnerships
  [█████████░░░░░░░░░░░░░░░░░░░░░]  30%

  Phase 4: CEX Listings
  [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]   0%

  Phase 5: World Domination
  [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]   0%

  ─────────────────────────────────────
  Status: ON TRACK
  Next Milestone: Phase 3 completion
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

const chars = '0167$';
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
