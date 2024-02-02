import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export interface ImageViewerProps {
  selectedImage?: ImageSourcePropType,
  placeholderImageSource?: ImageSourcePropType
}

export default function ImageViewer({ 
  selectedImage,
  placeholderImageSource
}: ImageViewerProps) {
  return (
    <Image source={selectedImage ?? placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});