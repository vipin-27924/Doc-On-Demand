// Disease and Psychological Condition Precautions AI
const diseasePrecautions = {
  // Physical Diseases
  "common cold": [
      "Wash your hands regularly with soap and water.",
      "Avoid close contact with sick people.",
      "Stay hydrated and rest."
  ],
  "flu": [
      "Get vaccinated annually.",
      "Avoid touching your face.",
      "Cover your mouth and nose when coughing or sneezing."
  ],
  "covid-19": [
      "Wear a mask in crowded areas.",
      "Maintain social distancing.",
      "Sanitize your hands frequently.",
      "Get vaccinated and stay updated with booster shots."
  ],
  "diabetes": [
      "Monitor blood sugar levels regularly.",
      "Eat a balanced diet low in sugar and processed foods.",
      "Exercise regularly and avoid sedentary habits."
  ],
  "hypertension": [
      "Reduce salt intake in your diet.",
      "Practice relaxation techniques like meditation or yoga.",
      "Monitor blood pressure regularly."
  ],
  "asthma": [
      "Avoid exposure to allergens like dust and pollen.",
      "Use prescribed inhalers regularly.",
      "Maintain good indoor air quality."
  ],
  "malaria": [
      "Use mosquito nets while sleeping.",
      "Apply mosquito repellent creams or sprays.",
      "Avoid stagnant water around your home."
  ],
  "heart disease": [
      "Maintain a healthy diet rich in fruits and vegetables.",
      "Exercise regularly, but consult your doctor before starting.",
      "Avoid smoking and excessive alcohol consumption."
  ],
  "cancer": [
      "Follow a healthy diet.",
      "Avoid smoking and excessive alcohol consumption.",
      "Get regular check-ups and screenings."
  ],
  "tuberculosis": [
      "Complete TB treatment as prescribed.",
      "Wear a mask in crowded places.",
      "Wash hands frequently."
  ],
  "arthritis": [
      "Exercise regularly.",
      "Maintain a healthy weight.",
      "Consult with your doctor for pain management."
  ],
  "pneumonia": [
      "Get vaccinated against pneumococcal bacteria.",
      "Avoid smoking.",
      "Practice good hygiene."
  ],
  "gastroenteritis": [
      "Wash hands regularly.",
      "Avoid undercooked food.",
      "Drink plenty of fluids to avoid dehydration."
  ],
  "gallstones": [
      "Eat a low-fat diet.",
      "Exercise regularly.",
      "Avoid rapid weight loss."
  ],
  "epilepsy": [
      "Take prescribed medication.",
      "Avoid triggers like flashing lights.",
      "Maintain a consistent sleep schedule."
  ],
  "sickle cell anemia": [
      "Stay hydrated.",
      "Avoid extreme temperatures.",
      "Avoid strenuous physical activity."
  ],
  "stroke": [
      "Maintain a healthy diet.",
      "Exercise regularly.",
      "Keep blood pressure under control."
  ],
  "parkinson's disease": [
      "Take prescribed medications.",
      "Engage in physical therapy.",
      "Stay active mentally and physically."
  ],
  "alzheimer's disease": [
      "Stay mentally active.",
      "Get enough sleep.",
      "Eat a balanced diet."
  ],
  "multiple sclerosis": [
      "Manage stress levels.",
      "Avoid overheating.",
      "Get regular exercise."
  ],
  "shingles": [
      "Get vaccinated.",
      "Avoid scratching the rash.",
      "Keep the rash clean and dry."
  ],
  "cystic fibrosis": [
      "Take prescribed medications.",
      "Use a humidifier.",
      "Avoid exposure to infections."
  ],
  "chronic fatigue syndrome": [
      "Follow a balanced sleep schedule.",
      "Avoid overexertion.",
      "Stay hydrated."
  ],
  "gout": [
      "Avoid foods high in purines.",
      "Stay hydrated.",
      "Limit alcohol consumption."
  ],
  "ulcerative colitis": [
      "Follow prescribed treatment.",
      "Avoid stress.",
      "Eat small meals throughout the day."
  ],
  "crohn's disease": [
      "Take prescribed medications.",
      "Avoid certain trigger foods.",
      "Eat smaller meals."
  ],
  "diarrhea": [
      "Drink plenty of fluids.",
      "Avoid dairy products.",
      "Eat bland foods like bananas and rice."
  ],
  "constipation": [
      "Eat fiber-rich foods.",
      "Drink plenty of water.",
      "Exercise regularly."
  ],
  // Psychological Conditions
  "depression": [
      "Seek professional help for therapy.",
      "Take prescribed antidepressants.",
      "Engage in activities that bring joy."
  ],
  "anxiety disorders": [
      "Practice relaxation techniques.",
      "Take prescribed medications.",
      "Engage in physical activities to reduce stress."
  ],
  "bipolar disorder": [
      "Take prescribed medication.",
      "Keep a regular sleep pattern.",
      "Manage stress effectively."
  ],
  "schizophrenia": [
      "Take prescribed medications.",
      "Seek professional therapy.",
      "Build a strong support system."
  ],
  "panic disorder": [
      "Practice breathing exercises.",
      "Avoid caffeine and alcohol.",
      "Seek therapy if needed."
  ],
  "obsessive-compulsive disorder (OCD)": [
      "Follow prescribed therapy.",
      "Practice mindfulness techniques.",
      "Avoid triggers that increase anxiety."
  ],
  "post-traumatic stress disorder (PTSD)": [
      "Seek professional therapy.",
      "Engage in stress-reducing activities.",
      "Maintain a routine and stay connected to support systems."
  ],
  "eating disorders": [
      "Seek professional counseling.",
      "Maintain a balanced and nutritious diet.",
      "Avoid restrictive diets or behaviors."
  ],
  "borderline personality disorder": [
      "Work with a therapist skilled in DBT (Dialectical Behavior Therapy).",
      "Practice mindfulness techniques.",
      "Build and maintain supportive relationships."
  ],
  "social anxiety": [
      "Practice exposure therapy.",
      "Seek professional therapy.",
      "Build confidence through small social interactions."
  ],
  "attention-deficit/hyperactivity disorder (ADHD)": [
      "Follow a structured routine.",
      "Use medication as prescribed.",
      "Practice time-management techniques."
  ],
  "dissociative identity disorder": [
      "Seek professional therapy for trauma processing.",
      "Work on grounding techniques.",
      "Maintain a stable and supportive environment."
  ],
  "insomnia": [
      "Follow a regular sleep schedule.",
      "Limit screen time before bed.",
      "Create a relaxing bedtime routine."
  ],
  "narcolepsy": [
      "Follow a prescribed sleep schedule.",
      "Take naps during the day if needed.",
      "Avoid stimulants like caffeine in the evening."
  ]
};

// Function to get precautions for a given disease or condition
function getPrecautions(disease) {
  const lowerCaseDisease = disease.toLowerCase();
  const precautions = diseasePrecautions[lowerCaseDisease];
  
  const responseOutput = document.getElementById("response-output");

  if (precautions) {
      responseOutput.innerHTML = `<h3>Precautions for ${disease}:</h3><ul>`;
      precautions.forEach((precaution, index) => {
          responseOutput.innerHTML += `<li>${index + 1}. ${precaution}</li>`;
      });
      responseOutput.innerHTML += "</ul>";
  } else {
      responseOutput.innerHTML = "<p>Sorry, I don't have precautions listed for this disease. Please consult a medical professional.</p>";
  }
}

// Event listener for the "Get Precautions" button
document.querySelector("button").addEventListener("click", () => {
  const diseaseInput = document.getElementById("disease-input").value;
  getPrecautions(diseaseInput);
});
