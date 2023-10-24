import React from 'react';

interface FormControl {
  componentType: "input";
  type: string;
  placeholder: string;
  label: string;
}

const loginFormControls: FormControl[] = [
  { componentType: "input", type: "email", placeholder: "Enter your email", label: "Email" },
  { componentType: "input", type: "password", placeholder: "Enter your password", label: "Password" }
];

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, label }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <input type={type} placeholder={placeholder} className="w-full p-3 rounded-lg" />
  </div>
);

export default function Login() {
  return (
    <div className="bg-[#EFF6FF] min-h-screen flex items-center justify-center mt-[-50px]"> {/* Adjusted here */}
      <div className="max-w-3xl bg-[#DBEAFE] shadow-2xl rounded-xl p-10 flex flex-row">
        <div className="mt-20 w-1/2 space-y-4 mr-10">
          <div className="font-medium text-3xl whitespace-nowrap">
            <p>Selamat Datang Kembali</p>
          </div>
          <div className="font-regular text-4xl">
            <p>Lokallers!</p>
          </div>
          <div className="font-regular text-base">
            <p>Masuk dulu ke akunmu dan segera dapatkan promo dan diskon menarik untuk memesan produk lokal pilihanmu!</p>
          </div>
        </div>
        <div className="w-full mt-6 space-y-8">
          <p className="text-2xl font-medium text-center">Login</p>
          <div className="w-full space-y-8">
            {loginFormControls.map((controlItem) => (
              controlItem.componentType === "input" ? (
                <InputComponent
                  key={controlItem.label}
                  type={controlItem.type}
                  placeholder={controlItem.placeholder}
                  label={controlItem.label}
                />
              ) : null
            ))}
            <button className="inline-flex w-full items-center justify-center bg-[#1E3A8A] hover:bg-blue-600 px-6 py-2 text-lg rounded-lg
              text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
              Login
            </button>

            <div className="flex flex-col gap-2 whitespace-nowrap text-center">
                <p> Belum Punya Akun? Yuk Buat Akun Dulu!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
