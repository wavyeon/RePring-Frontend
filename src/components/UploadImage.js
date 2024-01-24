import { useState } from "react";

export function Preview() {
    const [imageSrc, setImageSrc] = useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }

    return (
      <>
        <input
            accept="image/*" 
            multiple type="file"
            onChange={e => onUpload(e)}
        />
        <img 
            width={'100%'} 
            src={imageSrc}
            alt={'tmp'}
        />
      </>
    )
};
