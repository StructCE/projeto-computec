import CloudImage from '@/utils/cloudinary';
import { Trash2 } from 'lucide-react-native';
import { Dimensions } from 'react-native';
import { Button, View } from 'tamagui';

const { width, height } = Dimensions.get('window');

export default function RemoveImageCard({ image }: { image: string }) {
  return (
    <View style={{ flex: 1, alignSelf: 'center', position: 'relative' }}>
      <CloudImage
        key={image}
        public_id={image}
        style={{
          borderRadius: 8,
          overflow: 'hidden',
          width: width - 48,
          height: 100,
        }}
      />
      <Button
        icon={Trash2}
        size={40}
        style={{
          width: 40,
          color: 'red',
          bottom: 8,
          right: 8,
          position: 'absolute',
        }}
        onPress={() => {
          /* Código para remover a imagem */
        }}
      ></Button>
    </View>
  );
}
