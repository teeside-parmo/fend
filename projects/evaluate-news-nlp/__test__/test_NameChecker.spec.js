// Import the js file to test
import { handleFetch } from "../src/client/js/formHandler"

// Mock the necessary functions and objects
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        score_tag: 'positive',
        subjectivity: 'subjective'
      })
  })
);

global.document = {
    getElementById : jest.fn(() => ({
        innerHTML: ''
}))
};
  

describe('handleFetch', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('should fetch data and update the HTML elements', async () => {
      await handleFetch();
  
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:8081/test');
    
    });
  });