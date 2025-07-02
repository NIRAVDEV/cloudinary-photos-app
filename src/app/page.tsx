"use client";

import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <CldUploadButton
        uploadPreset="giomsr4s"
        onUpload={(results) => {
          const publicId =
            results?.info && typeof results.info !== "string"
              ? results.info.public_id
              : null;

          if (publicId) {
            setImageId(publicId);
          } else {
            console.error("Upload failed or public_id not found");
          }
        }}
      />

      {imageId && (
        <div className="mt-6">
          <p>Uploaded Image ID:</p>
          <code>{imageId}</code>
        </div>
      )}
    </main>
  );
}
