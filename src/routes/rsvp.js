import Headline from '../components/Headline';
import Navigation from '../components/Navigation';

export default function Rsvp() {
  const title = 'RSVP';
  const subhead = `Please let us know if you'll be able to join us`;

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
    </div>
  );
}
