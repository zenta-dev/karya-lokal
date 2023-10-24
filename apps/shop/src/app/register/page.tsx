import React from 'react';

const isRegistered = false;

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, label }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <input type={type} placeholder={placeholder} className="w-full p-2 rounded-lg" />
  </div>
);

interface SelectProps {
  options: string[];
  label: string;
}

const SelectComponent: React.FC<SelectProps> = ({ options, label }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <select className="w-full p-2 rounded-lg">
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

type FormControl = 
  | { componentType: "input"; type: string; placeholder: string; label: string; }
  | { componentType: "select"; options: string[]; label: string; }

const registrationFormControls: FormControl[] = [
  { componentType: "input", type: "text", placeholder: "Enter your name", label: "Name" },
  { componentType: "input", type: "text", placeholder: "Enter your email", label: "Email" },
  { componentType: "input", type: "text", placeholder: "Enter your password", label: "Password" },
  { componentType: "select", options: ["Customer", "Admin"], label: "Choose your role" },
];

export default function Register() {
  return (
    <div className="bg-[#EFF6FF] min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-[#DBEAFE] shadow-2xl rounded-xl p-10 flex flex-row">
        <div className="mt-40 w-1/2 space-y-4 mr-10">
            <div className="font-medium text-3xl whitespace-nowrap">
                <p>Halo, Selamat Datang</p>
            </div>
            <div className="font-regular text-4xl">
                <p>Lokallers!</p>
            </div>
            <div className="font-regular text-2xl"></div>
                <p>Buat akun dulu yuk, agar nanti nanti bisa langsung mencoba fitur-fitur kita untuk mendapatkan produk lokal yang anda inginkan!</p>
            </div>
        <div className="w-1/2 space-y-4">
          <p className="text-2xl font-medium text-center">
            {isRegistered ? 'Registration Successfull!' : 'Sign Up for an Account'}
          </p>
          {isRegistered ? (
            <button className="bg-[#1E3A8A] text-white text-lg px-6 py-4 mt-4 block mx-auto font-medium uppercase tracking-wide">
              Login
            </button>
          ) : 
          <div className="w-full mt-6 space-y-8">
              {registrationFormControls.map((controlItem) =>
                  controlItem.componentType === "input" ? (
                      <InputComponent 
                        key={controlItem.label}
                        type={controlItem.type}
                        placeholder={controlItem.placeholder}
                        label={controlItem.label}
                      />
                  ) : controlItem.componentType === "select" ? (
                      <SelectComponent 
                        key={controlItem.label}
                        options={controlItem.options}
                        label={controlItem.label}
                      />
                  ) : null
              )}

              <button className="inline-flex w-full items-center justify-center bg-[#1E3A8A] hover:bg-blue-600 px-6 py-2 text-lg rounded-lg
              text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
              Register
              </button>

              <div className="flex flex-col gap-2 whitespace-nowrap text-center">
                <p> Sudah Punya Akun? Yuk Langsung Masuk!</p>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}
