import './App.css';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '.env';

dotenv.load();
const port = process.env.PORT;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const chatCompletion = await openai.chat.completions.create({
messages: [{ role: "user", content: "Say this is a test" }],
model: "gpt-3.5-turbo",

});
console.log(chatCompletion);
function App() {
  

  return (
    <div className="App">
     <div>
      <h1>
        
      </h1>
     </div>
    </div>
  );
}

export default App;
