// api/extractMetadata.js
export default async function handler(req, res) {
    const { imageUri } = req.body;
    const metadata = await extractMetadataFromImage(imageUri); // Your ML logic here
    res.status(200).json(metadata);
  }
  