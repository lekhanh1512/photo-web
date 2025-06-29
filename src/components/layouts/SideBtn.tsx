import { Facebook, NotebookPen, Phone } from "lucide-react";
import { useState } from "react";

const SideBtn = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleHotline = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-72 right-0 flex flex-col items-end z-50">
      <div className={`flex items-center transition-all duration-300 ${isActive ? "w-56" : "w-14"} bg-yellow-400 rounded-tl-lg w-12`}>
        <div 
          className={`togglea-hotline cursor-pointer flex items-center justify-center w-16 h-14 rounded-l-lg transition-all duration-300 ${isActive ? '' : ''}`} 
          onClick={toggleHotline}
        >
          <Phone size={40} className="text-white mx-2" />
        </div>
        <div className={`bg-orange-500 text-[#328121] p-3.5 w-full bg-gray-200 shadow-2xl transition-transform duration-300 ${isActive ? '' : 'hidden'}`}>
          <div className="text-center">
            <p className="text-xl font-bold">033 322 0058</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
      {/* Connection Button */}
      <div className="flex items-end z-50">
        <button
          className="block bg-orange p-2 w-16 h-26 rounded-tl-lg rounded-bl-lg"
          onClick={toggleFormVisibility}
        >
          <p className="text-white text-[12px] text-center">Kết nối ngay</p>
          <NotebookPen size={40} className="text-white mx-auto" />
        </button>
      
      </div>

      {/* Form Section */}
      {isFormVisible && (
       <div id="col-1992558617" className="col small-12 large-12">
         <div className="col-inner">
           <div id="form-dangky" className="bg-white rounded-lg shadow-md p-6">
             <form
               action="/co-so-eco-green-quan-7/#wpcf7-f7-o5"
               method="post"
               className="wpcf7-form init"
               aria-label="Form liên hệ"
               noValidate
             >
               <div style={{ display: "none" }}>
                 <input type="hidden" name="_wpcf7" value="7" />
                 <input type="hidden" name="_wpcf7_version" value="6.0.3" />
                 <input type="hidden" name="_wpcf7_locale" value="vi" />
                 <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f7-o5" />
                 <input type="hidden" name="_wpcf7_container_post" value="0" />
                 <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
               </div>
               <div className="mb-4">
                 <label className="block font-semibold mb-1">
                   Tên bé
                   <input
                     size={40}
                     maxLength={400}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     aria-required="true"
                     placeholder="Tên bé"
                     type="text"
                     name="pathway-form-tenbe"
                   />
                 </label>
               </div>
               <div className="mb-4">
                 <label className="block font-semibold mb-1">
                   Năm sinh bé
                   <input
                     size={40}
                     maxLength={400}
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     aria-required="true"
                     placeholder="Năm sinh bé"
                     type="text"
                     name="pathway-form-nam-sinh-be"
                   />
                 </label>
               </div>
               <div className="flex flex-row mb-4">
                 <div className="flex-1 mr-2">
                   <label className="block font-semibold mb-1">
                     Số điện thoại
                     <input
                       size={40}
                       maxLength={400}
                       className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                       aria-required="true"
                       placeholder="Số điện thoại"
                       type="tel"
                       name="pathway-form-tel"
                     />
                   </label>
                 </div>
                 <div className="flex-1 ml-2">
                   <label className="block font-semibold mb-1">
                     Email
                     <input
                       size={40}
                       maxLength={400}
                       className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                       aria-required="true"
                       placeholder="email@gmail.com"
                       type="email"
                       name="pathway-form-email"
                     />
                   </label>
                 </div>
               </div>
               <div className="mb-4">
                 <label className="block font-semibold mb-1">
                   Chọn khối cấp | Cơ sở:
                   <select
                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     aria-required="true"
                     name="pathway-form-coso"
                   >
                     <option value="">Vui lòng chọn</option>
                     <option value="Mầm non | Cơ sở Bình An, TP. Thủ Đức">Mầm non | Cơ sở Bình An, TP. Thủ Đức</option>
                     {/* Add other options here */}
                   </select>
                 </label>
               </div>
               <button
                 type="submit"
                 className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
               >
                 Kết nối ngay <i className="fa-solid fa-angle-right"></i>
               </button>
               <div className="wpcf7-response-output mt-4 text-red-500" aria-hidden="true"></div>
             </form>
           </div>
         </div>
       </div>
      )}
    </div>
      <a
        className="block p-2 bg-blue-600 rounded-bl-lg w-14 h-14 "
        href="https://www.facebook.com/ClbCoVuaTpThuDuc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={40} className="text-white mx-auto" />
      </a>
    </div>
  );
};

export default SideBtn;