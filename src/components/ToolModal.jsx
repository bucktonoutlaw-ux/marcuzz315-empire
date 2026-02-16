import React, { useState } from 'react';
import './ToolModal.css';

const ToolModal = ({ tool, onClose }) => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = () => {
        if (!inputText.trim()) {
            setOutputText("Please enter some text.");
            return;
        }
        
        setIsLoading(true);
        setOutputText("Generating...");

        // This is where you would call a real AI API (e.g., Anthropic, Gemini).
        // Per the plan, this should use the built-in Anthropic API.
        // For now, we use simple placeholder functions.
        setTimeout(() => {
           const result = runPlaceholderAI(tool.id, inputText);
           setOutputText(result);
           setIsLoading(false);
        }, 800);
    };

    const runPlaceholderAI = (toolId, text) => {
        // --- AI LOGIC PLACEHOLDERS --- //
        // Replace these with actual API calls.
        const firstSentence = text.split('.')[0] || text;
        switch (toolId) {
            case 'rewrite':
                return `(Rewritten): Your original text, but phrased differently. For example, instead of '${firstSentence}', we could say something similar with new words.`;
            case 'fix_email':
                return `(Email Fixed): Your email has been corrected for grammar and spelling mistakes. All typos are gone and the tone is professional.

Original first sentence: "${firstSentence}"`;
            case 'tweet_ideas':
                return `(Tweet Ideas):
1. "What if ${text} was the new big thing? 🚀"
2. "Unpopular opinion: ${text} is overrated. Here's why..."
3. "Just discovered how ${text} can change everything. #MindBlown"`;
            case 'tone_changer':
                return `(Formal Tone): Esteemed colleagues, regarding the matter of "${text}", it is my considered opinion that we must proceed with due diligence.

(Casual Tone): Hey team, about that "${text}" thing... I think we should just go for it.`;
            case 'summarizer':
                return `(Summary): The main point of your text is about "${firstSentence}". It further discusses several related ideas and concludes with a call to action.`;
            case 'keywords':
                return `(Keywords): ${text.split(' ').slice(0, 5).join(', ')}, AI, productivity, automation`;
            default:
                return `(Generated Content): Based on your input of "${text}", here is a generated result for the "${tool.name}" tool. This is a placeholder for a real AI response.`;
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="tool-interface">
                    <h2>{tool.name}</h2>
                    <p>{tool.desc}</p>
                    <textarea 
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        placeholder="Enter your text here..."
                    />
                    <button onClick={handleGenerate} disabled={isLoading}>
                        {isLoading ? 'Generating...' : 'Generate'}
                    </button>
                    <textarea 
                        value={outputText}
                        readOnly 
                        placeholder="Result will appear here..."
                    />
                </div>
            </div>
        </div>
    );
};

export default ToolModal;
