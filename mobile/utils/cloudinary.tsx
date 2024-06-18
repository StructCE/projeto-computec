import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native" 


const cld = new Cloudinary({cloud: {cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_NAME }});

/** Ex: style={{width: 200, height: 200, alignSelf: 'center'}} */
export default function CloudImage(
  {public_id, style}:
  {public_id: string, style?: Record<string, any>}
) {
  return (
    <AdvancedImage cldImg={cld.image(public_id)}  style={style}/>
  )
}