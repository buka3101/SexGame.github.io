document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn_difficulty');
    const sliders = document.querySelectorAll('.difficulty-slider');
    const confirmButton = document.getElementById('confirm-sliders');
    const timerDisplay = document.getElementById('timer-display');
    const startTimerBtn = document.getElementById('start-timer');
    const resetTimerBtn = document.getElementById('reset-timer');
    
    let timerInterval = null;
    let timerSeconds = 60;
    
    let currentDifficulty = {};
    let totalTasksConfig = {};
    let usedIndices = {};
    let completionStatus = {};

    function initPersonData(person) {
        if (!currentDifficulty[person]) {
            currentDifficulty[person] = 'easy';
        }
        if (!totalTasksConfig[person]) {
            totalTasksConfig[person] = {
                easy: 10,
                middle: 10,
                hard: 10
            };
        }
        if (!usedIndices[person]) {
            usedIndices[person] = {
                easy: [],
                middle: [],
                hard: []
            };
        }
        if (completionStatus[person] === undefined) {
            completionStatus[person] = {
                easy: false,
                middle: false,
                hard: false
            };
        }
    }

    sliders.forEach(slider => {
        const difficulty = slider.getAttribute('data-difficulty');
        const sliderValue = slider.parentElement.querySelector('.slider-value');
        
        sliderValue.textContent = slider.value;
        slider.addEventListener('input', function() {
            sliderValue.textContent = slider.value;
        });
    });

    confirmButton.addEventListener('click', function() {
        sliders.forEach(slider => {
            const difficulty = slider.getAttribute('data-difficulty');
            initPersonData('woman');
            initPersonData('man');
            totalTasksConfig.woman[difficulty] = parseInt(slider.value);
            totalTasksConfig.man[difficulty] = parseInt(slider.value);
            usedIndices.woman[difficulty] = [];
            usedIndices.man[difficulty] = [];
            completionStatus.woman[difficulty] = false;
            completionStatus.man[difficulty] = false;
        });
        
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<h3 style="color: var(--neon-green); font-size: 20px; text-shadow: 0 0 10px var(--neon-green); margin: 0;">Количество заданий подтверждено!</h3>`;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(notification);
            }, 300);
        }, 1500);
    });

    const contentArrays = {
        woman: {
            easy: [
                '1. В течении 1 минуты целуй его шею, оставляй засосы, и гладь его торс и член через одежду',
                '2. Трогай его член через одежду в течении 1 минуты. При этом смотри Егору в глаза',
                '3. Посади Егора на стул, и сядь на него лицом к лицу, целуй и двигай попой по члену на протяжении 1 минуты',
                '4. Медленно, глядя Егору в глаза сними с себя одежду и останься только в трусиках. Если ты уже в одних трусиках, то двигайтесь дальше',
                '5. Цепочкой поцелуев пройдись от его ключиц по шее к губам, страстно поцелуй в губы, сколько считаешь нужным по времени. Егор не имеет права остановиться, только ты',
                '6. Встань раком, и дай ему пошлёпать и поиграть с твоей попой на протяжении 1 минуты',
                '7. Если вы ещё в одежде, то разденетьсь до трусов. Пусть Егор сядет на край кровати, а ты сядь сверху и потрись вагиной о его член на протяжении 1 минуты',
                '8. Пусть Егор выберет место на своём теле (кроме члена), которое ты будешь целовать и ласкать на протяжении 1 минуты',
				'9. Даша покрывает все тело Егора поцелуями',
				'10.  Весь оставшийся вечер называет Егора только "Господин", "Хозяин" и говорит: «еби меня жёстче», «я твоя сучка», «трахни свою шлюху» и т.д.'
            ],
            middle: [
                '1. Ляг на спину, Егор сверху, Он целует твои губы и шею, в это время ты должна водить по его спине ногтями, но не царапать. 1 минута',
                '2. Сними с себя верхнюю часть одежды, так чтобы оголить грудь, подойди к Егору и позволь их ласкать губами и языком. 1 минута',
                '3. Если Егор ещё в трусах, то сними их с него, положи на кровать и изучай его член и массируй на протяжении 1 минуты. В рот брать нельзя, дрочить тоже нельзя',
                '4. Если Вы ещё в трусах, снимите их, пусть Егор ляжет на спину, а ты сядь на него сверху и трись вагиной о член на протяжении 1 минуты',
                '5. Дай Егору пофотографировать тебя голой на телефон. Позы выбирает он. Потом решите, что делать с фотографиями',
                '6. Встань раком перед Егором и раздвинь попу, дай Егору помасировать твою вагину на протяжении 1 минуты',
                '7. Широко открой рот и дай ему вставить член, легко касаясь языком, щеками и губами. Не обхватывай и не соси член, играйся так 1 минуту',
                '8. Встань коленями на стул и прогнись чтобы оголить дырочки. Егор может делать с ними что угодно на протяжении 1 минуты (Трогать, лизать, вставлять член)',
				'9. Встань в коленно-локтевую позу. Егор делает куни сзади. Твоя задача — в течение 1 минуты громко, не стесняясь, стонать и подаваться попой назад ему на язык',
				'10. На голое тело Егора выдави взбитые сливки и слизывай их языком (Можешь нанести на член, яйца, соски), одновременно лаская поцелуями шею, ключицы, и соски, в течение 1 минут',
				'11. Даша медленно раздевает Егора до трусов и обмазывает его мороженным или горячим шоколадом (Можешь нанести на член, яйца, соски), слизывает и ласкает его. По завершению вместе идете в душ',
				'12. Пока Егор делает Даше куни, она говорит как ей приятно, громко стонет, и говорит фразы по типу: «как я хочу чтобы ты меня трахнул», «не останавливайся» и тп',
				'13. Егор говорит Даше какой элемент одежды ей снимать, а она делает это максимально сексуально, так Егор перечисляет, пока она не раз денется полностью, до этого момента трогать друг друга нельзя'
            ],
            hard: [
                '1. Позволь Егору на протяжении 1 минуты снимать как ты сосёшь его член. Что делать с видео, потом решите',
                '2. Сделай минет Егору с кубиком льда во рту на протяжении 1 минуты',
                '3. Позволь ему связать тебя, и делать с тобой что угодно на протяжении 1 минуты',
                '4. Сделайте секс видео, длительностью 1 минуту. Позу выбирает Даша. Что делать с видео, потом решите',
				'5. Води языком по вагине Даши в виде букв, пусть угадает что за слово ты загадал. Делай так, пока не отгадает. Слово минимум 5 букв',
				'6. Даша, ляг на кровать головой вниз и сделай глубокий минет Егору, не вынимай ни разу член изо рта столько, сколько сможешь',
				'7. Сделай минет Егору предварительно наполнив рот горячим напитком (чаем, кофе)',
				'8. Даша завязывает глаза Егору, он садится на диван/кровать/стул, и она начинает ласкать его любимые места, а дальше делает, что захочет (в дальнейшем может тоже завязать глаза)',
                '9. Сделай Егору максимально глубокий и слюнявый минет 2 минуты (Размазывай слюну по лицу, груди)',
				'10. Дрочи Егору член 1 минуту и рассказывай, что ты хочешь чтобы он сделал с тобой, как он тебя трахнул и играл с твоей вагиной и попой',
				'11. Стань игрушкой для Егора на 2 минуту. Ты обязана выполнить всё, что он скажет, без каких либо пререканий и отказов или сопротивлений. Он ставит тебя в любые позы, заставляет делать любые действия и делает с твоим телом, что угодно, независимо от твоего желания',
				'12. Сожми очень сильно член Егору и быстро дрочи, можешь сесть ему на лицо всем весом если хочешь и рассказывай как ты хочешь, чтобы он тебя наказал'
            ]
        },
        man: {
            easy: [
                '1. Даша встаёт к тебе спиной, а ты встань к ней сзади и одной рукой трогай за вагину, другой массируй грудь. Всё через одежду. На задание даётся 1 минута',
                '2. Положи Дашу на кровать, ляг и сверху и целуй руки, шею, щёки, губы',
                '3. Медленно сними с себя и с Даши штаны, останьтесь в трусах. Если вы уже в трусах, то двигайтесь дальше',
                '4. В течении 1 минуты гладь бедра Даши с внутренней стороны и удели особое внимание внутренней части бедер. Если вы ещё в штанах, то снимите их и останьтесь в трусах',
                '5. Встань на против Даши, целуй её и трогай за попу и грудь. Если Даша ещё в одежде, то оставь её в одних трусиках',
                '6. Положи Дашу на кровать животом вниз. Сделай массаж попы и спины на протяжении 1 минуты',
                '7. Пусть Даша выберет место на своём теле (кроме вагины), которое ты будешь целовать и ласкать на протяжении 1 минуты',
                '8. В течении 1 минуты трогай киску Даши через одежду (или через трусики), глядя Даше в глаза',
				'9. Сядь на стул. Даша садится на тебя верхом спиной к тебе. Медленно гладь её спину, плечи и шею, иногда переходя на лёгкие поцелуи в шею сзади. На задание даётся 1 минута',
				'10. Егор покрывает все тело Даши поцелуями'
            ],
            middle: [
                '1. Сними всю одежду с Даши, если она ещё в ней. Целуй её и ласкай грудь с вагиной (можешь вставить пальцами внутрь) на протяжении 1 минуты',
                '2. Оголи член и в течении 1 минуты води членом по Даше (По животу, груди, шее, рукам, губам)',
                '3. Дай Даше пофотографировать тебя голым на твой телефон. Позы выбирает она. Потом решите, что делать с фотографиями',
                '4. Целуй и массируй грудь Даши, оставляя легкие засосы и укусы на протяжении 1 минуты. Другой рукой войди внутрь вагины',
                '5. Пусть Даша возьмёт твою руку и ласкает свою вагину, так как она считает нужным на протяжении 1 минуты. В это время ты должен её целовать (куда угодно)',
                '6. Уложи Дашу на кровать, пусть она раздвинет ноги и согнёт в коленях, а ты води членом по её вагине на протяжении 1 минуты и можешь иногда вставлять только головку',
                '7. Пусть Даша сядет тебе на лицо и на протяжении 1 минуты водит по нему своей вагиной, она должна двигаться сама, ты только помогаешь языком',
                '8. Положи Дашу на свои колени попой к верху и хорошо отшлёпай и дрочи её вагину на протяжении 1 минуты',
				'9. Встань сзади, одной рукой прижимай Дашу к себе за талию, а другой рукой массируй её клитор. В это время целуй её и говори ей на ухо комплименты. 1 минута',
                '10. На голое тело Даши выдави взбитые сливки и слизывай их языком (Можешь нанести на вагину, попу, живот, грудь), одновременно лаская поцелуями шею, ключицы, и соски, в течение 1 минут',
				'11. Егор медленно раздевает Дашу до трусов и обмазывает ее мороженным или горячим шоколадом (Можешь нанести на вагину, попу, живот, грудь), слизывает и ласкает ее. По завершению вместе идете в душ',
				'12. Пока Даша делает Егору минет 1 минуту, он говорит как ему приятно, стонет, говорит фразы по типу «как я хочу тебя трахнуть», «сучка», «бери глубже» и тп',
                '13. Егор дрочит Даше максимально жёстко и быстро и параллельно рассказывает как трахнет её, и как будет играть с её вагиной и попой. 1 минуту',
            ],
            hard: [
                '1. Позволь Даше на протяжении 1 минуты снимать как ты делаешь ей куни. Что делать с видео, потом решите',
                '2. Сделай куни Даше с кубиком льда на протяжении 1 минуты',
                '3. Позволь ей связать тебя, и делать с тобой что угодно на протяжении 1 минуты',
                '4. Сделайте секс видео, длительностью 1 минуту. Позу выбирает Егор. Что делать с видео, потом решите',
                '5. Води языком по вагине Даши в виде букв, пусть угадает что за слово ты загадал. Делай так, пока не отгадает. Слово минимум 5 букв',
				'6. Сделайте видео длительностью 1 минуту, где вы занимаетесь сексом в позе стоя у стены. Ракурс камеры — сбоку',
                '7. Сделай куни Даше предварительно наполнив рот горячим напитком (чаем, кофе)',
				'8. Егор завязывает глаза Даше, она садится на диван/кровать/стул и он начинает ласкать ее любимые места, а дальше делает, что захочет (в дальнейшем может тоже завязать глаза)',
                '9. Если хотите оставьте этот фант на потом. Егор дрочит Даше, а Даша Егору кто первый сдастся или получит оргазм, делает партнеру приятно до тех пор пока другой не разрешит закончить.',
                '10. Пока Даша еще в трусах и стоит в коленно-локтевой, Егор аккуратно отодвигает белье и вставляет только головку, а Даша стонет и умоляет вставить глубже',
				'11. Стань игрушкой для Даши на 2 минуту. Ты обязан выполнить всё, что она скажет, без каких либо пререканий и отказов или сопротивлений. Она ставит тебя в любые позы, заставляет делать любые действия и делает с твоим телом, что угодно, независимо от твоего желания',
                '12. Свяжи крепко Дашу, закрой ей глаза и если хотите уши. И делай что угодно, сочетай мягкие поглаживания и поцелуи с жёстким сексом, шлепками, пощечинами и плевками',
            ]
        }
    };

    function playTimerBell() {
        const bellSound = new Audio('assets/timer-bell.mp3');
        bellSound.play().catch(err => console.log('Audio play error:', err));
    }

    function playTimerBellSequence() {
        let count = 0;
        
        function playNext() {
            if (count < 3) {
                setTimeout(() => {
                    playTimerBell();
                    count++;
                    playNext();
                }, 1000);
            }
        }
        
        playNext();
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        console.log('startTimer called');
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        timerSeconds = 60;
        if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
        
        timerInterval = setInterval(() => {
            console.log('Timer tick:', timerSeconds);
            timerSeconds--;
            if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
            
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                playTimerBellSequence();
            }
        }, 1000);
    }

    function resetTimer() {
        console.log('resetTimer called');
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerSeconds = 60;
        if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
    }

    console.log('startTimerBtn:', startTimerBtn);
    console.log('resetTimerBtn:', resetTimerBtn);
    
    startTimerBtn.addEventListener('click', startTimer);
    resetTimerBtn.addEventListener('click', resetTimer);

    function showNotification(difficulty) {
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        let difficultyText = '';
        if (difficulty === 'easy') difficultyText = 'Легкую';
        else if (difficulty === 'middle') difficultyText = 'Среднюю';
        else if (difficulty === 'hard') difficultyText = 'Сложную';
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<h3 style="color: var(--neon-cyan); font-size: 20px; text-shadow: 0 0 10px var(--neon-cyan); margin: 0;">Переход на ${difficultyText} категорию</h3>`;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(notification);
            }, 300);
        }, 1500);
    }

    let lastDifficulty = {
        woman: 'easy',
        man: 'easy'
    };

    function showNotificationIfChanged(person, newDifficulty) {
        if (lastDifficulty[person] && lastDifficulty[person] !== newDifficulty) {
            showNotification(newDifficulty);
            lastDifficulty[person] = newDifficulty;
        }
    }

    function updateProgress(person) {
        const difficulty = currentDifficulty[person];
        const progressElement = document.getElementById(person + '-progress');
        const difficultyTitle = document.getElementById(person + '-difficulty-title');
        
        if (progressElement && difficultyTitle) {
            let difficultyText = '';
            if (difficulty === 'easy') difficultyText = 'Простое задание';
            else if (difficulty === 'middle') difficultyText = 'Среднее задание';
            else if (difficulty === 'hard') difficultyText = 'Сложное задание';
            
            progressElement.textContent = difficultyText;
            progressElement.style.color = difficulty === 'easy' ? 'var(--neon-cyan)' : (difficulty === 'middle' ? 'var(--neon-purple)' : 'var(--neon-pink)');
            difficultyTitle.textContent = difficultyText;
            
            difficultyTitle.style.textShadow = `0 0 20px ${progressElement.style.color}, 0 0 40px ${progressElement.style.color}`;
            
            showNotificationIfChanged(person, difficulty);
        }
    }

    function showCompletionNotification(person) {
        if (completionStatus[person].hard) return;
        
        completionStatus[person].hard = true;
        
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<h3 style="color: var(--neon-pink); font-size: 20px; text-shadow: 0 0 10px var(--neon-pink); margin: 0;">Задания окончены, перейдите либо к кубику с выбором места окончания, а также выберете позу для секса</h3>`;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(notification);
            }, 300);
        }, 5000);
    }

    function checkAndShowCompletion(person) {
        if (completionStatus[person].easy && completionStatus[person].middle && completionStatus[person].hard) {
            showCompletionNotification(person);
        }
    }

    function getNextText(person) {
        initPersonData(person);
        
        let difficulty = currentDifficulty[person];
        let contentArray = contentArrays[person][difficulty];

        const selector = '.difficulty-section[data-person="' + person + '"]';
        const section = document.querySelector(selector);
        if (!section) return;

        const textElement = document.getElementById(person + '-task');

        let changedDifficulty = false;
        
        while (usedIndices[person][difficulty].length >= totalTasksConfig[person][difficulty] && !completionStatus[person].hard) {
            if (difficulty === 'easy') {
                if (totalTasksConfig[person].middle > 0 && !completionStatus[person].middle) {
                    difficulty = 'middle';
                    usedIndices[person].middle = [];
                    changedDifficulty = true;
                } else if (totalTasksConfig[person].hard > 0 && !completionStatus[person].hard) {
                    difficulty = 'hard';
                    usedIndices[person].hard = [];
                    changedDifficulty = true;
                } else {
                    showCompletionNotification(person);
                    return;
                }
            } else if (difficulty === 'middle') {
                if (totalTasksConfig[person].hard > 0 && !completionStatus[person].hard) {
                    difficulty = 'hard';
                    usedIndices[person].hard = [];
                    changedDifficulty = true;
                } else {
                    showCompletionNotification(person);
                    return;
                }
            } else {
                showCompletionNotification(person);
                return;
            }
            contentArray = contentArrays[person][difficulty];
        }
        
        if (changedDifficulty) {
            currentDifficulty[person] = difficulty;
        }

        if (usedIndices[person][difficulty].length >= contentArray.length) {
            usedIndices[person][difficulty] = [];
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * contentArray.length);
        } while (usedIndices[person][difficulty].includes(randomIndex));

        usedIndices[person][difficulty].push(randomIndex);
        
        if (usedIndices[person][difficulty].length >= contentArray.length) {
            if (difficulty === 'easy') completionStatus[person].easy = true;
            else if (difficulty === 'middle') completionStatus[person].middle = true;
            else if (difficulty === 'hard') completionStatus[person].hard = true;
            
            checkAndShowCompletion(person);
        }

        if (textElement) {
            textElement.textContent = contentArray[randomIndex];
        }

        updateProgress(person);
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (btn.hasAttribute('data-person')) {
                const person = btn.getAttribute('data-person');
                if (person) {
                    getNextText(person);
                }
            }
        });
    });
});
