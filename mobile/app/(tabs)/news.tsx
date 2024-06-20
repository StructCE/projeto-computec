import AdminNewsPage from '@/src/components/Admin/AdminNewsPage';
import { View, XStack } from 'tamagui';

const post1 = {
  images: [
    'https://conteudo.imguol.com.br/c/noticias/1f/2022/01/21/hacker-usando-um-laptop-1642786034169_v2_4x3.jpg',
    'https://ravel.com.br/blog/wp-content/uploads/2022/08/Hackers-do-dia-a-dia-Capa.jpg',
    'https://static.vecteezy.com/ti/vetor-gratis/p3/25463773-hacker-logotipo-projeto-uma-misterioso-e-perigoso-hacker-ilustracao-vetor.jpg',
    'https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg',
  ],
  title: 'Evento hackerman cancelado!',
  subtitle: 'Está programação foi cancelada por problemas técnicos',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  date: new Date(2024, 5, 20, 15, 30, 0, 0), // Ano, Mes, Dia, Hora, Min, Seg, Miliseg (O mês vai de 0 a 11, ex: 5 representa Junho)
  local: 'BSAS',
  posted: '31/05',
};

export default function News() {
  return <AdminNewsPage />;
}
