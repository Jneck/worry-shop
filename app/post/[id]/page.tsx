import { getLetter } from '@/app/lib/letter/letter.data';
import LetterDetail from '@/app/ui/letter-detail';

export default async function page(props: { params: Promise<{ id: number }> }) {
  const { id } = await props.params;
  const letter = await getLetter(id);
  return <LetterDetail letter={letter}></LetterDetail>;
}
