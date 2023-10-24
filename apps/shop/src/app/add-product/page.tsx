// 'use client';

// import React, { useState } from 'react';

// const AddProductPage = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-3xl mb-5 font-bold text-center">Add Product</h1>
//       <div className="bg-[#DBEAFE] p-4 rounded-lg m-3 shadow-2xl">
//         <form>
//         <label className="block text-sm font-medium mb-3">Product Name</label>
//           <input
//             required
//             name="name"
//             placeholder="Product Name"
//             className="input-bordered input rounded-md w-full p-2 mb-3"
//           />

//           <label className="block text-sm font-medium mb-3 mt-3">Product Description</label>
//           <textarea
//             required
//             name="description"
//             placeholder="Product Description"
//             className="input-bordered input rounded-md w-full h-32 p-2 mb-3"
//           />

//           <label className="block text-sm font-medium mb-3">Select Product Category</label>
//           <div className="relative rounded-lg mb-2">
//             <select
//               required
//               name="category"
//               className="input-bordered input w-full p-2 rounded-lg"
//             >
//               <option value="" disabled selected>
//                 Select Product Category
//               </option>
//               <optgroup label="Pakaian">
//                 <option value="Pakaian1">Pakaian Wanita</option>
//                 <option value="Pakaian2">Pakaian Pria</option>
//                 <option value="Pakaian3">Pakaian Anak</option>
//               </optgroup>
//               <optgroup label="Furniture">
//                 <option value="Furniture1">Tempat Penyimpanan</option>
//                 <option value="Furniture2">Kursi dan Meja</option>
//                 <option value="Furniture3">Alat Rumah Tangga</option>
//               </optgroup>
//               <optgroup label="Aksesoris">
//                 <option value="Aksesoris1">Tas dan Dompet</option>
//                 <option value="Aksesoris2">Sandal dan Sepatu</option>
//                 <option value="Aksesoris3">Perhiasan</option>
//               </optgroup>
//               <optgroup label="Kecantikan">
//                 <option value="Kecantikan1">Perawatan Wajah</option>
//                 <option value="Kecantikan2">Perawatan Badan</option>
//                 <option value="Kecantikan3">Perawatan Rambut</option>
//               </optgroup>
//             </select>
//           </div>
//           <label className="block text-sm font-medium mt-5">Product Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="rounded-md mb-3 p-2"
//           />
//           {image && (
//             <div className="mb-3">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Selected Product"
//                 className="w-full h-auto rounded-md p-2"
//               />
//             </div>
//           )}

//           <label className="block text-sm font-medium mb-3">Product Price</label>
//           <input
//             required
//             name="price"
//             placeholder="Product Price"
//             type="number"
//             className="input-bordered input rounded-md w-full p-2"
//           />
//         </form>
//       </div>
//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="bg-[#1E3A8A] text-white font-semibold py-2 px-28 rounded-lg hover:bg-blue-600 mt-4"
//         >
//           Add Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProductPage;



