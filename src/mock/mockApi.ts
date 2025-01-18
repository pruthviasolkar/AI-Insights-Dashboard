import aiData from '../ai-data.json';

export const fetchAiData = (): Promise<typeof aiData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(aiData), 500); // Simulate delay
  });
};
