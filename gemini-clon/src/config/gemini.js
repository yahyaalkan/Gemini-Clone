/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from  "@google/generative-ai";
  
  const apiKey = "AIzaSyDEk8x_bBLrmZhy9ocNRXstfZG6mhJvl8o";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,

      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
   
    return response.text();

  
  }
  
 export default run;