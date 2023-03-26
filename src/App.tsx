import React, { useState, useEffect } from "react";

function App() {
  const [captchaInput, setCaptchInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [captchaSuccessfull, setCaptchaSuccessfull] = useState(false);
  const [theme, setTheme] = useState("Light");
  const captchaCharacters = "abcd1234";

  const generateCaptcha = () => {
    let result = "";

    for (let i = 0; i < 6; i++) {
      result += captchaCharacters.charAt(
        Math.floor(Math.random() * captchaCharacters.length)
      );
    }
    if (captchaSuccessfull) {
      setGeneratedCaptcha("-");
    } else {
      setGeneratedCaptcha(result);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    generateCaptcha();
  }, [theme]);

  const submitHandler = () => {
    if (captchaInput === generatedCaptcha) {
      setCaptchaSuccessfull(true);
      setCaptchInput("");
      setGeneratedCaptcha("-");
    }
  };

  const handleThemeSwitch = () => {
    setTheme((previousValue) => (previousValue === "dark" ? "Light" : "dark"));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                CREATE ACCOUNT
              </h1>
              <button className="dark:text-white" onClick={handleThemeSwitch}>
                {theme === "dark" ? (
                  <span className="material-icons-outlined">light_mode</span>
                ) : (
                  <span className="material-icons-outlined">
                    nightlight_round
                  </span>
                )}
              </button>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="New Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>

              <div className="flex items-center gap-20">
                <div className="flex gap-2 items-center">
                  <div className="bg-gray-200 px-8 py-2 line-through	tracking-widest	">
                    {generatedCaptcha}
                  </div>
                  <button onClick={() => generateCaptcha()}>
                    <span className="material-icons-outlined dark:text-white">
                      sync
                    </span>
                  </button>
                </div>
                {!captchaSuccessfull && (
                  <input
                    value={captchaInput}
                    onChange={(e) => setCaptchInput(e.target.value)}
                    placeholder="Enter CAPTCHA"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    required
                  />
                )}
              </div>
              <button
                onClick={() => submitHandler()}
                type="submit"
                className={`w-full ${
                  captchaSuccessfull
                    ? "bg-green-300 text-green-800 cursor-not-allowed"
                    : "bg-slate-100 text-slate-300"
                }  py-2 font-semibold`}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
