import Navigation from '../components/general/Navigation';
import Headline from '../components/general/Headline';
import GuessComponent from '../components/user/GuessComponent';

export default function Guess() {
  const title = 'Make your guesses';
  const subhead = 'On this guessing page';

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
      <GuessComponent />
    </div>
  );
}
