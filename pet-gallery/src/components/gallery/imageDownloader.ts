import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const downloadImages = async (imageUrls: string[]): Promise<void> => {
  const zip = new JSZip();

  // adding each image to the zip file for downlaod
  const imagePromises = imageUrls.map(async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob(); // convert response to Blob
    zip.file(`image${index}.jpg`, blob); // adding Blob to zip 
  });

  await Promise.all(imagePromises);

  // make zip file and trigger download
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'images.zip');
  });
};
