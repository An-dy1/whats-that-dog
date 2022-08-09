import Navigation from '../components/Navigation';
import Headline from '../components/Headline';

export default function Guess() {
  const title = 'Make your guesses';
  const subhead = 'On this guessing page';

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
    </div>
  );
}
