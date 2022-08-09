import Navigation from '../components/Navigation';
import Headline from '../components/Headline';

export default function Guess() {
  const title = 'Donate to the cause';
  const subhead = 'On this donation page';

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
    </div>
  );
}
