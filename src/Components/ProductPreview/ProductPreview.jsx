import { useSelector } from 'react-redux'
import PreviewProductComponent from '../PreviewProductComponent/PreviewProductComponent';

export default function ProductPreview() {
  
  const productPreviewStatus =useSelector((state) => state.productPreview);
  
  return (
    <div className={productPreviewStatus ? 'fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[#00000080] z-[999999] transition duration-[.3s] ease' : 'fixed transition duration-[.3s] ease top-[-3000px]'}>
      <PreviewProductComponent page={'home'} />
    </div>
  )
};