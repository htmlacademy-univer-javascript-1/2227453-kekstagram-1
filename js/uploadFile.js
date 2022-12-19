const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreview = document.querySelectorAll('.effects__preview');

export const uploadFile = (file) => {
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const url = URL.createObjectURL(file);
    imagePreview.src = url;
    for (const effect of effectsPreview) {
      effect.style.backgroundImage = `url(${url})`;
    }
  }
};
