import { Button } from "./ui/button";
import { Form } from "./ui/input";

function App() {
  return (
    <div className="w-screen h-screen flex gap-[2.81rem] max-[768px]:gap-[0rem] max-[768px]:flex-col items-center justify-center bg-mobile bg-[#FF7979] font-poppins max-[768px]:text-center p-[1.5rem]">
      <div className="flex flex-col gap-4 select-none">
        <h1 className="text-white text-[3.125rem] max-[768px]:text-[1.75rem] font-bold leading-[3.4375rem] max-[768px]:leading-9 tracking-[-0.01825rem]">
          Learn to code by <br></br>watching others
        </h1>
        <p className="text-white text-base font-normal leading-relaxed mb-[4rem]">
          See how experienced developers solve problems in real-time.<br></br>{" "}
          Watching scripted tutorials is great, but understanding how <br></br>
          developers think is invaluable.
        </p>
      </div>

      <div className="flex flex-col gap-[1.5rem]">
        <div
          id="freeTry"
          className="flex items-center justify-center bg-third px-[4.12rem] py-[1.12rem] rounded-[0.625rem] select-none"
        >
          <p className="text-white text-[0.9375rem] font-light leading-relaxed tracking-[0.01675rem]">
            <span className="text-white text-[0.9375rem] font-semibold leading-relaxed tracking-[0.01675rem]">
              Try it free 7 days
            </span>{" "}
            then $20/mo. thereafter
          </p>
        </div>
        <div
          id="formBox"
          className="flex flex-col p-[1.5rem] bg-white gap-1 rounded-[0.625rem]"
        >
          <Form />
          <Button />
          <p className="text-[0.6875rem] text-[#BAB7D4] font-medium normal-whitespace lg:whitespace-nowrap select-none">
            By clicking the button, you are agreeing to our
            <a href="" className="text-primary font-bold leading-[1.3125rem] hover:underline">
              {" "}
              Terms and Services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
