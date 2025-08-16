// Survey Application JavaScript
class SafetySurveyApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.surveyQuestions = [
            {
                question: "Have all workers completed their safety orientation for today?",
                type: "yesno"
            },
            {
                question: "Are all personal protective equipment (PPE) items in good condition and being worn properly?",
                type: "yesno"
            },
            {
                question: "Are all tools and equipment in safe working condition?",
                type: "yesno"
            },
            {
                question: "Are there any visible safety hazards on the construction site?",
                type: "yesno"
            },
            {
                question: "Describe any safety incidents or near-misses that occurred today:",
                type: "text"
            }
        ];

        this.initializeApp();
    }

    initializeApp() {
        this.updateDateTime();
        this.setupEventListeners();
        this.startDateTimeUpdate();
    }

    updateDateTime() {
        const now = new Date();
        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');
        
        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }

    startDateTimeUpdate() {
        setInterval(() => {
            this.updateDateTime();
        }, 1000);
    }

    setupEventListeners() {
        // Welcome screen
        document.getElementById('start-survey-btn')?.addEventListener('click', () => {
            this.showScreen('survey-screen');
            this.loadQuestion();
        });

        // Survey navigation
        document.getElementById('prev-btn')?.addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn')?.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectAnswer(e.target.closest('.answer-btn').dataset.answer);
            });
        });

        // Text input submission
        document.getElementById('submit-text-btn')?.addEventListener('click', () => {
            this.submitTextAnswer();
        });

        // Review screen
        document.getElementById('edit-responses-btn')?.addEventListener('click', () => {
            this.showScreen('survey-screen');
            this.loadQuestion();
        });

        document.getElementById('submit-survey-btn')?.addEventListener('click', () => {
            this.submitSurvey();
        });

        // Success screen
        document.getElementById('new-survey-btn')?.addEventListener('click', () => {
            this.resetSurvey();
        });

        document.getElementById('download-report-btn')?.addEventListener('click', () => {
            this.downloadReport();
        });

        // Enter key for text input
        document.getElementById('text-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.submitTextAnswer();
            }
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId)?.classList.add('active');
    }

    loadQuestion() {
        const question = this.surveyQuestions[this.currentQuestionIndex];
        const questionText = document.getElementById('question-text');
        const yesNoAnswers = document.getElementById('yes-no-answers');
        const textAnswer = document.getElementById('text-answer');
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (questionText) {
            questionText.textContent = question.question;
        }

        // Show/hide answer types
        if (question.type === 'yesno') {
            yesNoAnswers?.classList.remove('hidden');
            textAnswer?.classList.add('hidden');
        } else {
            yesNoAnswers?.classList.add('hidden');
            textAnswer?.classList.remove('hidden');
            document.getElementById('text-input').value = '';
        }

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.surveyQuestions.length) * 100;
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        if (progressText) {
            progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.surveyQuestions.length}`;
        }

        // Update navigation buttons
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = !this.responses[this.currentQuestionIndex];
        }

        // Highlight selected answer if exists
        this.highlightSelectedAnswer();
    }

    selectAnswer(answer) {
        // Remove previous selections
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Select new answer
        event.target.closest('.answer-btn').classList.add('selected');

        // Store response
        this.responses[this.currentQuestionIndex] = answer;

        // Enable next button
        document.getElementById('next-btn').disabled = false;
    }

    submitTextAnswer() {
        const textInput = document.getElementById('text-input');
        const answer = textInput.value.trim();

        if (answer) {
            this.responses[this.currentQuestionIndex] = answer;
            document.getElementById('next-btn').disabled = false;
            this.nextQuestion();
        } else {
            // Show error or highlight empty field
            textInput.style.borderColor = '#dc3545';
            setTimeout(() => {
                textInput.style.borderColor = '#e0e0e0';
            }, 2000);
        }
    }

    highlightSelectedAnswer() {
        const currentResponse = this.responses[this.currentQuestionIndex];
        if (currentResponse) {
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.dataset.answer === currentResponse) {
                    btn.classList.add('selected');
                }
            });
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.surveyQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            this.showReviewScreen();
        }
    }

    showReviewScreen() {
        this.showScreen('review-screen');
        this.populateReviewScreen();
    }

    populateReviewScreen() {
        const responsesList = document.getElementById('responses-list');
        if (!responsesList) return;

        responsesList.innerHTML = '';

        this.responses.forEach((response, index) => {
            const question = this.surveyQuestions[index];
            const responseItem = document.createElement('div');
            responseItem.className = 'response-item';
            responseItem.innerHTML = `
                <div class="response-question">Q${index + 1}. ${question.question}</div>
                <div class="response-answer">A: ${response}</div>
            `;
            responsesList.appendChild(responseItem);
        });
    }

    async submitSurvey() {
        this.showLoading(true);

        try {
            // Create survey data
            const surveyData = {
                title: "Daily Safety and Security Survey",
                date: new Date().toISOString(),
                responses: this.responses.map((response, index) => ({
                    questionNumber: index + 1,
                    question: this.surveyQuestions[index].question,
                    answer: response
                }))
            };

            // Generate report content
            const reportContent = this.generateReportContent(surveyData);

            // Create and download the report
            const fileName = `Daily_Safety_and_Security_Survey_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
            this.downloadTextFile(reportContent, fileName);

            // Show success screen
            this.showSuccessScreen(fileName);

        } catch (error) {
            console.error('Error submitting survey:', error);
            alert('There was an error submitting the survey. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    generateReportContent(surveyData) {
        const now = new Date();
        const lines = [
            "=".padEnd(60, '='),
            `           ${surveyData.title}`,
            "=".padEnd(60, '='),
            "",
            `Survey Date: ${now.toLocaleDateString()}`,
            `Survey Time: ${now.toLocaleTimeString()}`,
            "",
            "".padEnd(60, '-'),
            ""
        ];

        surveyData.responses.forEach(response => {
            lines.push(`Q${response.questionNumber}. ${response.question}`);
            lines.push(`A: ${response.answer}`);
            lines.push("");
        });

        lines.push("".padEnd(60, '-'));
        lines.push(`Report generated on: ${now.toLocaleString()}`);
        lines.push("=".padEnd(60, '='));

        return lines.join('\n');
    }

    downloadTextFile(content, filename) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    showSuccessScreen(fileName) {
        this.showScreen('success-screen');
        
        // Update success screen details
        const reportPath = document.getElementById('report-path');
        const completionTime = document.getElementById('completion-time');
        
        if (reportPath) {
            reportPath.textContent = fileName;
        }
        
        if (completionTime) {
            completionTime.textContent = new Date().toLocaleString();
        }
    }

    resetSurvey() {
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.showScreen('welcome-screen');
    }

    downloadReport() {
        // This would typically download the saved report
        // For now, we'll regenerate and download
        const surveyData = {
            title: "Daily Safety and Security Survey",
            date: new Date().toISOString(),
            responses: this.responses.map((response, index) => ({
                questionNumber: index + 1,
                question: this.surveyQuestions[index].question,
                answer: response
            }))
        };

        const reportContent = this.generateReportContent(surveyData);
        const fileName = `Daily_Safety_and_Security_Survey_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
        this.downloadTextFile(reportContent, fileName);
    }

    showLoading(show) {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            if (show) {
                loadingOverlay.classList.remove('hidden');
            } else {
                loadingOverlay.classList.add('hidden');
            }
        }
    }

    // Method to integrate with C# backend (if needed)
    async sendToBackend(surveyData) {
        try {
            const response = await fetch('/api/survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(surveyData)
            });

            if (!response.ok) {
                throw new Error('Failed to send survey data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error sending to backend:', error);
            throw error;
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SafetySurveyApp();
});

// Add some utility functions for better UX
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;

    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(135deg, #ffc107, #e0a800)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
