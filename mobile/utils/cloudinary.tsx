import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage as MobileCloudinaryImage,
  upload,
} from "cloudinary-react-native";
import { AdvancedImage as WebCloudinaryImage } from "@cloudinary/react";
import { Platform } from "react-native";

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_NAME,
    apiKey: process.env.EXPO_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.EXPO_PUBLIC_CLOUDINARY_SECRET_KEY,
  },
});

export default function CloudImage({ cloudImage }: { cloudImage: any }) {
  if (Platform.OS !== "web") {
    return <MobileCloudinaryImage cldImg={cloudImage} />;
  }
  return <WebCloudinaryImage cldImg={cloudImage} />;
}

// export async function uploadImages({
//   files,
// }: {
//   files: { uri: string; name: string }[];
// }) {
//   let uploadedImagesID: string[] = [];
//   await Promise.all(
//     files.map(async (file) => {
//       try {
//         await upload(cld, {
//           file: file.uri,
//           options: {
//             public_id: file.name.split(".")[0],
//           },
//         });
//         uploadedImagesID.push(file.name.split(".")[0]);
//       } catch (error) {
//         alert("Upload de imagem falhou");
//         console.log(error);
//       }
//     })
//   );
//   return uploadedImagesID;
// }
