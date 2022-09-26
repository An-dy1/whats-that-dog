import Navigation from '../components/general/Navigation';
import Headline from '../components/general/Headline';

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
