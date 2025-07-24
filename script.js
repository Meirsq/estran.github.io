let gameState = {
            score: 0,
            visitedGalleries: new Set(),
            startTime: Date.now(),
            currentGallery: null
        };

        const galleries = {
            charpenterie: {
                name: "Charpenterie Marine",
                icon: "🔨",
                description: "L'art de construire les coques de navires",
                artifacts: [
                    {
                        name: "Coque en Construction",
                        icon: "🚢",
                        description: "Structure d'un bateau de pêche dieppois en cours de construction, montrant les techniques traditionnelles de charpenterie navale.",
                        question: "Quelle technique permet de rendre étanche la coque d'un bateau en bois ?",
                        options: ["Le vernissage", "Le calfatage", "Le ponçage", "La peinture"],
                        correct: 1,
                        explanation: "Le calfatage consiste à boucher les joints entre les planches avec de l'étoupe et du brai pour assurer l'étanchéité."
                    },
                    {
                        name: "Outils de Charpentier",
                        icon: "🪚",
                        description: "Collection d'outils traditionnels utilisés par les charpentiers de marine pour façonner les coques.",
                        question: "Quel bois était traditionnellement privilégié pour les coques des bateaux normands ?",
                        options: ["Pin", "Chêne", "Sapin", "Bouleau"],
                        correct: 1,
                        explanation: "Le chêne était apprécié pour sa résistance, sa durabilité et sa disponibilité dans les forêts normandes."
                    }
                ]
            },
            corderie: {
                name: "Corderie",
                icon: "🪢",
                description: "Fabrication des cordes et maîtrise des nœuds marins",
                artifacts: [
                    {
                        name: "Métier à Cordes",
                        icon: "🧵",
                        description: "Machine traditionnelle utilisée pour fabriquer les cordes nécessaires aux navires, depuis les plus fines aux plus épaisses.",
                        question: "Quelle matière première était principalement utilisée pour fabriquer les cordes marines ?",
                        options: ["Coton", "Chanvre", "Laine", "Soie"],
                        correct: 1,
                        explanation: "Le chanvre était privilégié pour sa résistance à l'eau salée et sa robustesse face aux contraintes marines."
                    },
                    {
                        name: "Nœuds de Marin",
                        icon: "🪢",
                        description: "Démonstration des nœuds essentiels que tout marin doit maîtriser pour la navigation et la manœuvre des voiles.",
                        question: "Quel nœud est considéré comme le plus important en navigation ?",
                        options: ["Nœud de chaise", "Nœud plat", "Nœud simple", "Nœud de cabestan"],
                        correct: 0,
                        explanation: "Le nœud de chaise est surnommé 'le roi des nœuds' car il ne glisse pas et reste facile à défaire même sous tension."
                    }
                ]
            },
            moteur: {
                name: "Moteurs de Bateaux",
                icon: "⚙",
                description: "Évolution de la propulsion navale",
                artifacts: [
                    {
                        name: "Moteur Diesel Marin",
                        icon: "🔧",
                        description: "Moteur diesel robuste conçu pour résister aux conditions marines et propulser efficacement les bateaux de pêche.",
                        question: "Pourquoi les moteurs diesel sont-ils privilégiés sur les bateaux de pêche ?",
                        options: ["Plus rapides", "Plus économiques", "Plus silencieux", "Plus légers"],
                        correct: 1,
                        explanation: "Les moteurs diesel consomment moins de carburant et sont plus fiables pour les longues sorties en mer."
                    },
                    {
                        name: "Hélice de Propulsion",
                        icon: "🌀",
                        description: "Hélice en bronze spécialement conçue pour optimiser la propulsion et résister à la corrosion marine.",
                        question: "Dans quel métal sont généralement fabriquées les hélices marines ?",
                        options: ["Fer", "Aluminium", "Bronze", "Acier"],
                        correct: 2,
                        explanation: "Le bronze résiste parfaitement à la corrosion de l'eau salée et offre d'excellentes performances."
                    }
                ]
            },
            energie: {
                name: "Énergies Marines Renouvelables",
                icon: "🔋",
                description: "L'avenir énergétique de la mer",
                artifacts: [
                    {
                        name: "Éolienne Offshore",
                        icon: "💨",
                        description: "Modèle d'éolienne marine installée au large de Dieppe, captant l'énergie du vent pour produire de l'électricité propre.",
                        question: "Quel est l'avantage principal des éoliennes offshore ?",
                        options: ["Moins chères", "Vents plus réguliers", "Plus faciles à installer", "Moins de maintenance"],
                        correct: 1,
                        explanation: "En mer, les vents sont plus constants et plus forts, permettant une production d'énergie plus régulière."
                    },
                    {
                        name: "Hydrolienne",
                        icon: "🌊",
                        description: "Turbine sous-marine qui exploite l'énergie des courants marins pour produire de l'électricité renouvelable.",
                        question: "Quelle énergie exploitent les hydroliennes ?",
                        options: ["Vagues", "Courants marins", "Marées", "Température"],
                        correct: 1,
                        explanation: "Les hydroliennes utilisent la force des courants marins, comme des éoliennes sous-marines."
                    }
                ]
            },
            navigation: {
                name: "Navigation Maritime",
                icon: "🧭",
                description: "L'art de se diriger en mer",
                artifacts: [
                    {
                        name: "Boussole Marine",
                        icon: "🧭",
                        description: "Instrument de navigation essentiel permettant aux marins de connaître leur cap et de naviguer même par temps couvert.",
                        question: "Vers quelle direction pointe l'aiguille d'une boussole ?",
                        options: ["Nord géographique", "Nord magnétique", "Sud", "Est"],
                        correct: 1,
                        explanation: "L'aiguille d'une boussole pointe vers le nord magnétique, légèrement différent du nord géographique."
                    },
                    {
                        name: "Sextant",
                        icon: "📐",
                        description: "Instrument de mesure des angles permettant de déterminer la position en mer grâce à l'observation des astres.",
                        question: "À quoi sert un sextant en navigation ?",
                        options: ["Mesurer la profondeur", "Déterminer la position", "Prévoir la météo", "Mesurer la vitesse"],
                        correct: 1,
                        explanation: "Le sextant permet de mesurer l'angle entre un astre et l'horizon pour calculer la position géographique."
                    }
                ]
            },
            peche: {
                name: "Pêche Artisanale",
                icon: "🎣",
                description: "Techniques traditionnelles de pêche dans la Manche",
                artifacts: [
                    {
                        name: "Filet de Pêche",
                        icon: "🕸",
                        description: "Filet traditionnel utilisé par les pêcheurs dieppois pour capturer les poissons de la Manche selon des techniques ancestrales.",
                        question: "Quelle espèce de poisson est emblématique de la pêche dieppoise ?",
                        options: ["Sardine", "Sole", "Hareng", "Thon"],
                        correct: 2,
                        explanation: "Le hareng est historiquement le poisson roi de Dieppe, base de l'économie locale pendant des siècles."
                    },
                    {
                        name: "Casier à Crustacés",
                        icon: "🦀",
                        description: "Piège traditionnel utilisé pour capturer les crabes et homards des côtes normandes, respectueux de l'environnement.",
                        question: "À quelle période de l'année pêche-t-on principalement les crabes en Normandie ?",
                        options: ["Été", "Automne", "Hiver", "Printemps"],
                        correct: 0,
                        explanation: "L'été est la saison idéale pour la pêche aux crabes car ils sont plus actifs et leurs chairs plus savoureuses."
                    }
                ]
            },
            salage: {
                name: "Salage des Morues",
                icon: "🧂",
                description: "Conservation traditionnelle du poisson",
                artifacts: [
                    {
                        name: "Morue Salée",
                        icon: "🐟",
                        description: "Technique de conservation ancestrale permettant de conserver la morue pendant de longs mois, base de l'économie dieppoise.",
                        question: "Pourquoi salait-on la morue à Dieppe ?",
                        options: ["Pour le goût", "Pour la conservation", "Pour la couleur", "Pour la texture"],
                        correct: 1,
                        explanation: "Le sel permettait de conserver la morue pendant de longs mois, permettant son transport et sa commercialisation."
                    },
                    {
                        name: "Séchoir à Morue",
                        icon: "🏗",
                        description: "Installation traditionnelle où les morues salées étaient séchées au vent normand avant d'être commercialisées.",
                        question: "D'où venaient principalement les morues traitées à Dieppe ?",
                        options: ["Méditerranée", "Terre-Neuve", "Mer du Nord", "Atlantique Sud"],
                        correct: 1,
                        explanation: "Les pêcheurs dieppois allaient jusqu'à Terre-Neuve pour pêcher la morue, tradition qui a duré des siècles."
                    }
                ]
            },
            aquaculture: {
                name: "Aquaculture",
                icon: "🦪",
                description: "Élevage des produits de la mer",
                artifacts: [
                    {
                        name: "Parc à Huîtres",
                        icon: "🦪",
                        description: "Installation d'élevage d'huîtres en pleine mer, technique moderne qui permet de produire des huîtres de qualité.",
                        question: "Combien de temps faut-il pour élever une huître jusqu'à sa commercialisation ?",
                        options: ["6 mois", "1 an", "2-3 ans", "5 ans"],
                        correct: 2,
                        explanation: "Il faut généralement 2 à 3 ans pour qu'une huître atteigne la taille commerciale selon les conditions d'élevage."
                    },
                    {
                        name: "Élevage de Moules",
                        icon: "🦪",
                        description: "Technique d'élevage sur bouchots, pieux plantés dans l'estran où les moules se développent naturellement.",
                        question: "Sur quoi cultive-t-on traditionnellement les moules ?",
                        options: ["Filets", "Bouchots", "Casiers", "Rochers"],
                        correct: 1,
                        explanation: "Les bouchots sont des pieux de chêne plantés dans l'estran sur lesquels les moules se fixent et grandissent."
                    }
                ]
            },
            dechets: {
                name: "Déchets Marins",
                icon: "♻",
                description: "Protection de l'environnement marin",
                artifacts: [
                    {
                        name: "Plastique en Mer",
                        icon: "🚫",
                        description: "Démonstration de l'impact des déchets plastiques sur l'écosystème marin et les solutions pour les réduire.",
                        question: "Combien de temps met une bouteille plastique à se décomposer en mer ?",
                        options: ["10 ans", "50 ans", "100 ans", "450 ans"],
                        correct: 3,
                        explanation: "Une bouteille plastique peut mettre jusqu'à 450 ans à se décomposer complètement dans l'environnement marin."
                    },
                    {
                        name: "Filets Fantômes",
                        icon: "👻",
                        description: "Filets de pêche perdus ou abandonnés qui continuent de capturer la vie marine, problème majeur des océans.",
                        question: "Que sont les 'filets fantômes' ?",
                        options: ["Filets invisibles", "Filets perdus", "Filets anciens", "Filets transparents"],
                        correct: 1,
                        explanation: "Les filets fantômes sont des filets de pêche perdus qui continuent de piéger les animaux marins."
                    }
                ]
            },
            plancton: {
                name: "Plancton",
                icon: "🦠",
                description: "Vie microscopique des océans",
                artifacts: [
                    {
                        name: "Phytoplancton",
                        icon: "🌱",
                        description: "Micro-organismes végétaux qui flottent dans l'eau et constituent la base de la chaîne alimentaire marine.",
                        question: "Quel pourcentage d'oxygène terrestre est produit par le phytoplancton ?",
                        options: ["20%", "50%", "70%", "90%", "100%"],
                        correct: 2,
                        explanation: "Le phytoplancton produit environ 50% de l'oxygène que nous respirons, jouant un rôle crucial dans l'écosystème terrestre."
                    },
                    {
                        name: "Zooplancton",
                        icon: "🐟",
                        description: "Organismes animaux microscopiques qui se nourrissent de phytoplancton et sont essentiels pour la chaîne alimentaire marine.",
                        question: "Quel rôle joue le zooplancton dans l'écosystème marin ?",
                        options: ["Producteur", "Consommateur primaire", "Consommateur secondaire", "Décomposeur"],
                        correct: 1,
                        explanation: "Le zooplancton est un consommateur primaire qui se nourrit de phytoplancton, formant la base de la chaîne alimentaire marine."
                    }
                ]
            },
            falaises: {
                name: "Falaises & Galets",
                icon: "🏔",
                description: "Érosion et formation du littoral",
                artifacts: [
                    {
                        name: "Falaises de Craie",
                        icon: "🗻",
                        description: "Impressionnantes falaises de craie blanche qui bordent la côte d'Albâtre, témoins de l'érosion marine.",
                        question: "Quelle est la principale roche constituant les falaises de Dieppe ?",
                        options: ["Granit", "Calcaire", "Craie", "Sable"],
                        correct: 2,
                        explanation: "Les falaises de Dieppe sont principalement constituées de craie, formée par la sédimentation marine."
                    },
                    {
                        name: "Galets de la Plage",
                        icon: "🏖",
                        description: "Galets arrondis par l'érosion marine, caractéristiques des plages de Dieppe, formés par le mouvement des vagues.",
                        question: "Comment se forment les galets sur les plages ?",
                        options: ["Érosion des roches", "Action des vagues", "Sédimentation", "Pression"],
                        correct: 1,
                        explanation: "Les galets se forment par l'action des vagues qui arrondissent les roches au fil du temps."
                    }
                ]
            }
        };
        let currentGallery = null;
        let timerInterval = null;
        let startTime = Date.now();
        let score = 0;
        let galleriesVisited = 0;
        const scoreElement = document.getElementById('score');
        const galleriesVisitedElement = document.getElementById('galleries-visited');
        const timerElement = document.getElementById('timer');
        const gallerySelection = document.getElementById('gallery-selection');
        const quizSection = document.getElementById('quiz-section');
        const spaceHeader = document.getElementById('space-header');
        const artifactDisplay = document.getElementById('artifact-display');
        const achievements = document.getElementById('achievements');
        const achievementBadges = document.getElementById('achievement-badges');
        const dieppeInfo = document.querySelector('.dieppe-info');
        const backButton = document.querySelector('.back-button');
        const galleryKeys = Object.keys(galleries);
        const totalGalleries = galleryKeys.length;
        const galleryIcons = {
            charpenterie: "🔨",
            corderie: "🪢",
            moteur: "⚙",
            energie: "🔋",
            navigation: "🧭",
            peche: "🎣",
            salage: "🧂",
            aquaculture: "🦪",
            dechets: "♻",
            plancton: "🦠",
            falaises: "🏔"
        };
        function startTimer() {
            timerInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);
        }
        function enterGallery(galleryId) {
            if (currentGallery) {
                return;
            }
            currentGallery = galleryId;
            gameState.currentGallery = galleryId;
            gallerySelection.style.display = 'none';
            quizSection.style.display = 'block';
            spaceHeader.textContent = `${galleryIcons[galleryId]} ${galleries[galleryId].name}`;
            spaceHeader.style.background = `linear-gradient(135deg, #${Math.floor(Math.random() * 16777215).toString(16)} 0%, #${Math.floor(Math.random() * 16777215).toString(16)} 100%)`;
            artifactDisplay.innerHTML = '';
            galleriesVisited++;
            galleriesVisitedElement.textContent = galleriesVisited;
            scoreElement.textContent = score;

            // Marquer la carte comme visitée
            const btn = document.querySelector(`.gallery-card[onclick="enterGallery('${galleryId}')"]`);
            if (btn) btn.classList.add('visited');

            const artifacts = galleries[galleryId].artifacts;
            artifacts.forEach((artifact, index) => {
                const artifactDiv = document.createElement('div');
                artifactDiv.className = 'artifact';
                artifactDiv.style.animation = `fadeIn 0.7s ease ${index * 0.2}s both`;
                artifactDiv.style.boxShadow = "0 8px 24px rgba(0, 119, 190, 0.08)";
                artifactDiv.style.borderLeft = "7px solid #20bf6b";
                artifactDiv.innerHTML = `
        <div class="artifact-image" style="background: linear-gradient(45deg, #20bf6b, #0fb9b1);">${artifact.icon}</div>
        <h3 style="margin-bottom: 8px;">${artifact.name}</h3>
        <p style="color:#555; margin-bottom: 12px;">${artifact.description}</p>
        <div class="question" style="margin-top:10px;">
            <h4 style="margin-bottom:10px;">${artifact.question}</h4>
            <div class="options">
                ${artifact.options.map((option, i) => `
                    <button class="option" style="margin-bottom:6px;" onclick="selectOption(${index}, ${i})">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
                artifactDisplay.appendChild(artifactDiv);
            });

            if (!timerInterval) {
                startTime = Date.now();
                startTimer();
            }
        }
        function selectOption(artifactIndex, optionIndex) {
            const artifact = galleries[currentGallery].artifacts[artifactIndex];
            // Only disable options for the current question
            const artifactDivs = artifactDisplay.querySelectorAll('.artifact');
            const currentArtifactDiv = artifactDivs[artifactIndex];
            const options = currentArtifactDiv.querySelectorAll('.option');
            options.forEach((option, i) => {
                option.disabled = true;
                if (i === artifact.correct) {
                    option.classList.add('correct');
                } else if (i === optionIndex) {
                    option.classList.add('incorrect');
                }
            });
            if (optionIndex === artifact.correct) {
                score += 10;
                scoreElement.textContent = score;
                showFeedback('correct', artifact.explanation);
            } else {
                showFeedback('incorrect', `Mauvaise réponse. ${artifact.explanation}`);
            }
            if (artifactIndex === galleries[currentGallery].artifacts.length - 1) {
                checkAchievements();
            }
        }
        function showFeedback(type, message) {
            const feedback = document.createElement('div');
            feedback.className = `feedback ${type}`;
            feedback.textContent = message;
            artifactDisplay.appendChild(feedback);
            feedback.style.display = 'block';
            setTimeout(() => {
                feedback.style.display = 'none';
                feedback.remove();
            }, 3000);
        }
        function backToGalleries() {
            currentGallery = null;
            gameState.currentGallery = null;
            gallerySelection.style.display = 'grid';
            quizSection.style.display = 'none';
            artifactDisplay.innerHTML = '';
            spaceHeader.textContent = '';
            if (galleriesVisited === totalGalleries) {
                showAchievements();
            }
        }
        function showAchievements() {
            gallerySelection.style.display = 'none';
            quizSection.style.display = 'none';
            achievements.style.display = 'block';
            achievementBadges.innerHTML = '';

            // Conditions pour chaque badge
            const badges = [];
            if (galleriesVisited === totalGalleries) {
                badges.push({ name: "Explorateur des Mers", description: "A exploré tous les espaces de la Cité de la Mer", icon: "🌊" });
            }
            if (score >= totalGalleries * 10) {
                badges.push({ name: "Maître des Artéfacts", description: "A répondu correctement à toutes les questions", icon: "🏅" });
            }
            if (score >= (totalGalleries * 10) / 2) {
                badges.push({ name: "Gardien de l'Environnement", description: "A pris conscience des enjeux écologiques marins", icon: "🌍" });
            }

            if (badges.length === 0) {
                achievementBadges.innerHTML = "<p>Aucun badge obtenu pour le moment. Essayez d'améliorer votre score !</p>";
            } else {
                badges.forEach(badge => {
                    const badgeDiv = document.createElement('div');
                    badgeDiv.className = 'achievement-badge';
                    badgeDiv.innerHTML = `<span>${badge.icon}</span> <strong>${badge.name}</strong> - ${badge.description}`;
                    achievementBadges.appendChild(badgeDiv);
                });
            }
            achievements.scrollIntoView({ behavior: 'smooth' });
        }
        function checkAchievements() {
            if (galleriesVisited === totalGalleries && score >= 20) {
                showAchievements();
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            dieppeInfo.scrollIntoView({ behavior: 'smooth' });
            if (!timerInterval) {
                startTimer();
            }
        });