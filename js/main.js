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

// Terminal Commands
const commands = {
    '67.help': `Available commands:
67.about - Learn about 67
67.mission - Our mission
67.buy - How to buy
67.ca - Contract address
67.why - Why 67?
67.meme - Get a random 67 meme
67.price - Check current vibes
clear - Clear terminal`,
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
Status: EARLY`
};

// Terminal Input Handler
document.getElementById('terminalInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        const output = document.getElementById('terminalOutput');
        
        output.innerHTML += `<div class="command">> ${this.value}</div>`;
        
        if (input === 'clear') {
            output.innerHTML = '';
        } else if (commands[input]) {
            const response = typeof commands[input] === 'function' ? commands[input]() : commands[input];
            output.innerHTML += `<div class="response">${response.replace(/\n/g, '<br>')}</div>`;
        } else if (input) {
            output.innerHTML += `<div class="response">Command not found. Type "67.help" for available commands.</div>`;
        }
        
        this.value = '';
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
