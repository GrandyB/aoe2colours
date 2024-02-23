import { Metadata } from 'next';
import ColorButtons from '../components/ColorButtons';
 
export const metadata: Metadata = {
  title: 'AoE2 Colours',
}

export default function Home() {
  return (
    <div>
      <ColorButtons />
    </div>
  );
}
