import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, upload } from "cloudinary-react-native";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_NAME,
    apiKey: process.env.EXPO_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.EXPO_PUBLIC_CLOUDINARY_SECRET_KEY,
  },
});

/** Ex: style={{width: 200, height: 200, alignSelf: 'center'}} */
export default function CloudImage({
  public_id,
  style,
}: {
  public_id: string;
  style?: Record<string, any>;
}) {
  return <AdvancedImage cldImg={cld.image(public_id)} style={style} />;
}

export async function uploadImages({
  files,
}: {
  files: { uri: string; name: string }[];
}) {
  let uploadedImagesID: string[] = [];
  await Promise.all(
    files.map(async (file) => {
      try {
        await upload(cld, {
          file: file.uri,
          options: {
            public_id: file.name.split(".")[0],
          },
        });
        uploadedImagesID.push(file.name.split(".")[0]);
      } catch (error) {
        alert("Upload de imagem falhou");
        console.log(error);
      }
    })
  );
  return uploadedImagesID;
}
