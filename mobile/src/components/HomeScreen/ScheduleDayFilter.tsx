import { Button, YStack } from 'tamagui';

export default function ScheduleDayFilter() {
  return (
    <>
      <YStack style={{ gap: 4 }}>
        <Button
          style={{
            backgroundColor: '#000021',
            color: '#F2F2F2',
            fontWeight: 'bold',
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Domingo
        </Button>
        <Button
          style={{
            backgroundColor: '#000021',
            color: '#F2F2F2',
            fontWeight: 'bold',
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Segunda
        </Button>
        <Button
          style={{
            backgroundColor: '#000021',
            color: '#F2F2F2',
            fontWeight: 'bold',
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Terça
        </Button>
        <Button
          style={{
            backgroundColor: '#000021',
            color: '#F2F2F2',
            fontWeight: 'bold',
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Quarta
        </Button>
        <Button
          style={{
            backgroundColor: '#000021',
            color: '#F2F2F2',
            fontWeight: 'bold',
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Quinta
        </Button>
      </YStack>
    </>
  );
}
